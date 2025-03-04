package com.app.ecommerce_management_api.dto.response;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class DiscountResponse {
  private Long id;
  private String description;
  private Integer discountAmount;
}
