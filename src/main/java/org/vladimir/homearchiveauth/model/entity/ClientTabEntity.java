package org.vladimir.homearchiveauth.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;

import java.util.Objects;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "client_tab")
public class ClientTabEntity extends TimeStampedEntity{

    @Id
    @Column(name = "tab_id")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "tab_comment")
    private String comment;

    @ManyToOne
    @JoinColumn(name = "tab_type")
    private ClientTabTypeEntity type;

//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(name = "client_tab_prop_setting",
//            joinColumns = @JoinColumn(name = "tab_id"),
//            inverseJoinColumns = @JoinColumn(name = "prop_id"))
//    @ToString.Exclude
//    private Set<ClientTabPropertyEntity> properties;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ClientTabEntity clientTab = (ClientTabEntity) o;
        return id != null && Objects.equals(id, clientTab.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
