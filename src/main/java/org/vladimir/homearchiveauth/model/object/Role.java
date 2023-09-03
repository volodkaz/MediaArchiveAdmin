package org.vladimir.homearchiveauth.model.object;

public record Role(Long roleId, String name, String comment, Boolean isAdmin) {
}
