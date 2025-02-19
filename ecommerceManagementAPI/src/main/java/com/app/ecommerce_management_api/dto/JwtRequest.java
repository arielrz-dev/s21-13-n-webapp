package com.app.ecommerce_management_api.dto;

public class JwtRequest {
  private String username;
  private String password;

  // Constructor
  public JwtRequest() {
  }

  public JwtRequest(String username, String password) {
    this.username = username;
    this.password = password;
  }

  // Getters y Setters
  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
