package org.vladimir.homearchiveauth.domain.clienttab;

import org.vladimir.homearchiveauth.model.object.ClientTab;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;

import java.util.List;

public interface ClientTabService {
    List<ClientTab> getTabs();

    ClientTab getTab(String name);

    List<ClientTab> createTab(ClientTabRequest request);

    List<ClientTab> deleteTab(Long tabId);
}
