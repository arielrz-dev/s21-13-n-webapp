package com.app.ecommerce_management_api;

import io.github.cdimascio.dotenv.Dotenv;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EcommerceManagementApiApplication {

	private static final Logger logger = LoggerFactory.getLogger(EcommerceManagementApiApplication.class);

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.load();
		System.setProperty("POSTGRES_DB", dotenv.get("POSTGRES_DB"));
		System.setProperty("POSTGRES_USER", dotenv.get("POSTGRES_USER"));
		System.setProperty("POSTGRES_PASSWORD", dotenv.get("POSTGRES_PASSWORD"));

		SpringApplication.run(EcommerceManagementApiApplication.class, args);

	}
	@PostConstruct
	public void logSwaggerUrl() {
		logger.info("Swagger UI available at: http://localhost:8080/swagger-ui/index.html");
	}
}
