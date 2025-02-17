package com.app.ecommerceManagementAPI.controller;

import com.app.ecommerceManagementAPI.dto.JwtRefreshRequest;
import com.app.ecommerceManagementAPI.dto.JwtRequest;
import com.app.ecommerceManagementAPI.dto.JwtResponse;
import com.app.ecommerceManagementAPI.dto.UserDTO;
import com.app.ecommerceManagementAPI.model.User;
import com.app.ecommerceManagementAPI.security.JwtTokenUtil;
import com.app.ecommerceManagementAPI.service.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
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
public class JwtAuthenticationController {

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private JwtTokenUtil jwtTokenUtil;

  @Autowired
  private JwtUserDetailsService userDetailsService;

//  @PostMapping("/authenticate")
//  public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
//    authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
//    final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
//    final String token = jwtTokenUtil.generateToken(userDetails);
//    return ResponseEntity.ok(new JwtResponse(token));
//  }

  @PostMapping("/authenticate")
  public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
    authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
    final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
    final String token = jwtTokenUtil.generateToken(userDetails);
    final String refreshToken = jwtTokenUtil.generateRefreshToken(userDetails);
    return ResponseEntity.ok(new JwtResponse(token, refreshToken));
  }

  @PostMapping("/refresh-token")
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
  public ResponseEntity<?> saveUser(@RequestBody UserDTO user) {
    try {
      User savedUser = userDetailsService.save(user);
      return ResponseEntity.ok(savedUser);
    }
    catch (RuntimeException e){
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
