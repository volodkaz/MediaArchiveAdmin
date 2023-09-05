package org.vladimir.homearchiveauth.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.vladimir.homearchiveauth.domain.client.ClientService;
import org.vladimir.homearchiveauth.domain.role.RoleService;
import org.vladimir.homearchiveauth.domain.token.TokenService;
import org.vladimir.homearchiveauth.exception.LoginException;
import org.vladimir.homearchiveauth.exception.RegistrationException;
import org.vladimir.homearchiveauth.exception.ValidationTokenException;
import org.vladimir.homearchiveauth.model.object.Client;
import org.vladimir.homearchiveauth.model.request.ClientRequest;
import org.vladimir.homearchiveauth.model.request.UserIdRequest;
import org.vladimir.homearchiveauth.model.response.AuthResponse;
import org.vladimir.homearchiveauth.model.response.ClientResponse;
import org.vladimir.homearchiveauth.model.response.ErrorResponse;

import java.util.ArrayList;

@CrossOrigin(origins = {"http://localhost:3000"}, allowCredentials = "true")
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final ClientService clientService;
    private final TokenService tokenService;


    @PostMapping
    public AuthResponse register(@RequestBody ClientRequest clientRequest){

        clientService.register(clientRequest);

        Client client = clientService.getClient(clientRequest);
        final String token = tokenService.generateToken(client);
        final ClientResponse clientResponse = new ClientResponse(null, clientRequest.login(), true, new ArrayList<>(client.roles()));
        return new AuthResponse(token, null, clientResponse, true);
    }

    @PostMapping("/registerRole")
    public ResponseEntity<String> registerRoleClient(@RequestBody ClientRequest clientRequest){
        clientService.addRoleToClient(clientRequest);
        return ResponseEntity.ok("Registered Role successful");
    }

//    @PostMapping("/token")
//    public TokenResponse getToken(@RequestBody ClientRequest clientRequest){
//        assert clientRequest != null;
//        Client client = clientService.checkCredentials(clientRequest);
//        return new TokenResponse(tokenService.generateToken(client));
//    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody ClientRequest clientRequest){
        assert clientRequest != null;
        Client client = clientService.checkCredentials(clientRequest);
        final String token = tokenService.generateToken(client);
        final ClientResponse clientResponse = new ClientResponse(client.clientId(), client.clientName(), true, new ArrayList<>(client.roles()));
        return new AuthResponse(token, null, clientResponse, true);
    }

    @PostMapping("/refresh")
    public AuthResponse refresh(@RequestBody ClientRequest clientRequest){
        assert clientRequest != null;
        Client client = clientService.checkCredentials(clientRequest);
        final String token = tokenService.generateToken(client);
        tokenService.getUserByToken(token);
        final ClientResponse clientResponse = new ClientResponse(client.clientId(), client.clientName(), true, new ArrayList<>(client.roles()));
        return new AuthResponse(token, null, clientResponse, true);
    }

    @PostMapping("/logout")
    public AuthResponse logout(@RequestBody UserIdRequest user){
        assert user != null;
        final ClientResponse clientResponse = new ClientResponse(user.id(), user.login());
        return new AuthResponse(null, null, clientResponse, false);
    }

    @ExceptionHandler({RegistrationException.class, LoginException.class, ValidationTokenException.class})
    public ResponseEntity<ErrorResponse> handleUserAuthException(RuntimeException exception){
        return ResponseEntity
                .status(exception instanceof LoginException ? HttpStatus.UNAUTHORIZED : HttpStatus.BAD_REQUEST)
                .body(new ErrorResponse(exception.getMessage()));
    }

    @PostMapping("/check")
    @ResponseBody
    public AuthResponse check(HttpServletRequest request){
         String token = request.getHeader("authorization");
        assert token != null;
        token = token.replace("Noga", "").trim();
        if(token.isBlank()){
            return new AuthResponse(token, null, null, false);
        }
        String clientName = tokenService.getUserByToken(token);
        final Client client = clientService.getClientByName(clientName);
        assert client != null;
        final ClientResponse clientResponse = new ClientResponse(client.clientId(), client.clientName(),true,
                new ArrayList<>(client.roles()));
        return new AuthResponse(token, null, clientResponse, true);
    }
}
