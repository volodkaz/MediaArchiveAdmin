package org.vladimir.homearchiveauth.model.request;

import java.util.List;

public record ClientInfoRequest(Long userId, Long tabId, Long propertyId, List<String> data) {
}
