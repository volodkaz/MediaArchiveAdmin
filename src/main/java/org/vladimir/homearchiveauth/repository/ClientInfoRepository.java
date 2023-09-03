package org.vladimir.homearchiveauth.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.vladimir.homearchiveauth.model.entity.ClientInfoEntity;

import java.util.List;

public interface ClientInfoRepository extends CrudRepository<ClientInfoEntity, Long> {
    List<ClientInfoEntity> findAllByClientIdAndIsDelete(Long clientId, boolean isDeleted);
    default List<ClientInfoEntity> getAllInfosForClient(Long clientId){
        return findAllByClientIdAndIsDelete(clientId, false);
    }
}
