package org.vladimir.homearchiveauth.domain.token;

import io.jsonwebtoken.Claims;
import org.vladimir.homearchiveauth.model.object.Client;

public interface TokenService {
    String generateToken(Client client);
    String getUserByToken(String token);

    String extractUsername(String authToken);

    boolean validateToken(String authToken);

    Claims getClaimsFromToken(String authToken);
}
