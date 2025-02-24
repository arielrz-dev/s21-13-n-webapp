package com.app.ecommerce_management_api.controller;

import com.app.ecommerce_management_api.model.User;
import com.app.ecommerce_management_api.service.UserService;
import com.app.ecommerce_management_api.service.impl.UserServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/user")
  @PreAuthorize("hasRole('USER')")
  public ResponseEntity<String> getUser() {
    return ResponseEntity.ok("Hello, User!");
  }


  @GetMapping("/dashboard")
  public ResponseEntity<User> getUserDashboard(@AuthenticationPrincipal UserDetails userDetails) {
    // Obtener el username del usuario autenticado
    String username = userDetails.getUsername();

    // Cargar la información del usuario desde la base de datos
    User userAuthenticatedInfo = userService.getUserInfoByUsername(username);

    return ResponseEntity.ok(userAuthenticatedInfo);
  }
}
