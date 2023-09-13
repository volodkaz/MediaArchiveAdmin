package org.vladimir.homearchiveauth.model.object;

import java.util.List;

public record ClientInfoTab(Long id, String name, String comment, ClientTab tab, List<ClientInfoProperty> properties) {
}
