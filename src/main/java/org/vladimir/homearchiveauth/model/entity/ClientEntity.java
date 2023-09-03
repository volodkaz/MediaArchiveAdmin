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
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;

import java.util.List;
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
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_id")
    private Long clientId;
    @Column(name = "client_name")
    private String clientName;
    @Column(name = "client_password")
    private String clientPassword;
    @Column(name = "refresh_token")
    private String refreshToken;
    @Column(name = "is_deleted")
    private Boolean isDeleted;

    @ManyToMany( fetch = FetchType.EAGER)
    @JoinTable(name = "client_roles",
        joinColumns = @JoinColumn(name = "client_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<RoleEntity> roles;

//    @OneToMany()
//    @JoinColumn(name = "client_id", updatable = false)
//    @ToString.Exclude
//    private List<ClientInfoEntity> clientInfo;



    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ClientEntity entity = (ClientEntity) o;
        return clientId != null && Objects.equals(clientId, entity.clientId);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}