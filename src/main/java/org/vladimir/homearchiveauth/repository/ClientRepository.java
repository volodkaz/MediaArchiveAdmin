package org.vladimir.homearchiveauth.repository;

import org.springframework.data.repository.CrudRepository;
import org.vladimir.homearchiveauth.model.entity.ClientEntity;

import java.util.List;
import java.util.Optional;

public interface ClientRepository extends CrudRepository<ClientEntity, Long> {
    Optional<ClientEntity> findByNameAndIsDeleted(String name, Boolean isDeleted);
    void deleteByIdAndIsDeleted(Long name, Boolean isDeleted);
    List<ClientEntity> findAllByIsDeleted(Boolean isDeleted);

    default Optional<ClientEntity> findActiveClientByName(String name){
        return this.findByNameAndIsDeleted(name, false);
    }
    default Optional<ClientEntity> findDeletedClientByName(String name){
        return this.findByNameAndIsDeleted(name, true);
    }
    default void deleteActiveClient(Long userId){
        this.deleteByIdAndIsDeleted(userId, false);
    }

    default List<ClientEntity> findAllActiveClients(){
        return this.findAllByIsDeleted(false);
    }
}
