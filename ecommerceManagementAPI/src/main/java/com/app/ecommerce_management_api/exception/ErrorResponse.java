package com.app.ecommerce_management_api.exception;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ErrorResponse {
  private int statusCode;
  private String message;
  private LocalDateTime timestamp;
  private String errorCode;
  private String details;
  private String path;

  public ErrorResponse(int statusCode, String message, String errorCode, String details, String path) {
    this.statusCode = statusCode;
    this.message = message;
    this.timestamp = LocalDateTime.now();
    this.errorCode = errorCode;
    this.details = details;
    this.path = path;
  }
}
