package org.vladimir.homearchiveauth.domain.client;

import org.vladimir.homearchiveauth.model.object.Client;
import org.vladimir.homearchiveauth.model.request.ClientRequest;
import org.vladimir.homearchiveauth.model.response.ClientResponse;

import java.util.List;

public interface ClientService {
    void register(ClientRequest clientRequest);
    Client checkCredentials(ClientRequest clientRequest);
    void addRoleToClient(ClientRequest clientRequest);

    Client getClient(ClientRequest clientRequest);
    Client getClientByName(String name);

    List<ClientResponse> getAllClients(int limit);

    void deleteUser(String userName);

    Client createUser(ClientRequest clientRequest);
}
