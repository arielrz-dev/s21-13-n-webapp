package com.app.ecommerce_management_api;

import io.github.cdimascio.dotenv.Dotenv;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//@SpringBootApplication
//public class EcommerceManagementApiApplication {
//
//	private static final Logger logger = LoggerFactory.getLogger(EcommerceManagementApiApplication.class);
//
//	public static void main(String[] args) {
//		Dotenv dotenv = Dotenv.load();
//		System.setProperty("POSTGRES_DB", dotenv.get("POSTGRES_DB"));
//		System.setProperty("POSTGRES_USER", dotenv.get("POSTGRES_USER"));
//		System.setProperty("POSTGRES_PASSWORD", dotenv.get("POSTGRES_PASSWORD"));
//
//		SpringApplication.run(EcommerceManagementApiApplication.class, args);
//
//	}
//	@PostConstruct
//	public void logSwaggerUrl() {
//		logger.info("Swagger UI available at: http://localhost:8080/swagger-ui/index.html");
//	}
//}


@SpringBootApplication
public class EcommerceManagementApiApplication {

	private static final Logger logger = LoggerFactory.getLogger(EcommerceManagementApiApplication.class);

	public static void main(String[] args) {
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

		SpringApplication.run(EcommerceManagementApiApplication.class, args);
	}

	private static void setSystemProperty(String key, String value) {
		if (value != null) {
			System.setProperty(key, value);
		} else {
			logger.warn("Environment variable {} is not set", key);
		}
	}

	@PostConstruct
	public void logSwaggerUrl() {
		logger.info("Swagger UI available at: http://localhost:8080/swagger-ui/index.html");
	}
}