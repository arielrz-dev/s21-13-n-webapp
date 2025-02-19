package com.app.ecommerce_management_api.dto;

public class JwtResponse {
  private final String jwtToken;
  private final String refreshToken;

  public JwtResponse(String jwtToken, String refreshToken) {
    this.jwtToken = jwtToken;
    this.refreshToken=refreshToken;
  }

  public String getJwtToken() {
    return jwtToken;
  }

  public String getRefreshToken() {
    return refreshToken;
  }
}