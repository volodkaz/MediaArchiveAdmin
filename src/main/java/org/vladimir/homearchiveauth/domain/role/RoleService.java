package org.vladimir.homearchiveauth.domain.role;

import org.vladimir.homearchiveauth.model.entity.RoleEntity;
import org.vladimir.homearchiveauth.model.object.Role;
import org.vladimir.homearchiveauth.model.request.RoleRequest;

import java.util.List;
import java.util.Set;

public interface RoleService {
    Role getRoleByName(String roleId);
    Set<Role> getAllRoles();
    void createNewRole(RoleRequest role);
    void deleteRole(String roleId);

    Set<Role> getAllRolesByNames(Set<String> roles);
    Set<RoleEntity> getAllRoleEntitiesByNames(Set<String> roles);

    Role getDefaultRole();

    Set<Role> getAllRolesByIds(Set<Long> roles);

    Set<RoleEntity> getAllRoleEntitiesByIds(Set<Long> roles);
}
