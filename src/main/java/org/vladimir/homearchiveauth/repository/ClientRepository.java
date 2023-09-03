package org.vladimir.homearchiveauth.repository;

import org.springframework.data.repository.CrudRepository;
import org.vladimir.homearchiveauth.model.entity.ClientEntity;

import java.util.List;
import java.util.Optional;

public interface ClientRepository extends CrudRepository<ClientEntity, Long> {
    Optional<ClientEntity> findByClientNameAndIsDeleted(String name, Boolean isDeleted);
    void deleteByClientNameAndIsDeleted(String name, Boolean isDeleted);
    List<ClientEntity> findAllByIsDeleted(Boolean isDeleted);

    default Optional<ClientEntity> findActiveClientByName(String name){
        return this.findByClientNameAndIsDeleted(name, false);
    }
    default Optional<ClientEntity> findDeletedClientByName(String name){
        return this.findByClientNameAndIsDeleted(name, true);
    }
    default void deleteActiveByClientNameAndIsDeleted(String name){
        this.deleteByClientNameAndIsDeleted(name, false);
    }

    default List<ClientEntity> findAllActiveClients(){
        return this.findAllByIsDeleted(false);
    }
}
