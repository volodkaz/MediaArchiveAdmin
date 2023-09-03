package org.vladimir.homearchiveauth.model.object;

import org.vladimir.homearchiveauth.domain.clientinfo.IdObject;

import java.util.List;

public record ClientTabPropertyWithData(ClientTabProperty property, List<ClientInfo> infos) implements IdObject {
    @Override
    public Long getId() {
        return property.id();
    }
}
