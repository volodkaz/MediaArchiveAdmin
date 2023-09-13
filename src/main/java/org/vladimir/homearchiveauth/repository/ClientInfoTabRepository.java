package org.vladimir.homearchiveauth.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.vladimir.homearchiveauth.model.entity.ClientInfoTabEntity;

import java.util.List;

public interface ClientInfoTabRepository extends CrudRepository<ClientInfoTabEntity, Long> {
    @Query(value = "select * from client_info_tab where client_id = :clientId and is_deleted = :isDeleted", nativeQuery = true)
    List<ClientInfoTabEntity> findAllByClientEntityAndIsDelete(@Param("clientId") Long clientId, @Param("isDeleted") boolean isDeleted);

    default List<ClientInfoTabEntity> getAllActiveTabsByClient(Long clientId){
        return findAllByClientEntityAndIsDelete(clientId, false);
    }

    void deleteByIdAndIsDeleted(Long tabId, boolean isDeleted);
    default void deleteActiveTab(Long tabId){
        deleteByIdAndIsDeleted(tabId, false);
    }
}
