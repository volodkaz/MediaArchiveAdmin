package org.vladimir.homearchiveauth.model.response;

public record AuthResponse(String accessToken, String refreshToken, ClientResponse client, boolean isAuth) {
}
