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
import org.vladimir.homearchiveauth.domain.clienttab.ClientTabMapper;
import org.vladimir.homearchiveauth.domain.clienttab.ClientTabService;
import org.vladimir.homearchiveauth.exception.UserInfoTabException;
import org.vladimir.homearchiveauth.model.object.ClientTab;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;
import org.vladimir.homearchiveauth.model.response.ClientTabResponse;
import org.vladimir.homearchiveauth.model.response.ErrorResponse;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"}, allowCredentials = "true")
@RestController
@RequestMapping("/userTab")
@RequiredArgsConstructor
public class UserInfoTabController {

    private final ClientTabService service;
    private final ClientTabMapper mapper;

    @GetMapping("/fetchUserTab")
    public List<ClientTabResponse> getUserInfoTabs(@RequestParam Long limit){
        final List<ClientTab> tabTypes = service.getTabs();
        return mapper.objectsToResponses(tabTypes);
    }

    @PostMapping("createUserTab")
    public List<ClientTabResponse> createUserInfoTab(@RequestBody ClientTabRequest request){
//        assert clientRequest.tabId() != null && clientRequest.secret() != null;
        final List<ClientTab> tabTypes = service.createTab(request);
        return mapper.objectsToResponses(tabTypes);
    }

    @DeleteMapping("deleteUserTab")
    public List<ClientTabResponse> deleteUserInfoTab(@RequestParam Long tabId){
        final List<ClientTab> tabTypes = service.deleteTab(tabId);
        return mapper.objectsToResponses(tabTypes);
    }

    @ExceptionHandler({UserInfoTabException.class})
    public ResponseEntity<ErrorResponse> handleUserAuthException(RuntimeException exception){
        return ResponseEntity
                .badRequest()
                .body(new ErrorResponse(exception.getMessage()));
    }
}
