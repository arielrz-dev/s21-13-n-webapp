package com.app.ecommerce_management_api;

import io.github.cdimascio.dotenv.Dotenv;
import org.junit.jupiter.api.BeforeAll;
import org.springframework.boot.test.context.SpringBootTest;

//@SpringBootTest
//class EcommerceManagementApiApplicationTests {
//
//  @BeforeAll
//  public static void setup() {
//    Dotenv dotenv = Dotenv.load();
//    System.setProperty("POSTGRES_DB", dotenv.get("POSTGRES_DB"));
//    System.setProperty("POSTGRES_USER", dotenv.get("POSTGRES_USER"));
//    System.setProperty("POSTGRES_PASSWORD", dotenv.get("POSTGRES_PASSWORD"));
//
//  }
//}

@SpringBootTest
class EcommerceManagementApiApplicationTests {

  @BeforeAll
  public static void setup() {
    String activeProfile = System.getenv("SPRING_PROFILES_ACTIVE");
    String envFile = ".env";

    if ("prod".equals(activeProfile)) {
      envFile = ".env.production";
    } else if ("dev".equals(activeProfile)) {
      envFile = ".env.development";
    }

    Dotenv dotenv = Dotenv.configure().filename(envFile).load();
    setSystemProperty("DB_NAME", dotenv.get("DB_NAME"));
    setSystemProperty("DB_USER", dotenv.get("DB_USER"));
    setSystemProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
    setSystemProperty("SPRING_PROFILES_ACTIVE", dotenv.get("SPRING_PROFILES_ACTIVE"));
    setSystemProperty("DB_HOST", dotenv.get("DB_HOST"));
    setSystemProperty("DB_PORT", dotenv.get("DB_PORT"));
  }

  private static void setSystemProperty(String key, String value) {
    if (value != null) {
      System.setProperty(key, value);
    } else {
      System.err.println("Environment variable " + key + " is not set");
    }
  }
}