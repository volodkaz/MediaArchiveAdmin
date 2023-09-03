package org.vladimir.homearchiveauth.model.response;

import java.util.List;

public record ClientTabPropertyResponse(Long id, String name, String comment, List<ClientInfoResponse> infos) {
}
