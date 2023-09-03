package org.vladimir.homearchiveauth.model.request;

import java.util.Set;

public record ClientRequest(String login, String clientSecret, Set<Long> roles) {
}
