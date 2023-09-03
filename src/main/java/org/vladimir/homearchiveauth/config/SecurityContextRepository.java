package org.vladimir.homearchiveauth.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextImpl;
import org.springframework.security.web.context.HttpRequestResponseHolder;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class SecurityContextRepository implements org.springframework.security.web.context.SecurityContextRepository {
    private final AuthenticationManager authenticationManager;

    @Override
    public SecurityContext loadContext(HttpRequestResponseHolder requestResponseHolder) {
        String authHeader = requestResponseHolder.getRequest()
                .getHeaders(HttpHeaders.AUTHORIZATION).nextElement();

        if (authHeader != null && authHeader.startsWith("Noga ")) {
            String authToken = authHeader.substring(5);

            UsernamePasswordAuthenticationToken auth
                    = new UsernamePasswordAuthenticationToken(authToken, authToken);
            final Authentication authenticate = authenticationManager
                    .authenticate(auth);

            return new SecurityContextImpl(authenticate);
        }
        return new SecurityContextImpl();
    }

    @Override
    public void saveContext(SecurityContext context, HttpServletRequest request, HttpServletResponse response) {
        throw new IllegalStateException("Save method not supported!");
    }

    @Override
    public boolean containsContext(HttpServletRequest request) {
        return false;
    }
}
