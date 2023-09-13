package org.vladimir.homearchiveauth.domain.clientinfotab;

import org.mapstruct.Mapper;
import org.vladimir.homearchiveauth.model.entity.ClientInfoEntity;
import org.vladimir.homearchiveauth.model.object.ClientInfo;

@Mapper(componentModel = "spring")
public interface ClientInfoTabMapper {

    ClientInfo entityToTabObject(ClientInfoEntity entity);

}
