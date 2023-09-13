package org.vladimir.homearchiveauth.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.vladimir.homearchiveauth.model.object.ClientInfoTab;
import org.vladimir.homearchiveauth.model.response.ClientInfoTabResponse;

import java.util.List;

@SpringBootTest
class UserInfoControllerTest {

    @Autowired
    private UserInfoController controller;
    @Test
    void getUserInfo() {
        final List<ClientInfoTabResponse> userInfo = controller.getUserInfo(1L);
    }

    @Test
    void createUserInfo() {
    }

    @Test
    void updateUserInfo() {
    }

    @Test
    void deleteUser() {
    }
}