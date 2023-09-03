package org.vladimir.homearchiveauth.repository;

import org.springframework.data.repository.CrudRepository;
import org.vladimir.homearchiveauth.model.entity.ClientTabEntity;

import java.util.List;

public interface ClientTabRepository extends CrudRepository<ClientTabEntity, Long> {
}
