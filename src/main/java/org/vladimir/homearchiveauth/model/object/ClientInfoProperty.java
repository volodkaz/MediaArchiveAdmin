package org.vladimir.homearchiveauth.model.object;

import java.util.List;

public record ClientInfoProperty(Long id, ClientTabProperty property, List<ClientInfo> infos) {
}
