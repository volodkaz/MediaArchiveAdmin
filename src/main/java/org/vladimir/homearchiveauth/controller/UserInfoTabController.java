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
import org.vladimir.homearchiveauth.domain.clienttab.ClientTabTypeMapper;
import org.vladimir.homearchiveauth.domain.clienttab.ClientTabTypeService;
import org.vladimir.homearchiveauth.exception.UserInfoException;
import org.vladimir.homearchiveauth.exception.UserInfoTabException;
import org.vladimir.homearchiveauth.model.object.ClientInfoWithTabs;
import org.vladimir.homearchiveauth.model.object.ClientTabType;
import org.vladimir.homearchiveauth.model.request.ClientTabTypeRequest;
import org.vladimir.homearchiveauth.model.response.ClientTabTypeResponse;
import org.vladimir.homearchiveauth.model.response.ErrorResponse;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"}, allowCredentials = "true")
@RestController
@RequestMapping("/userInfoTab")
@RequiredArgsConstructor
public class UserInfoTabController {

    private final ClientTabTypeService service;
    private final ClientTabTypeMapper mapper;

    @GetMapping("/fetchUserInfoTabType")
    public List<ClientTabTypeResponse> getUserInfoTabs(@RequestParam Long limit){
        final List<ClientTabType> tabTypes = service.getTabTypes();
        return mapper.objectsToResponses(tabTypes);
    }

    @PostMapping("createUserInfoTabType")
    public List<ClientTabTypeResponse> createUserInfoTab(@RequestBody ClientTabTypeRequest request){
//        assert clientRequest.clientId() != null && clientRequest.clientSecret() != null;
        final List<ClientTabType> tabTypes = service.createTabType(request);
        return mapper.objectsToResponses(tabTypes);
    }

    @DeleteMapping("deleteUserInfoTabType")
    public List<ClientTabTypeResponse> deleteUserInfoTab(@RequestParam Long tabId){
        final List<ClientTabType> tabTypes = service.deleteTabType(tabId);
        return mapper.objectsToResponses(tabTypes);
    }

    @ExceptionHandler({UserInfoTabException.class})
    public ResponseEntity<ErrorResponse> handleUserAuthException(RuntimeException exception){
        return ResponseEntity
                .badRequest()
                .body(new ErrorResponse(exception.getMessage()));
    }
}
