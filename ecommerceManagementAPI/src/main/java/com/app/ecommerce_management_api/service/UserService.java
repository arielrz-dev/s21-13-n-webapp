package com.app.ecommerce_management_api.service;

import com.app.ecommerce_management_api.model.User;
import jakarta.servlet.http.HttpServletRequest;

public interface UserService {
  User getUserInfoByUsername(String username);

  String getUsernameFromRequest(HttpServletRequest request);

  Long getUserIdFromRequest(HttpServletRequest request);

  String extractTokenFromRequest(HttpServletRequest request);

  User getUserFromToken(HttpServletRequest request);
}
