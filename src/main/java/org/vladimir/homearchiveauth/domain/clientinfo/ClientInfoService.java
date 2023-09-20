package org.vladimir.homearchiveauth.domain.clientinfo;

import org.vladimir.homearchiveauth.model.object.ClientInfoTab;
import org.vladimir.homearchiveauth.model.request.ClientInfoContainerRequest;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;

import java.util.List;

public interface ClientInfoService {
    List<ClientInfoTab> getClientInfo(Long userId);

    List<ClientInfoTab> createUserInfo(ClientTabRequest request);

    List<ClientInfoTab> updateUserInfo(ClientInfoContainerRequest request);

    List<ClientInfoTab> deleteUserInfo(Long infoTabId);
}
