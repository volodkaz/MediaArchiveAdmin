package org.vladimir.homearchiveauth.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;

import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "clients")
public class ClientEntity extends TimeStampedEntity{

//    @Id
//    @SequenceGenerator(name = "clientsIdSeq", sequenceName = "clients_id_seq", allocationSize = 1)
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "clientsIdSeq")
//    private Long tabId;

    private String name;
    private String password;
    @Column(name = "refresh_token")
    private String refreshToken;
    @Column(name = "is_deleted")
    private Boolean isDeleted;

    public ClientEntity(Long id) {
        this.id = id;
    }

    @ManyToMany( fetch = FetchType.EAGER)
    @JoinTable(name = "client_roles",
        joinColumns = @JoinColumn(name = "client_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<RoleEntity> roles;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ClientEntity entity = (ClientEntity) o;
        return getId() != null && Objects.equals(getId(), entity.getId());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}