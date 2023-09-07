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
import org.vladimir.homearchiveauth.domain.clientinfo.ClientInfoMapper;
import org.vladimir.homearchiveauth.domain.clientinfo.ClientInfoService;
import org.vladimir.homearchiveauth.exception.UserInfoException;
import org.vladimir.homearchiveauth.model.object.ClientInfoWithTabs;
import org.vladimir.homearchiveauth.model.request.ClientInfoRequest;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;
import org.vladimir.homearchiveauth.model.response.ClientInfoContainerResponse;
import org.vladimir.homearchiveauth.model.response.ErrorResponse;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"}, allowCredentials = "true")
@RestController
@RequestMapping("/userInfo")
@RequiredArgsConstructor
public class UserInfoController {

    private final ClientInfoService service;
    private final ClientInfoMapper mapper;

    @GetMapping("/fetchUserInfo")
    public ClientInfoContainerResponse getUserInfo(@RequestParam Long userId){
        final ClientInfoWithTabs clientInfo = service.getClientInfo(userId);
        return mapper.objectToResponse(clientInfo);
    }

    @PostMapping("createUserInfo")
    public ClientInfoContainerResponse createUserInfo(@RequestBody ClientTabRequest clientInfoRequest){
//        assert clientRequest.clientId() != null && clientRequest.clientSecret() != null;
        ClientInfoWithTabs clientInfo = service.createUserInfo(clientInfoRequest);
        return mapper.objectToResponse(clientInfo);
    }

    @PostMapping("updateUserInfo")
    public ClientInfoContainerResponse updateUserInfo(@RequestBody List<ClientInfoRequest> clientInfoRequest){
//        assert clientRequest.clientId() != null && clientRequest.clientSecret() != null;
        ClientInfoWithTabs clientInfo = service.updateUserInfo(clientInfoRequest);
        return mapper.objectToResponse(clientInfo);
    }

    @DeleteMapping("deleteUserInfo")
    public void deleteUser(@RequestParam Long userId){
        service.deleteUserInfo(userId);
    }

    @ExceptionHandler({UserInfoException.class})
    public ResponseEntity<ErrorResponse> handleUserAuthException(RuntimeException exception){
        return ResponseEntity
                .badRequest()
                .body(new ErrorResponse(exception.getMessage()));
    }
}
