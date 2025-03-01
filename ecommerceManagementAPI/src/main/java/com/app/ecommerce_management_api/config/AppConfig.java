package com.app.ecommerce_management_api.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

  @Bean
  public ModelMapper modelMapper(){
      ModelMapper modelMapper = new ModelMapper();

      // Mapeo personalizado para User y UserDTO
//      modelMapper.typeMap(User.class, UserDTO.class).addMappings(mapper->{
//        mapper.map(User::getUsername,UserDTO::setUsername);
//        mapper.map(User::getRole,UserDTO::setRole);
//      });
      return modelMapper;
  }
}
