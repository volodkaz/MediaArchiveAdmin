package org.vladimir.homearchiveauth.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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
@Table(name = "client_info")
public class ClientInfoEntity extends TimeStampedEntity{
    @Id
    @Column(name = "info_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tab_sett_id", referencedColumnName = "setting_id")
    @ToString.Exclude
    private ClientTabPropSettingEntity tabSettings;

    @Column(name = "client_id")
    private Long clientId;

    @Column(name = "data")
    private String data;
    @Column(name = "modify_client_id")
    private String modifyClient;
    @Column(name = "is_deleted")
    private Boolean isDelete;
//    @Column(name = "is_default")
//    private Boolean isDefault;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ClientInfoEntity that = (ClientInfoEntity) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}