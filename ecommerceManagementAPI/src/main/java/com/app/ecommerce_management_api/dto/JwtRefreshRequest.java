package com.app.ecommerce_management_api.dto;

public class JwtRefreshRequest {
  private String refreshToken;

  public String getRefreshToken() {
    return refreshToken;
  }

  public void setRefreshToken(String refreshToken) {
    this.refreshToken = refreshToken;
  }
}
