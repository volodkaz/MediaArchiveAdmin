package org.vladimir.homearchiveauth.domain.clientinfo;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.vladimir.homearchiveauth.domain.DateMapper;
import org.vladimir.homearchiveauth.domain.clientinfotab.ClientInfoTabMapper;
import org.vladimir.homearchiveauth.domain.clienttab.ClientTabMapper;
import org.vladimir.homearchiveauth.domain.clienttabproperty.ClientTabPropertyMapper;
import org.vladimir.homearchiveauth.model.entity.ClientEntity;
import org.vladimir.homearchiveauth.model.entity.ClientInfoEntity;
import org.vladimir.homearchiveauth.model.entity.ClientInfoPropertyEntity;
import org.vladimir.homearchiveauth.model.entity.ClientInfoTabEntity;
import org.vladimir.homearchiveauth.model.entity.ClientTabEntity;
import org.vladimir.homearchiveauth.model.entity.ClientTabPropSettingEntity;
import org.vladimir.homearchiveauth.model.entity.ClientTabPropertyEntity;
import org.vladimir.homearchiveauth.model.object.ClientInfo;
import org.vladimir.homearchiveauth.model.object.ClientInfoProperty;
import org.vladimir.homearchiveauth.model.object.ClientInfoTab;
import org.vladimir.homearchiveauth.model.request.ClientInfoRequest;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;
import org.vladimir.homearchiveauth.model.response.ClientInfoResponse;
import org.vladimir.homearchiveauth.model.response.ClientInfoTabResponse;

import java.util.List;
import java.util.Set;

@Mapper(componentModel = "spring", uses = {DateMapper.class, ClientTabMapper.class, ClientTabPropertyMapper.class})
public interface ClientInfoMapper {
    List<ClientInfoTabResponse> objectToResponse(List<ClientInfoTab> clientInfo);

    ClientInfoTab tabEntityToTabObject(ClientInfoTabEntity entity);
    ClientInfoProperty propertyEntityToPropertyObject(ClientInfoPropertyEntity entity);
    ClientInfo infoEntityToInfoObject(ClientInfoEntity entity);

    List<ClientInfoTab> tabEntitiesToTabObjects(List<ClientInfoTabEntity> entities);
    List<ClientInfoProperty> propertyEntitiesToTabPropertyObjects(List<ClientInfoPropertyEntity> entities);
    List<ClientInfo> infoEntitiesToInfoObjects(List<ClientInfoEntity> entity);

    ClientInfoResponse infoObjectToInfoResponse(ClientInfo info);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "name", source = "request.name")
    @Mapping(target = "comment", source = "request.comment")
    @Mapping(target = "tabId", source = "clientTab.id")
    @Mapping(target = "tab", source = "clientTab")
    @Mapping(target = "clientId", source = "clientEntity.id")
    @Mapping(target = "isDeleted", constant = "false")
    @Mapping(target = "createDate", ignore = true)
    @Mapping(target = "modifyDate", ignore = true)
    @Mapping(target = "properties", source = "clientTab.properties")
    ClientInfoTabEntity tabToInfoTab(ClientTabEntity clientTab,
                                     ClientTabRequest request,
                                     ClientEntity clientEntity);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "property", source = "entity")
    @Mapping(target = "deleted", constant = "false")
    @Mapping(target = "createDate", ignore = true)
    @Mapping(target = "modifyDate", ignore = true)
//    @Mapping(target = "infos", ignore = true)
//    @Mapping(target = "infoTabId", ignore = true)
    @Mapping(target = "infos", expression = "java( java.util.List.of(new org.vladimir.homearchiveauth.model.entity.ClientInfoEntity()))")
    ClientInfoPropertyEntity propertyToInfoProperty(ClientTabPropertyEntity entity);


    List<ClientInfoPropertyEntity> propertiesToInfoProperties(List<ClientTabPropertyEntity> entities);

    ClientInfoEntity requestToEntity(ClientInfoRequest info);
}


