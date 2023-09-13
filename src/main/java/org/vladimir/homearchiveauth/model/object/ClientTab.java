package org.vladimir.homearchiveauth.model.object;

import java.util.List;

public record ClientTab(Long id, String name, String comment, List<ClientTabProperty> properties){
}
