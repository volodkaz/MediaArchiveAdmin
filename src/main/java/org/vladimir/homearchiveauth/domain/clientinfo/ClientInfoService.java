package org.vladimir.homearchiveauth.domain.clientinfo;

import org.vladimir.homearchiveauth.model.object.ClientInfoWithTabs;
import org.vladimir.homearchiveauth.model.request.ClientInfoRequest;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;

import java.util.List;

public interface ClientInfoService {
    ClientInfoWithTabs getClientInfo(Long userId);

    ClientInfoWithTabs createUserInfo(ClientTabRequest request);

    ClientInfoWithTabs updateUserInfo(List<ClientInfoRequest> clientRequest);

    void deleteUserInfo(Long userId);
}
