package com.app.ecommerce_management_api.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Setter
@Getter
public class ProductFilter {
  private String name;
  private String type;
  private String brand;
  private BigDecimal priceMin;
  private BigDecimal priceMax;
}
