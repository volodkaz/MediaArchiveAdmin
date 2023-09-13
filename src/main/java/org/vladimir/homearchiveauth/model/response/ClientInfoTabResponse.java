package org.vladimir.homearchiveauth.model.response;

import java.util.List;

public record ClientInfoTabResponse(Long id, String name, String comment, ClientTabResponse tab, List<ClientInfoPropertyResponse> properties) {
}
