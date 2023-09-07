package org.vladimir.homearchiveauth.domain.clienttab;

import org.mapstruct.Mapper;
import org.vladimir.homearchiveauth.model.entity.ClientTabTypeEntity;
import org.vladimir.homearchiveauth.model.object.ClientTabType;
import org.vladimir.homearchiveauth.model.response.ClientTabTypeResponse;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ClientTabTypeMapper {
    ClientTabType entityToObject(ClientTabTypeEntity entity);

    ClientTabTypeResponse objectToResponse(ClientTabType type);

    List<ClientTabTypeResponse> objectsToResponses(List<ClientTabType> type);
}
