package com.app.ecommerce_management_api.controller;

import com.app.ecommerce_management_api.dto.ProductFilter;
import com.app.ecommerce_management_api.dto.response.ProductResponse;
import com.app.ecommerce_management_api.model.Product;
import com.app.ecommerce_management_api.service.ProductService;
import com.app.ecommerce_management_api.specification.ProductSpecification;
import com.app.ecommerce_management_api.util.ConversionUtil;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")

public class ProductController {

  private final ProductService productService;

  private final ConversionUtil convert;

  public ProductController(ProductService productService, ConversionUtil convert) {
    this.productService= productService;
    this.convert = convert;
  }

  @Operation(summary = "Get products", description = "Returns a list of products based on the provided filter criteria")
  @GetMapping
  public ResponseEntity<List<ProductResponse>> getProducts(ProductFilter filter) {
    Specification spec = new ProductSpecification(filter);
    List<Product> products = productService.getProducts(spec);
    return ResponseEntity.ok(convert.convertToDtoList(products, ProductResponse.class));
  }
}
