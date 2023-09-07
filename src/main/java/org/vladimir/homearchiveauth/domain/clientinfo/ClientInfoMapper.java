package org.vladimir.homearchiveauth.domain.clientinfo;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.vladimir.homearchiveauth.domain.DateMapper;
import org.vladimir.homearchiveauth.domain.clienttab.ClientTabMapper;
import org.vladimir.homearchiveauth.domain.clienttabproperty.ClientTabPropertyMapper;
import org.vladimir.homearchiveauth.model.entity.ClientInfoEntity;
import org.vladimir.homearchiveauth.model.entity.ClientTabEntity;
import org.vladimir.homearchiveauth.model.entity.ClientTabPropSettingEntity;
import org.vladimir.homearchiveauth.model.entity.ClientTabPropertyEntity;
import org.vladimir.homearchiveauth.model.object.ClientInfo;
import org.vladimir.homearchiveauth.model.object.ClientInfoWithTabs;
import org.vladimir.homearchiveauth.model.object.ClientTab;
import org.vladimir.homearchiveauth.model.object.ClientTabProperty;
import org.vladimir.homearchiveauth.model.object.ClientTabPropertyWithData;
import org.vladimir.homearchiveauth.model.object.ClientTabType;
import org.vladimir.homearchiveauth.model.object.ClientTabWithInfoData;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;
import org.vladimir.homearchiveauth.model.response.ClientInfoContainerResponse;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = {DateMapper.class, ClientTabMapper.class, ClientTabPropertyMapper.class})
public interface ClientInfoMapper {
    ClientInfoContainerResponse objectToResponse(ClientInfoWithTabs clientInfo);

    default ClientInfoWithTabs entityToObject(List<ClientInfoEntity> allInfosForClient){
        final ClientInfoWithTabs clientInfoWithTabs = new ClientInfoWithTabs(new ArrayList<>());
        final Set<ClientTabEntity> tabs = allInfosForClient.stream().map(entity -> entity.getTabSettings().getTab())
                .collect(Collectors.toSet());

        for (ClientTabEntity tabEntity : tabs) {
            final List<ClientInfoEntity> allInfosForClientByTag = allInfosForClient.stream()
                    .filter(entity -> entity.getTabSettings().getTab().getId().equals(tabEntity.getId())).collect(Collectors.toList());
            ClientTabWithInfoData tab = getListByProperty(tabEntity, allInfosForClientByTag);
            clientInfoWithTabs.tabs().add(tab);
        }
        return clientInfoWithTabs;
    }

    private ClientTabWithInfoData getListByProperty(ClientTabEntity tabEntity,
                                                    List<ClientInfoEntity> allInfosForClient){

        final Set<ClientTabPropertyEntity> properties = allInfosForClient.stream().map(entity -> entity.getTabSettings().getProperty())
                .collect(Collectors.toSet());
        final ClientTabWithInfoData tab = new ClientTabWithInfoData(

                new ClientTab(tabEntity.getId(), tabEntity.getName(), tabEntity.getComment(),
                        new ClientTabType(tabEntity.getType().getId(), tabEntity.getType().getName(), tabEntity.getType().getComment())),
                new ArrayList<>());

        for (ClientTabPropertyEntity property : properties) {

            final List<ClientInfo> infos = allInfosForClient.stream()
                    .filter(entity -> entity.getTabSettings().getProperty().getId().equals(property.getId()))
                    .map(entity -> new ClientInfo(entity.getId(), entity.getData(), entity.getModifyClient())).collect(Collectors.toList());

            final ClientTabPropertyWithData clientTabPropertyWithData = new ClientTabPropertyWithData(
                    new ClientTabProperty(property.getId(), property.getName(), property.getComment()),
                    infos);
            tab.property().add(clientTabPropertyWithData);
        }
        return tab;
    }

//    @Mapping(target = "id", ignore = true)
//    @Mapping(target = "createDate", ignore = true)
//    @Mapping(target = "modifyDate", ignore = true)
//    @Mapping(target = "data", ignore = true)
//    @Mapping(target = "isDelete", ignore = true)
//    @Mapping(target = "tabSettings", source = "")
//    @Mapping(target = "clientId", source = "userId")
//    @Mapping(target = "modifyClient", source = "userId")
//    ClientInfoEntity requestToObject(ClientTabRequest request);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createDate", ignore = true)
    @Mapping(target = "modifyDate", ignore = true)
    @Mapping(target = "data", ignore = true)
    @Mapping(target = "isDelete", constant = "false")
    @Mapping(target = "clientId", source = "request.userId")
    @Mapping(target = "modifyClient", source = "request.userId")
    @Mapping(target = "tabSettings", source = "entity")
    ClientInfoEntity settingsToInfo(ClientTabPropSettingEntity entity,
                                    ClientTabRequest request);
}
