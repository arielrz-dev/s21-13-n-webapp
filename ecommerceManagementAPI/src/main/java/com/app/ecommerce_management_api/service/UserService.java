package com.app.ecommerce_management_api.service;

import com.app.ecommerce_management_api.model.User;
import org.springframework.stereotype.Service;


public interface UserService {
  User getUserInfoByUsername(String username);
}
