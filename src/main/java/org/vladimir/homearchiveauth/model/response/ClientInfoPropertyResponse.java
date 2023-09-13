package org.vladimir.homearchiveauth.model.response;

import org.vladimir.homearchiveauth.repository.ClientTabPropertyResponse;

import java.util.List;

public record ClientInfoPropertyResponse(Long id, ClientTabPropertyResponse property, List<ClientInfoResponse> infos) {
}
