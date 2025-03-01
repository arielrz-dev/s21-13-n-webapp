package com.app.ecommerce_management_api.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//comment
@Configuration
public class SwaggerConfig {

  @Bean
  public OpenAPI customOpenAPI() {
    return new OpenAPI()
            .info(new Info()
                    .title("Ecommerce Management API")
                    .version("1.0")
                    .description("API documentation for the Ecommerce Management application"));
  }
}
