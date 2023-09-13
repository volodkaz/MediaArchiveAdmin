package org.vladimir.homearchiveauth.model.request;

import org.vladimir.homearchiveauth.model.object.ClientInfo;

import java.util.List;

public record ClientInfoContainerRequest(Long userId, List<ClientInfoRequest> infos) {
}
