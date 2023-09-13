package org.vladimir.homearchiveauth.model.request;

import java.util.Set;

public record ClientRequest(String login, String secret, Set<Long> roles) {
}
