package org.vladimir.homearchiveauth.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.hibernate.Hibernate;
import org.vladimir.homearchiveauth.model.object.RoleTypes;

import java.util.Objects;

@Getter
@Setter
//@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "roles")
public class RoleEntity extends TimeStampedEntity{
    public RoleEntity(String roleId){
        this.name = roleId;
    }

//    @Id
//    @SequenceGenerator(name = "rolesIdSeq", sequenceName = "roles_id_seq", allocationSize = 1)
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rolesIdSeq")
//    private Long tabId;

    private String name;
    private String comment;
    @Enumerated(EnumType.STRING)
    private RoleTypes type;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        RoleEntity entity = (RoleEntity) o;
        return getId() != null && Objects.equals(getId(), entity.getId());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}