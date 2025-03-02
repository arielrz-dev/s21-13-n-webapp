package com.app.ecommerce_management_api.controller;

import com.app.ecommerce_management_api.dto.ProductFilter;
import com.app.ecommerce_management_api.dto.response.ProductResponse;
import com.app.ecommerce_management_api.model.Product;
import com.app.ecommerce_management_api.service.ProductService;
import com.app.ecommerce_management_api.specification.ProductSpecification;
import com.app.ecommerce_management_api.util.ConversionUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/products")

public class ProductController {

  private final ProductService productService;

  private final ConversionUtil convert;

  public ProductController(ProductService productService, ConversionUtil convert) {
    this.productService= productService;
    this.convert = convert;
  }

  @Operation(summary = "Get product by ID", description = "Returns a product by its ID")
  @GetMapping("/{id}")
  public ResponseEntity<ProductResponse> getProductById(@PathVariable Long id) {
    Product product = productService.getProductById(id);
    return ResponseEntity.ok(convert.convertToDto(product,ProductResponse.class));
  }


  @Operation(
          summary = "Get products",
          description = "Devuelve una lista de productos basada en los criterios de filtro proporcionados",
          parameters = {
                  @Parameter(name = "filter", description = "Criterios de filtro para los productos")
          },
          responses = {
                  @ApiResponse(responseCode = "200", description = "Lista de productos", content = @io.swagger.v3.oas.annotations.media.Content(
                          mediaType = "application/json",
                          schema = @io.swagger.v3.oas.annotations.media.Schema(implementation = ProductResponse.class)
                  )),
                  @ApiResponse(responseCode = "400", description = "Solicitud incorrecta")
          }
  )
  @GetMapping("")
  public ResponseEntity<Page<ProductResponse>> getProducts(ProductFilter filter, Pageable pageable) {
    // Si el Pageable es nulo (cuando no se pasan los parámetros page y size), usamos un valor predeterminado
    if (pageable == null) {
      pageable = PageRequest.of(0, 20, Sort.by(Sort.Order.asc("name")));  // Página 0, tamaño 20 productos por página
    }

    Specification<Product> spec = new ProductSpecification(filter);
    Page<Product> productsPage = productService.getProducts(spec, pageable);  // Especificamos que es una página de Product
    Page<ProductResponse> productResponsesPage = productsPage.map(product -> convert.convertToDto(product, ProductResponse.class));

    // Convertimos la lista de productos a la respuesta (DTO)
    return ResponseEntity.ok(productResponsesPage);
  }
}
