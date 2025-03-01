package com.app.ecommerce_management_api.service.impl;

import com.app.ecommerce_management_api.model.User;
import com.app.ecommerce_management_api.repository.UserRepository;
import com.app.ecommerce_management_api.security.JwtTokenUtil;
import com.app.ecommerce_management_api.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
//comment
@Service
public class UserServiceImpl implements UserService {

  private final JwtTokenUtil jwtTokenUtil;

  private final UserDetailsService userDetailsService;

  private final UserRepository userRepository;

  public UserServiceImpl(JwtTokenUtil jwtTokenUtil, UserDetailsService userDetailsService, UserRepository userRepository) {
    this.jwtTokenUtil = jwtTokenUtil;
    this.userDetailsService = userDetailsService;
    this.userRepository = userRepository;
  }

  @Override
  public User getUserInfoByUsername(String username) {
    return userRepository.findByUsername(username);
  }
  private String extractUsernameFromToken(String token) {
    return jwtTokenUtil.getUsernameFromToken(token);
  }
  @Override
  public String getUsernameFromRequest(HttpServletRequest request) {
    String token = extractTokenFromRequest(request);
    return extractUsernameFromToken(token);
  }

  @Override
  public Long getUserIdFromRequest(HttpServletRequest request) {
    String token = extractTokenFromRequest(request);
    String username = extractUsernameFromToken(token);
    UserDetails userDetails = userDetailsService.loadUserByUsername(username);
    User user = userRepository.findByUsername(userDetails.getUsername());
    return user.getId();
  }

  @Override
  public String extractTokenFromRequest(HttpServletRequest request) {
    return request.getHeader("Authorization").substring(7);
  }
  @Override
  public User getUserFromToken(HttpServletRequest request) {
    String token = extractTokenFromRequest(request);
    String username = extractUsernameFromToken(token);
    return userRepository.findByUsername(username);
  }
}
