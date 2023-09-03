package org.vladimir.homearchiveauth;

import org.junit.jupiter.api.Test;

import java.math.BigInteger;
import java.security.SecureRandom;

public class GenerateSecretKey {
    @Test
    void generateKey(){
        byte[] bytes = new byte[32];
        new SecureRandom().nextBytes(bytes);
        String secretKey = new BigInteger(1, bytes).toString(16);
        System.out.println(secretKey);
    }
}
