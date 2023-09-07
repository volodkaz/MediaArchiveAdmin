package org.vladimir.homearchiveauth.domain.clienttab;

import org.vladimir.homearchiveauth.model.object.ClientTabType;
import org.vladimir.homearchiveauth.model.request.ClientTabTypeRequest;

import java.util.List;

public interface ClientTabTypeService {
    List<ClientTabType> getTabTypes();

    List<ClientTabType> createTabType(ClientTabTypeRequest request);

    List<ClientTabType> deleteTabType(Long tabId);
}
