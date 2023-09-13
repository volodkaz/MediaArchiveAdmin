package org.vladimir.homearchiveauth.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.vladimir.homearchiveauth.model.entity.ClientTabEntity;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class ClientTabRepositoryTest {

    @Autowired
    private ClientTabRepository repository;

    @Test
    void getClientTabEntityById() {
        final ClientTabEntity tabEntity = repository.getClientTabEntityById(1L)
                .orElseThrow(() -> new RuntimeException("Не найден таб по tabId " + 1L));
        System.out.println();
    }
}