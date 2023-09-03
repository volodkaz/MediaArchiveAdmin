package org.vladimir.homearchiveauth.model.response;

import java.util.Collections;
import java.util.List;

public record ClientResponse(Long id, String name, boolean isActivated, boolean isAdmin, List<String> roles) {
    public ClientResponse{
        roles = roles == null ? Collections.emptyList(): roles;
        isAdmin = roles.contains("ROLE_ADMIN");
    }
    public ClientResponse(Long id, String name, boolean isActivated, List<String> roles){
        this(id, name, isActivated, false, roles);
    }
    public ClientResponse(Long id, String name){
        this(id, name, false, Collections.emptyList());
    }
}
