package org.vladimir.homearchiveauth.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;

import java.util.List;
import java.util.Objects;

@Getter
@Setter
@ToString
@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Table(name = "client_tab_property")
public class ClientTabPropertyEntity extends TimeStampedEntity{
    @Id
    @Column(name="prop_id")
    private Long id;
    @Column(name="name")
    private String name;
    @Column(name = "property_comment")
    private String comment;
//    @ManyToOne
//    @JoinTable(name = "client_tab_prop_setting",
//        joinColumns = @JoinColumn(name = "prop_id"),
//        inverseJoinColumns = @JoinColumn(name = "tab_id"))
//    private ClientTabEntity tab;

//    @OneToMany(fetch = FetchType.LAZY)
//    @JoinTable(name = "client_tab_prop_setting",
//        joinColumns = @JoinColumn(name = "prop_id"),
//        inverseJoinColumns = @JoinColumn(name = "setting_id"))
//    @ToString.Exclude
//    private List<ClientInfoEntity> clientInfo;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ClientTabPropertyEntity that = (ClientTabPropertyEntity) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}