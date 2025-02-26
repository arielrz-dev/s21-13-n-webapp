package com.app.ecommerce_management_api.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Request for JWT authentication")
public class JwtRequest {

  @Schema(description = "Email of the user", example = "john.doe@example.com")
  private String email;
  @Schema(description = "Password of the user", example = "password123")
  private String password;

  // Constructor
  public JwtRequest() {
  }

  public JwtRequest(String email, String password) {
    this.email = email;
    this.password = password;
  }

  // Getters y Setters

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
