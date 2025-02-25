package com.app.ecommerce_management_api.controller;

import com.app.ecommerce_management_api.model.Product;
import com.app.ecommerce_management_api.repository.ProductRepository;
import com.app.ecommerce_management_api.specification.ProductSpecification;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/products")

public class ProductController {

  private final ProductRepository productRepository;

  public ProductController(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  @GetMapping
  public List<Product> getProducts(
          @RequestParam(required = false) String name,
          @RequestParam(required = false) String type,
          @RequestParam(required = false) String brand,
          @RequestParam(required = false) BigDecimal priceMin,
          @RequestParam(required = false) BigDecimal priceMax) {
    ProductSpecification spec = new ProductSpecification(name, type, brand, priceMin, priceMax);
    return productRepository.findAll(spec);
  }
}
