package org.vladimir.homearchiveauth.model.request;

public record ClientTabRequest(Long userId, Long tabTypeId, String name, String comment) {
}
