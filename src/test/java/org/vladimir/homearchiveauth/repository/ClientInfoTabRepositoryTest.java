package org.vladimir.homearchiveauth.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.Transactional;
import org.vladimir.homearchiveauth.model.entity.ClientInfoTabEntity;

import java.util.List;

@SpringBootTest
@ComponentScan("org.vladimir.homearchiveauth")
@Transactional
class ClientInfoTabRepositoryTest {

    @Autowired
    private ClientInfoTabRepository repository;

    @Test
    void getAllActiveTabsByClient() {
        final List<ClientInfoTabEntity> allInfosForClient = repository.getAllActiveTabsByClient(1L);

        System.out.println();
    }
}