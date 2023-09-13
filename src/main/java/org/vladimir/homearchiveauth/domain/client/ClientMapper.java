package org.vladimir.homearchiveauth.domain.client;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.vladimir.homearchiveauth.domain.DateMapper;
import org.vladimir.homearchiveauth.domain.role.RoleMapper;
import org.vladimir.homearchiveauth.model.entity.ClientEntity;
import org.vladimir.homearchiveauth.model.object.Client;
import org.vladimir.homearchiveauth.model.object.Role;
import org.vladimir.homearchiveauth.model.request.ClientRequest;
import org.vladimir.homearchiveauth.model.response.ClientResponse;

import java.util.Collection;
import java.util.List;
import java.util.Set;

@Mapper(componentModel = "spring", uses = {DateMapper.class, RoleMapper.class})
public interface ClientMapper {
    @Mapping(target = "password", ignore = true)
    @Mapping(target = "name", source = "id")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "isDeleted", ignore = true)
    @Mapping(target = "createDate", ignore = true)
    @Mapping(target = "modifyDate", ignore = true)
    ClientEntity objectToEntity(Client client);

    @Mapping(target = "roles", ignore = true)
    @Mapping(target = "name", source = "login")
    @Mapping(target = "refreshToken", ignore = true)
    @Mapping(target = "id", ignore = true)
    Client requestToObject(ClientRequest request);

//    @Mapping(target = "clientPassword", ignore = true)
//    @Mapping(target = "name", source = "tabId")
//    @Mapping(target = "tabId", ignore = true)
//    @Mapping(target = "isDeleted", ignore = true)
//    @Mapping(target = "createDate", ignore = true)
//    @Mapping(target = "modifyDate", ignore = true)
//    ClientEntity requestToEntity(ClientRequest clientRequest);

    @Mapping(target = "secret", ignore = true)
    Client entityToObject(ClientEntity entity);

    Client entityToObject(ClientEntity entity, String secret);

    @Mapping(target = "name", source = "name")
    @Mapping(target = "id", source = "id")
    @Mapping(target = "isAdmin", qualifiedByName = "initIsAdminByRole", source = "roles")
    @Mapping(target = "isActivated", ignore = true)
    ClientResponse entityToResponse(ClientEntity entity);

    List<ClientResponse> entitiesToResponses(Iterable<ClientEntity> entities);

    @Named("initIsAdminByRole")
    default boolean initIsAdminByRole(Collection<Role> roles){
        return roles.stream().filter(entity -> entity.isAdmin()).count() > 0;
    }

    @Mapping(target = "roles", source = "roles")
    @Mapping(target = "name", source = "clientRequest.login")
    @Mapping(target = "refreshToken", ignore = true)
    @Mapping(target = "id", ignore = true)
    Client requestToObject(ClientRequest clientRequest, Set<Role> roles);

    @Mapping(target = "password", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "isDeleted", constant = "false")
    @Mapping(target = "createDate", ignore = true)
    @Mapping(target = "modifyDate", ignore = true)
    @Mapping(target = "roles", source = "roles")
    ClientEntity objectToEntity(Client client, Set<Role> roles);
}
