package org.vladimir.homearchiveauth.domain.clienttab;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.vladimir.homearchiveauth.domain.DateMapper;
import org.vladimir.homearchiveauth.domain.clienttabproperty.ClientTabPropertyMapper;
import org.vladimir.homearchiveauth.model.entity.ClientTabEntity;
import org.vladimir.homearchiveauth.model.object.ClientTab;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;
import org.vladimir.homearchiveauth.model.response.ClientTabResponse;

import java.util.List;

@Mapper(componentModel = "spring", uses = {DateMapper.class, ClientTabPropertyMapper.class})
public interface ClientTabMapper {
    ClientTab entityToObject(ClientTabEntity entity);

    ClientTabResponse objectToResponse(ClientTab tab);

    ClientTab requestToObject(ClientTabRequest request);

    List<ClientTabResponse> objectsToResponses(List<ClientTab> tabTypes);

    List<ClientTab> entitiesToObjects(Iterable<ClientTabEntity> tabEntities);
}
