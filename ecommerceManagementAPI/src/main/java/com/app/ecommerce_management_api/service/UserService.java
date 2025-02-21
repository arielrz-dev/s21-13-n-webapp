package com.app.ecommerce_management_api.service;

import com.app.ecommerce_management_api.model.User;

public interface UserService {
  User getUserInfoByUsername(String username);
}
