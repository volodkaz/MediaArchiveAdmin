package org.vladimir.homearchiveauth.model.request;

public record ClientTabRequest(Long tabId, Long userId, String name, String comment) {
}
