package org.vladimir.homearchiveauth.config;

import io.jsonwebtoken.Claims;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import org.vladimir.homearchiveauth.domain.token.ClaimNames;
import org.vladimir.homearchiveauth.domain.token.TokenService;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
@Slf4j
public class AuthenticationManager implements org.springframework.security.authentication.AuthenticationManager {
    private final TokenService tokenService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String authToken = authentication.getCredentials().toString();

        String username;

        try {
            username = tokenService.extractUsername(authToken);
        } catch (Exception e) {
            username = null;
            log.error(e.getMessage());
        }

        if (username != null && tokenService.validateToken(authToken)) {
            Claims claims = tokenService.getClaimsFromToken(authToken);
            List<String> role = claims.get(ClaimNames.ROLES.name(), List.class);
            List<SimpleGrantedAuthority> authorities = role.stream()
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toList());

            return new UsernamePasswordAuthenticationToken(
                    username,
                    null,
                    authorities
            );
        } else {
            return new UsernamePasswordAuthenticationToken(
                    username,
                    null,
                    Collections.emptyList()
            );
        }
    }
}
