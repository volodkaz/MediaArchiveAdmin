package org.vladimir.homearchiveauth.model.response;

import java.util.List;

public record ClientInfoPropertyResponse(Long id, ClientTabPropertyResponse property, List<ClientInfoResponse> infos) {
}
