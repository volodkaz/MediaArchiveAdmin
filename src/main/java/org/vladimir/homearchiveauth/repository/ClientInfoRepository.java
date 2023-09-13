package org.vladimir.homearchiveauth.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.vladimir.homearchiveauth.model.entity.ClientInfoEntity;

import java.util.List;
import java.util.Optional;

public interface ClientInfoRepository extends CrudRepository<ClientInfoEntity, Long> {
    List<ClientInfoEntity> findAllByAndIsDelete(boolean isDeleted);
    default List<ClientInfoEntity> getAllInfosForClient(Long clientId){
        return findAllByAndIsDelete(false);
    }

    Optional<ClientInfoEntity> findByIdAndIsDelete(Long id, boolean isDeleted);
    default Optional<ClientInfoEntity> findActiveInfo(Long id){
        return findByIdAndIsDelete(id, false);
    }
}
