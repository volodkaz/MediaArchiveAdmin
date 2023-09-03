package org.vladimir.homearchiveauth.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;
import org.vladimir.homearchiveauth.model.object.RoleTypes;

import java.util.Objects;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "roles")
public class RoleEntity extends TimeStampedEntity{
    public RoleEntity(String roleId){
        this.roleName = roleId;
    }
    @Id
    @Column(name = "role_id")
    private Long roleId;
    @Column(name = "role_name")
    private String roleName;
    @Column(name = "role_comment")
    private String comment;
    @Enumerated(EnumType.STRING)
    @Column(name = "role_type")
    private RoleTypes roleType;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        RoleEntity entity = (RoleEntity) o;
        return roleId != null && Objects.equals(roleId, entity.roleId);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}