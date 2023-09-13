package org.vladimir.homearchiveauth.repository;

import org.springframework.data.repository.CrudRepository;
import org.vladimir.homearchiveauth.model.entity.ClientTabEntity;

import java.util.List;
import java.util.Optional;

public interface ClientTabRepository extends CrudRepository<ClientTabEntity, Long> {
    Optional<ClientTabEntity> getClientTabEntityById(Long id);
    Optional<ClientTabEntity> getClientTabEntityByName(String name);
}
