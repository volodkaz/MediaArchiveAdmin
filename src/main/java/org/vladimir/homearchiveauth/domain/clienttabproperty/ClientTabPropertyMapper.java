package org.vladimir.homearchiveauth.domain.clienttabproperty;

import org.mapstruct.Mapper;
import org.vladimir.homearchiveauth.domain.DateMapper;
import org.vladimir.homearchiveauth.model.entity.ClientTabPropertyEntity;
import org.vladimir.homearchiveauth.model.object.ClientTabProperty;
import org.vladimir.homearchiveauth.model.response.ClientTabPropertyResponse;

@Mapper(componentModel = "spring", uses = {DateMapper.class})
public interface ClientTabPropertyMapper {
    ClientTabProperty entityToObject(ClientTabPropertyEntity entity);

    ClientTabPropertyResponse objectToResponse(ClientTabProperty property);
}
