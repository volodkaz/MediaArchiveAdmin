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
import org.vladimir.homearchiveauth.model.object.ClientInfoTab;
import org.vladimir.homearchiveauth.model.request.ClientInfoContainerRequest;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;
import org.vladimir.homearchiveauth.model.response.ClientInfoTabResponse;
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
    public List<ClientInfoTabResponse> getUserInfo(@RequestParam Long userId){
        final List<ClientInfoTab> clientInfo = service.getClientInfo(userId);
        return mapper.objectToResponse(clientInfo);
    }

    @PostMapping("createUserInfo")
    public List<ClientInfoTabResponse> createUserInfo(@RequestBody ClientTabRequest request){
        assert(request.tabId() != null && request.userId() != null);
        List<ClientInfoTab> clientInfo = service.createUserInfo(request);
        return mapper.objectToResponse(clientInfo);
    }

    @PostMapping("updateUserInfo")
    public List<ClientInfoTabResponse> updateUserInfo(@RequestBody ClientInfoContainerRequest clientInfoRequest){
//        assert clientRequest.tabId() != null && clientRequest.secret() != null;
        List<ClientInfoTab> clientInfo = service.updateUserInfo(clientInfoRequest);
        return mapper.objectToResponse(clientInfo);
    }

    @DeleteMapping("deleteUserInfo")
    public List<ClientInfoTabResponse> deleteUser(@RequestParam Long userId, @RequestParam Long infoTabId){
        return mapper.objectToResponse(service.deleteUserInfo(userId, infoTabId));
    }

    @ExceptionHandler({UserInfoException.class})
    public ResponseEntity<ErrorResponse> handleUserAuthException(RuntimeException exception){
        return ResponseEntity
                .badRequest()
                .body(new ErrorResponse(exception.getMessage()));
    }
}
