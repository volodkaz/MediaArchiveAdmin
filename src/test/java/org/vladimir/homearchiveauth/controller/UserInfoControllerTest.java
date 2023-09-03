package org.vladimir.homearchiveauth.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.vladimir.homearchiveauth.model.response.ClientInfoContainerResponse;

@SpringBootTest
class UserInfoControllerTest {

    @Autowired
    private UserInfoController controller;
    @Test
    void getUserInfo() {
        final ClientInfoContainerResponse userInfo = controller.getUserInfo(1L);
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