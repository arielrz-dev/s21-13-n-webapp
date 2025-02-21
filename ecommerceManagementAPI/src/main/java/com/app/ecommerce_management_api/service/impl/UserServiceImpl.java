package com.app.ecommerce_management_api.service.impl;

import com.app.ecommerce_management_api.model.User;
import com.app.ecommerce_management_api.repository.UserRepository;
import com.app.ecommerce_management_api.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public User getUserInfoByUsername(String username) {
    return userRepository.findByUsername(username);
  }
}
