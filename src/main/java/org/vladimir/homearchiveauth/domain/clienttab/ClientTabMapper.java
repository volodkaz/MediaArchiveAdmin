package org.vladimir.homearchiveauth.domain.clienttab;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.vladimir.homearchiveauth.domain.DateMapper;
import org.vladimir.homearchiveauth.domain.clienttabproperty.ClientTabPropertyMapper;
import org.vladimir.homearchiveauth.model.entity.ClientTabEntity;
import org.vladimir.homearchiveauth.model.object.ClientTab;
import org.vladimir.homearchiveauth.model.object.ClientTabWithInfoData;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;
import org.vladimir.homearchiveauth.model.response.ClientTabResponse;

@Mapper(componentModel = "spring", uses = {DateMapper.class, ClientTabPropertyMapper.class, ClientTabTypeMapper.class})
public interface ClientTabMapper {
    @Mapping(target = "tabType", source = "type")
    ClientTab entityToObject(ClientTabEntity entity);

    @Mapping(target = "id", source = "tab.id")
    @Mapping(target = "name", source = "tab.name")
    @Mapping(target = "comment", source = "tab.comment")
    @Mapping(target = "tabType", source = "tab.tabType")
    ClientTabResponse objectToResponse(ClientTabWithInfoData tab);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "type.id", source = "tabTypeId")
    ClientTabEntity requestToObject(ClientTabRequest request);
}
