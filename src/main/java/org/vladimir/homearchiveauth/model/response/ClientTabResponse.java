package org.vladimir.homearchiveauth.model.response;

import java.util.List;

public record ClientTabResponse(Long id, String name, String comment, ClientTabTypeResponse tabType, List<ClientTabPropertyResponse> property) {
}
