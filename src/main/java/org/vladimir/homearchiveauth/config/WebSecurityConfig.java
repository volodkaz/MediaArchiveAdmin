package org.vladimir.homearchiveauth.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
    private final AuthenticationManager authenticationManager;
    private final SecurityContextRepository securityContextRepository;

    public WebSecurityConfig(AuthenticationManager authenticationManager,
                             SecurityContextRepository securityContextRepository) {
        this.authenticationManager = authenticationManager;
        this.securityContextRepository = securityContextRepository;
    }

//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }

    @Bean
    public SecurityFilterChain securityWebFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .exceptionHandling()
                .authenticationEntryPoint(
                        (request, response, authException) -> {
                            createErrorData(request, response, authException, HttpServletResponse.SC_UNAUTHORIZED);
                        }

                )
                .accessDeniedHandler(
                        (request, response, accessDeniedException) -> {
                            createErrorData(request, response, accessDeniedException, HttpServletResponse.SC_FORBIDDEN);
                        }
                )
                .and().cors(withDefaults())
                .csrf().disable()
                .formLogin().disable()
                .httpBasic().disable()
                .authenticationManager(authenticationManager)
                .securityContext(securityContext -> securityContext.securityContextRepository(securityContextRepository))
                .authorizeHttpRequests()
                .requestMatchers( "/auth/**", "/favicon.ico").permitAll()
                .requestMatchers("/user/**", "/role/**").hasRole("ADMIN")
                .anyRequest().authenticated()
                .and()
                .build();
    }

    private void createErrorData(HttpServletRequest request, HttpServletResponse response,
                                 RuntimeException authException, int errorCode) throws IOException {
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(errorCode);

        final Map<String, Object> body = new HashMap<>();
        body.put("status", errorCode);
        body.put("error", "Unauthorized");
        body.put("message", authException.getMessage());
        body.put("path", request.getServletPath());

        final ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(response.getOutputStream(), body);
    }
}
