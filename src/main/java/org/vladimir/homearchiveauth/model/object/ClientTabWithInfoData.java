package org.vladimir.homearchiveauth.model.object;

import org.vladimir.homearchiveauth.domain.clientinfo.IdObject;

import java.util.List;

public record ClientTabWithInfoData(ClientTab tab, List<ClientTabPropertyWithData> property) implements
        IdObject {
    @Override
    public Long getId() {
        return tab.id();
    }
}
