package com.app.ecommerce_management_api.service;

import com.app.ecommerce_management_api.model.Product;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public interface ProductService {
  List<Product> getProducts(Specification spec);
}
