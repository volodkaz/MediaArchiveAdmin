package org.vladimir.homearchiveauth.model.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Table(name = "client_info_property")
@Entity
public class ClientInfoPropertyEntity extends TimeStampedEntity {

//    @Id
//    @SequenceGenerator(name = "clientInfoPropertyIdSeq", sequenceName = "client_info_property_id_seq", allocationSize = 1)
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "clientInfoPropertyIdSeq")
//    private Long tabId;

    public ClientInfoPropertyEntity() {
        this.isDeleted = false;
        this.setCreateDate(new Date());
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "property_id")
    private ClientTabPropertyEntity property;

    @Column(name = "is_deleted")
    private boolean isDeleted;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
   @JoinColumn(name = "info_property_id")
//    @OneToMany(fetch = FetchType.EAGER)
//    @JoinColumn(name = "info_property_id", insertable = false, updatable = false)
    private List<ClientInfoEntity> infos;

//    @Column(name = "info_tab_id")
//    private Long infoTabId;
//    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "info_tab_id")
//    private ClientInfoTabEntity tab;

}