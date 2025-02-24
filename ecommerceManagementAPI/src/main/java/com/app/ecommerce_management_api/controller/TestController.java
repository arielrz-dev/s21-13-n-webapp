package com.app.ecommerce_management_api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

  @GetMapping
  public String testRoute(){
    return "test";
  }

  @GetMapping("/hide")
  public String testRouteHide(){
    return "test";
  }
}
