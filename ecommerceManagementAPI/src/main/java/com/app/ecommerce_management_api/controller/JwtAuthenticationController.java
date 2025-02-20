package com.app.ecommerce_management_api.controller;

import com.app.ecommerce_management_api.dto.JwtRefreshRequest;
import com.app.ecommerce_management_api.dto.JwtRequest;
import com.app.ecommerce_management_api.dto.JwtResponse;
import com.app.ecommerce_management_api.dto.UserDTO;
import com.app.ecommerce_management_api.model.User;
import com.app.ecommerce_management_api.security.JwtTokenUtil;
import com.app.ecommerce_management_api.service.JwtUserDetailsService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1")
@RestController
@Tag(name = "JWT Authentication Controller", description = "Endpoints for JWT authentication and user management")
public class JwtAuthenticationController {

  private final AuthenticationManager authenticationManager;

  private final JwtTokenUtil jwtTokenUtil;

  private final JwtUserDetailsService userDetailsService;

  public JwtAuthenticationController(AuthenticationManager authenticationManager, JwtTokenUtil jwtTokenUtil, JwtUserDetailsService userDetailsService) {
    this.authenticationManager = authenticationManager;
    this.jwtTokenUtil = jwtTokenUtil;
    this.userDetailsService = userDetailsService;
  }


  @PostMapping("/authenticate")
  @Operation(summary = "Authenticate user", description = "Authenticates a user and returns a JWT token and refresh token")
  public ResponseEntity<JwtResponse> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
    authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
    final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
    final String token = jwtTokenUtil.generateToken(userDetails);
    final String refreshToken = jwtTokenUtil.generateRefreshToken(userDetails);
    return ResponseEntity.ok(new JwtResponse(token, refreshToken));
  }

  @PostMapping("/refresh-token")
  @Operation(summary = "Refresh JWT token", description = "Refreshes the JWT token using the provided refresh token")
  public ResponseEntity<?> refreshToken(@RequestBody JwtRefreshRequest refreshRequest) {
    String refreshToken = refreshRequest.getRefreshToken();
    if (Boolean.TRUE.equals(jwtTokenUtil.isTokenExpired(refreshToken))) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Refresh token has expired");
    }
    String username = jwtTokenUtil.getUsernameFromToken(refreshToken);
    UserDetails userDetails = userDetailsService.loadUserByUsername(username);
    String newAccessToken = jwtTokenUtil.generateToken(userDetails);
    return ResponseEntity.ok(new JwtResponse(newAccessToken, refreshToken));
  }

  @PostMapping("/register")
  @Operation(summary = "Register new user", description = "Registers a new user in the system")
  public ResponseEntity<?> saveUser(@RequestBody UserDTO user) {
    try {
      User savedUser = userDetailsService.save(user);
      return ResponseEntity.ok(savedUser);
    } catch (RuntimeException e) {
      return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
    }
  }

  private void authenticate(String username, String password) throws Exception {
    try {
      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    } catch (DisabledException e) {
      throw new Exception("USER_DISABLED", e);
    } catch (BadCredentialsException e) {
      throw new Exception("INVALID_CREDENTIALS", e);
    }
  }
}
