package org.vladimir.homearchiveauth.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.vladimir.homearchiveauth.domain.client.ClientService;
import org.vladimir.homearchiveauth.exception.CreateUserException;
import org.vladimir.homearchiveauth.model.object.Client;
import org.vladimir.homearchiveauth.model.request.ClientRequest;
import org.vladimir.homearchiveauth.model.response.ClientResponse;
import org.vladimir.homearchiveauth.model.response.ErrorResponse;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"}, allowCredentials = "true")
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final ClientService clientService;

    @GetMapping("/fetchUsers")
    public List<ClientResponse> getAllUsers(@RequestParam int limit){
        List<ClientResponse> clients = clientService.getAllClients(limit);
        return clients;
    }

    @PostMapping("createUser")
    public ClientResponse createUser(@RequestBody ClientRequest clientRequest){
//        assert clientRequest.clientId() != null && clientRequest.clientSecret() != null;
        Client client = clientService.createUser(clientRequest);
        return new ClientResponse(client.clientId(), client.clientName(), true, new ArrayList<>(client.roles()));
    }

    @DeleteMapping("deleteUser")
    public ClientResponse deleteUser(@RequestParam String userName){
        clientService.deleteUser(userName);
        return new ClientResponse(null, userName);
    }

    @ExceptionHandler({CreateUserException.class})
    public ResponseEntity<ErrorResponse> handleUserAuthException(RuntimeException exception){
        return ResponseEntity
                .badRequest()
                .body(new ErrorResponse(exception.getMessage()));
    }
}
