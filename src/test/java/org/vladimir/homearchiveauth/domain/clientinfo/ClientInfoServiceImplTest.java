package org.vladimir.homearchiveauth.domain.clientinfo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;
import org.vladimir.homearchiveauth.domain.client.ClientService;
import org.vladimir.homearchiveauth.domain.clienttab.ClientTabService;
import org.vladimir.homearchiveauth.model.object.Client;
import org.vladimir.homearchiveauth.model.object.ClientInfoProperty;
import org.vladimir.homearchiveauth.model.object.ClientInfoTab;
import org.vladimir.homearchiveauth.model.object.ClientTab;
import org.vladimir.homearchiveauth.model.object.ClientTabProperty;
import org.vladimir.homearchiveauth.model.request.ClientInfoContainerRequest;
import org.vladimir.homearchiveauth.model.request.ClientInfoRequest;
import org.vladimir.homearchiveauth.model.request.ClientRequest;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@EnableTransactionManagement
class ClientInfoServiceTest {

    @Autowired
    private ClientInfoService service;
    @Autowired
    private ClientService clientService;
    @Autowired
    private ClientTabService clientTabService;

    private Client client;
    private ClientTab tab;

    private void init(){
        this.tab = clientTabService.getTab("Личные данные");
        this.client = clientService.createUser(new ClientRequest("test", "test", Collections.emptySet()));
    }


    @Test
    void getClientInfo() {
        service.getClientInfo(client.id());
    }

    @Test
    @Transactional
    @Commit
    @Rollback
    void createUserInfo() {
        init();
        ClientTabRequest request = new ClientTabRequest(tab.id(), client.id(), "Данные", "коментарий к данным");
        final List<ClientInfoTab> userInfo = service.createUserInfo(request);

        assertNotNull(userInfo);
        final List<ClientInfoTab> infoTabs = userInfo.stream().filter(infoTab -> infoTab.tab().id().equals(tab.id()))
                .collect(Collectors.toList());
        assertNotEquals(0, infoTabs.size());
        final ClientInfoTab clientInfoTab = infoTabs.get(0);
        assertAll("Check tab data",
                () -> assertEquals("Данные", clientInfoTab.name()),
                () -> assertEquals("коментарий к данным", clientInfoTab.comment()),
                () -> assertEquals(tab.name(), clientInfoTab.tab().name()),
                () -> assertEquals(tab.comment(), clientInfoTab.tab().comment()),
                () -> assertEquals(tab.id(), clientInfoTab.tab().id())
                );
        final List<ClientInfoProperty> properties = clientInfoTab.properties();
        final List<ClientTabProperty> tabProperties = tab.properties();
        assertEquals(tabProperties.size(), properties.size());
        properties.stream().forEachOrdered(prop -> {
            final long count = tabProperties.stream().filter(tabProp -> tabProp.id().equals(prop.id())).count();
            assertEquals(1, count);
        });
    }

    @Test
    void updateUserInfo() {
        final List<ClientInfoRequest> requests = List.of(new ClientInfoRequest(2L, "Данные"));
        final ClientInfoContainerRequest request = new ClientInfoContainerRequest(client.id(), requests);
        final List<ClientInfoTab> clientInfoTabs = service.updateUserInfo(request);
        System.out.println();
    }

    @Test
    void deleteUserInfo() {
        service.deleteUserInfo(client.id(), 3L);
    }
}