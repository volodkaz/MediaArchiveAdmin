package org.vladimir.homearchiveauth.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
@MappedSuperclass
public abstract class TimeStampedEntity {
    @Column(name = "create_date")
    private Date createDate;
    @Column(name = "modify_date")
    private Date modifyDate;
}
