package org.vladimir.homearchiveauth.domain.role;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.vladimir.homearchiveauth.model.entity.RoleEntity;
import org.vladimir.homearchiveauth.model.object.Role;
import org.vladimir.homearchiveauth.model.object.RoleTypes;
import org.vladimir.homearchiveauth.model.request.RoleRequest;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Mapper(componentModel = "spring")
public interface RoleMapper {
    @Mapping(target = "isAdmin", qualifiedByName = "initIsAdmin" ,source = "type")
    Role entityToObject(RoleEntity entity);

    Set<Role> entitiesToObjects(Set<RoleEntity> entities);

    Set<RoleEntity> objectsToEntities(Collection<Role> roles);

    HashSet<Role> entitiesToObjects(Iterable<RoleEntity> entities);

//    RoleEntity objectToEntity(Role role);

    default Set<RoleEntity> mapEntity(Set<String> roleIds){
        if(roleIds == null || roleIds.isEmpty()){
            return null;
        }
        final Set<RoleEntity> entities = new HashSet<>(roleIds.size());
        for (String roleId : roleIds) {
            entities.add(new RoleEntity(roleId));
        }
        return entities;
    }

    default Set<String> mapString(Set<RoleEntity> roleEntities){
        if(roleEntities == null || roleEntities.isEmpty()){
            return null;
        }
        final Set<String> roles = new HashSet<>(roleEntities.size());
        for (RoleEntity entity : roleEntities) {
            roles.add(entity.getName());
        }
        return roles;
    }

//    default Set<Long> mapLong(Set<RoleEntity> roleEntities){
//        if(roleEntities == null || roleEntities.isEmpty()){
//            return null;
//        }
//        final Set<Long> roles = new HashSet<>(roleEntities.size());
//        for (RoleEntity entity : roleEntities) {
//            roles.add(entity.getRoleId());
//        }
//        return roles;
//    }

    default List<String> mapListString(Set<RoleEntity> roleEntities){
        if(roleEntities == null || roleEntities.isEmpty()){
            return null;
        }
        final List<String> roles = new ArrayList<>(roleEntities.size());
        for (RoleEntity entity : roleEntities) {
            roles.add(entity.getName());
        }
        return roles;
    }

    @Mapping(target = "type", ignore = true)
    @Mapping(target = "name", source = "id")
    @Mapping(target = "createDate", ignore = true)
    @Mapping(target = "modifyDate", ignore = true)
    RoleEntity requestToEntity(RoleRequest roleRequest);

    @Mapping(target = "createDate", ignore = true)
    @Mapping(target = "modifyDate", ignore = true)
    @Mapping(target = "type", ignore = true )
    RoleEntity objectToEntity(Role role);


    @Named("initIsAdmin")
    default boolean initIsAdmin(RoleTypes roleTypes){
        return RoleTypes.ADMIN.equals(roleTypes);
    }
}
