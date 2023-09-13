package org.vladimir.homearchiveauth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class HomeArchiveAuthApplication {

    public static void main(String[] args) {
        SpringApplication.run(HomeArchiveAuthApplication.class, args);
    }

}
