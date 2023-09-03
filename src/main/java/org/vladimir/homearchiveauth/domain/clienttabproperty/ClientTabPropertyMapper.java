package org.vladimir.homearchiveauth.domain.clienttabproperty;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.vladimir.homearchiveauth.domain.DateMapper;
import org.vladimir.homearchiveauth.model.entity.ClientTabPropertyEntity;
import org.vladimir.homearchiveauth.model.object.ClientTabProperty;
import org.vladimir.homearchiveauth.model.object.ClientTabPropertyWithData;
import org.vladimir.homearchiveauth.model.response.ClientTabPropertyResponse;

@Mapper(componentModel = "spring", uses = {DateMapper.class})
public interface ClientTabPropertyMapper {
    ClientTabProperty entityToObject(ClientTabPropertyEntity entity);

    @Mapping(target = "id", source = "property.id")
    @Mapping(target = "name", source = "property.name")
    @Mapping(target = "comment", source = "property.comment")
    ClientTabPropertyResponse objectToResponse(ClientTabPropertyWithData property);
}
