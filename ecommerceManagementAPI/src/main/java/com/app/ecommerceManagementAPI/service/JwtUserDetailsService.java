package com.app.ecommerceManagementAPI.service;

import com.app.ecommerceManagementAPI.dto.UserDTO;
import com.app.ecommerceManagementAPI.model.User;
import com.app.ecommerceManagementAPI.repository.UserRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Set;

@Service
public class JwtUserDetailsService implements UserDetailsService {

  private final UserRepository userRepository;

  public JwtUserDetailsService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByUsername(username);
    if (user == null) {
      throw new UsernameNotFoundException("User not found with username: " + username);
    }
    return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
            getAuthority(user));
  }

  private Set<SimpleGrantedAuthority> getAuthority(User user) {
    return Collections.singleton(new SimpleGrantedAuthority(user.getRole()));
  }

  public User save(UserDTO user) {
    User newUser = new User();
    newUser.setUsername(user.getUsername());
    newUser.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
    newUser.setRole("ROLE_USER"); // Asignar rol por defecto
    try {
      return userRepository.save(newUser);
    }
    catch (DataIntegrityViolationException e){
    throw new RuntimeException("El usuario ya existe");
    }
  }
}
