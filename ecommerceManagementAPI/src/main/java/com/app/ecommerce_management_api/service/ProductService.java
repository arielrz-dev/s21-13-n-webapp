package com.app.ecommerce_management_api.service;

import com.app.ecommerce_management_api.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

public interface ProductService {
//  List<Product> getProducts(Specification spec);
  Page<Product> getProducts(Specification<Product> spec, Pageable pageable);
  Product getProductById(Long id);
}
