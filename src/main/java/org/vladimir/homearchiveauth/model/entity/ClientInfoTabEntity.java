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
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "client_info_tab")
public class ClientInfoTabEntity extends TimeStampedEntity{

//    @Id
//    @SequenceGenerator(name = "clientInfoTabIdSeq", sequenceName = "client_info_tab_id_seq", allocationSize = 1)
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "clientInfoTabIdSeq")
//    private Long tabId;

    private String name;
    private String comment;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tab_id", insertable = false, updatable = false)
    ClientTabEntity tab;

    @Column(name = "tab_id")
    private Long tabId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "client_id", updatable = false, insertable = false)
    private ClientEntity client;

    @Column(name = "client_id")
    private Long clientId;

    @Column(name = "is_deleted")
    private Boolean isDeleted;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "info_tab_id")
//    @OneToMany(fetch = FetchType.EAGER)
//    @JoinColumn(name = "info_tab_id", insertable = false, updatable = false)
    private List<ClientInfoPropertyEntity> properties;
}
