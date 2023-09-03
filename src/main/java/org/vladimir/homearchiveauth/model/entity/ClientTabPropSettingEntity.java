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

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "client_tab_prop_setting")
public class ClientTabPropSettingEntity {
    @Id
    @Column(name = "setting_id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tab_id")
    @ToString.Exclude
    private ClientTabEntity tab;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prop_id")
    @ToString.Exclude
    private ClientTabPropertyEntity property;
}
