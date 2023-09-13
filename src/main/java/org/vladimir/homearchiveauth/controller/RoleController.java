package org.vladimir.homearchiveauth.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.vladimir.homearchiveauth.domain.role.RoleService;
import org.vladimir.homearchiveauth.model.object.Role;
import org.vladimir.homearchiveauth.model.request.RoleRequest;

import java.util.Optional;
import java.util.Set;
@CrossOrigin(origins = {"http://localhost:3000"}, allowCredentials = "true")
@RestController
@RequiredArgsConstructor
@RequestMapping("/role")
public class RoleController {
    private final RoleService service;

    @GetMapping("/getRole")
    public ResponseEntity<Role> getRoleById(@RequestParam String roleId){
        return ResponseEntity.ok().body(service.getRoleByName(roleId));
    }

    @GetMapping("/getAllRoles")
    public ResponseEntity<Set<Role>> getAllRoles(){
        return ResponseEntity.ok().body(service.getAllRoles());
    }

    @PostMapping("/addRole")
    public ResponseEntity<String> addRole(@RequestBody RoleRequest roleRequest){
        service.createNewRole(roleRequest);
        return ResponseEntity.ok("Added new role successful");
    }

    @PostMapping("/deleteRole")
    public ResponseEntity<String> deleteRole(@RequestBody RequestEntity<Role> roleRequest){
        Optional.ofNullable(roleRequest.getBody())
                .ifPresent(role -> service.deleteRole(role.name()));
        return ResponseEntity.ok("Deleted new role successful");
    }

}
