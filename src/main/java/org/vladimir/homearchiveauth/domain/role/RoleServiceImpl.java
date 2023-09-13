package org.vladimir.homearchiveauth.domain.role;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.vladimir.homearchiveauth.model.entity.RoleEntity;
import org.vladimir.homearchiveauth.model.object.Role;
import org.vladimir.homearchiveauth.model.request.RoleRequest;
import org.vladimir.homearchiveauth.repository.RoleRepository;

import java.util.HashSet;
import java.util.Set;
@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {
    private final RoleRepository repository;
    private final RoleMapper mapper;

    @Override
    public Role getRoleByName(String name) {
        final RoleEntity roleEntity = repository.findRoleByName(name)
                .orElseThrow(() -> new RuntimeException("Role with tabId " + name + " not found"));

        return mapper.entityToObject(roleEntity);
    }

    @Override
    public Set<Role> getAllRoles() {
        final Iterable<RoleEntity> entities = repository.findAllNotHideRoles();
        return mapper.entitiesToObjects(entities);
    }

    @Override
    public void createNewRole(RoleRequest roleRequest) {
        if(repository.findRoleByName(roleRequest.id()).isPresent()){
            throw new RuntimeException("Role with tabId " + roleRequest.id() + " already created");
        }
        RoleEntity entity = mapper.requestToEntity(roleRequest);
//        RoleEntity entity = mapper.objectToEntity(role);
        repository.save(entity);
    }

    @Override
    public void deleteRole(String roleId) {
        repository.deleteByName(roleId);
    }

    @Override
    public Set<Role> getAllRolesByNames(Set<String> roles) {
        final Iterable<RoleEntity> entityIterable = repository.findAllByNameIn(roles);
        final HashSet<RoleEntity> entities = new HashSet<>();

        for (RoleEntity entity : entityIterable) {
            entities.add(entity);
        }
        return mapper.entitiesToObjects(entities);
    }

    @Override
    public Set<RoleEntity> getAllRoleEntitiesByNames(Set<String> roles) {
        return mapper.objectsToEntities(getAllRolesByNames(roles));
    }

    @Override
    public Role getDefaultRole() {
        return getRoleByName("ROLE_ALL");
    }

    @Override
    public Set<Role> getAllRolesByIds(Set<Long> roles) {
        return mapper.entitiesToObjects(repository.findAllById(roles));
    }

    @Override
    public Set<RoleEntity> getAllRoleEntitiesByIds(Set<Long> roles) {
        final Iterable<RoleEntity> entityIterable = repository.findAllById(roles);
        final HashSet<RoleEntity> entities = new HashSet<>();

        for (RoleEntity entity : entityIterable) {
            entities.add(entity);
        }
        return entities;
    }
}
