package org.vladimir.homearchiveauth.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;

import java.util.Date;
import java.util.Objects;

@Getter
@Setter
//@ToString
@AllArgsConstructor
@Entity
@Table(name = "client_info")
public class ClientInfoEntity extends TimeStampedEntity{

//    @Id
//    @SequenceGenerator(name = "clientInfoIdSeq", sequenceName = "client_info_id_seq", allocationSize = 1)
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "clientInfoIdSeq")
//    private Long tabId;

    public ClientInfoEntity() {
        this.isDefault = false;
        this.isDelete = false;
        this.modifyClientId = "vladimir";
        this.setCreateDate(new Date());
    }

//    public ClientInfoEntity(Long propertyId) {
//        this();
//        this.propertyId = propertyId;
//    }
    private String data;
    @Column(name = "is_deleted")
    private Boolean isDelete;
    @Column(name = "is_default")
    private Boolean isDefault;
    @Column(name = "modify_client_id")
    private String modifyClientId;
//    @Column(name = "info_property_id")
//    private Long propertyId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ClientInfoEntity that = (ClientInfoEntity) o;
        return getId() != null && Objects.equals(getId(), that.getId());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}