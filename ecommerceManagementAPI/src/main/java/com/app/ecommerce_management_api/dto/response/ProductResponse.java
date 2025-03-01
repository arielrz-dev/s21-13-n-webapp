package com.app.ecommerce_management_api.dto.response;

import lombok.Data;

@Data
public class ProductResponse {
  private Long id;
  private String name;
  private String type;
  private String brand;
  private String description;
  private Double price;
  private String imageUrl;
//  private LocalDateTime createdAt;
  private StockProduct stockProduct;

  @Data
  public static class StockProduct {
    private Integer stock;
  }
}