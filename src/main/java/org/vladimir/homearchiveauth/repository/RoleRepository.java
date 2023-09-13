package org.vladimir.homearchiveauth.repository;

import org.springframework.data.repository.CrudRepository;
import org.vladimir.homearchiveauth.model.entity.RoleEntity;
import org.vladimir.homearchiveauth.model.object.RoleTypes;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface RoleRepository extends CrudRepository<RoleEntity, Long> {
    Optional<RoleEntity> findRoleByName(String name);
    void deleteByName(String name);
    List<RoleEntity> findAllByNameIn(Collection<String> names);
    List<RoleEntity> findAllByTypeNotOrTypeNull(RoleTypes roleTypes);

    default List<RoleEntity> findAllNotHideRoles(){
        return findAllByTypeNotOrTypeNull(RoleTypes.HIDE);
    }
}
