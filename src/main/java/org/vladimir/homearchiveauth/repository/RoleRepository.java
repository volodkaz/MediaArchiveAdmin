package org.vladimir.homearchiveauth.repository;

import org.springframework.data.repository.CrudRepository;
import org.vladimir.homearchiveauth.model.entity.RoleEntity;
import org.vladimir.homearchiveauth.model.object.RoleTypes;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface RoleRepository extends CrudRepository<RoleEntity, Long> {
    Optional<RoleEntity> findRoleByRoleName(String name);
    void deleteByRoleName(String name);
    List<RoleEntity> findAllByRoleNameIn(Collection<String> names);
    List<RoleEntity> findAllByRoleTypeNotOrRoleTypeNull(RoleTypes roleTypes);

    default List<RoleEntity> findAllNotHideRoles(){
        return findAllByRoleTypeNotOrRoleTypeNull(RoleTypes.HIDE);
    }
}
