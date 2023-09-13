package org.vladimir.homearchiveauth.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
@MappedSuperclass
public abstract class TimeStampedEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;

    @Column(name = "create_date")
    private Date createDate;
    @Column(name = "modify_date")
    private Date modifyDate;

    public TimeStampedEntity() {
    }

    public TimeStampedEntity(Long id) {
        this.id = id;
    }
}
