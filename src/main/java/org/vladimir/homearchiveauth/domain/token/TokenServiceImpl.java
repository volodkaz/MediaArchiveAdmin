package org.vladimir.homearchiveauth.domain.token;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.vladimir.homearchiveauth.exception.ValidationTokenException;
import org.vladimir.homearchiveauth.model.object.Client;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@Service
@Slf4j
public class TokenServiceImpl implements TokenService {

    @Value(value = "${auth.jwt.key}")
    private String secretKey;
    @Value(value = "${auth.jwt.expirationTime}")
    private String expirationTime;
    @Value(value = "${auth.jwt.issuer}")
    private String issuer;
    @Value(value = "${auth.jwt.audience}")
    private String audience;

    @Override
    public String generateToken(Client client) {

        long expirationMinutes = Long.parseLong(expirationTime);

        Instant now = Instant.now();
        Instant exp = now.plus(expirationMinutes, ChronoUnit.MINUTES);

        final HashMap<String, Object> claims = new HashMap<>();
        claims.put(ClaimNames.USER_ID.name(), client.clientId());
        claims.put(ClaimNames.ROLES.name(), List.copyOf(client.roles()));

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(client.clientName())
                .setIssuedAt(Date.from(now))
                .setExpiration(Date.from(exp))
                .setAudience(audience)
                .setIssuer(issuer)
                .signWith(Keys.hmacShaKeyFor(secretKey.getBytes()))
                .compact();
    }

    @Override
    public String getUserByToken(String token) {

        if(validateToken(token)){
            final Claims claimsFromToken = getClaimsFromToken(token);
            return claimsFromToken.getSubject();
        }
        throw new ValidationTokenException("User not fount");
    }

    @Override
    public String extractUsername(String authToken) {
        return getClaimsFromToken(authToken)
                .getSubject();
    }

    @Override
    public boolean validateToken(String authToken) {

        final Claims claimsFromToken = getClaimsFromToken(authToken);
        if(!claimsFromToken.getExpiration().after(new Date())){
            log.error("Date expired");
            throw new ValidationTokenException("Date expired");
        }

        if(!claimsFromToken.getIssuer().equals(issuer)){
            log.error("Issuer is incorrect");
            throw new ValidationTokenException("Token is invalid: Issuer is incorrect");
        }
        if(!claimsFromToken.getAudience().contains(audience)){
            log.error("Audience is incorrect");
            throw new ValidationTokenException("Token is invalid: Audience is incorrect");
        }

        return true;
    }

    @Override
    public Claims getClaimsFromToken(String authToken) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(Keys.hmacShaKeyFor(secretKey.getBytes()))
                    .build()
                    .parseClaimsJws(authToken)
                    .getBody();
        }catch (ExpiredJwtException ex){
            throw new ValidationTokenException("Время сессии вышло");
        }catch(Exception ex){
            throw new ValidationTokenException(ex.getMessage());
        }

    }
}
