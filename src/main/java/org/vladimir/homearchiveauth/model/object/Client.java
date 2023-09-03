package org.vladimir.homearchiveauth.model.object;

import java.util.Collections;
import java.util.List;
import java.util.Set;

public record Client(Long clientId, String clientName, String clientSecret, String refreshToken, Set<String> roles) {
    public Client(Long clientId, String clientName){
        this(clientId, clientName, null, null, Collections.emptySet());
    }
    public Client(Long clientId, String clientName, Set<String> roles){
        this(clientId, clientName, null, null, roles);
    }
}
