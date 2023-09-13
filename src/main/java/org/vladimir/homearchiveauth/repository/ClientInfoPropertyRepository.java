package org.vladimir.homearchiveauth.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;
import org.vladimir.homearchiveauth.model.entity.ClientInfoPropertyEntity;
@Transactional
public interface ClientInfoPropertyRepository extends CrudRepository<ClientInfoPropertyEntity, Long> {
}
