package org.vladimir.homearchiveauth.model.entity;

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
import org.hibernate.Hibernate;

import java.util.Objects;
import java.util.Set;

@Getter
@Setter
//@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "client_tab")
public class ClientTabEntity extends TimeStampedEntity{

//    @Id
//    @SequenceGenerator(name = "clientTabIdSeq", sequenceName = "client_tab_id_seq", allocationSize = 1)
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "clientTabIdSeq")
//    private Long tabId;

    private String name;
    private String comment;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "client_tab_prop_setting",
            joinColumns = @JoinColumn(name = "tab_id"),
            inverseJoinColumns = @JoinColumn(name = "prop_id"))
    private Set<ClientTabPropertyEntity> properties;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ClientTabEntity clientTab = (ClientTabEntity) o;
        return getId() != null && Objects.equals(getId(), clientTab.getId());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
