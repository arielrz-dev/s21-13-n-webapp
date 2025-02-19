package com.app.ecommerce_management_api.repository;

import com.app.ecommerce_management_api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;

public interface UserRepository extends JpaRepository<User, Long> {
  User findByUsername(@NonNull  String username);
  User save(@NonNull User newUser);
}