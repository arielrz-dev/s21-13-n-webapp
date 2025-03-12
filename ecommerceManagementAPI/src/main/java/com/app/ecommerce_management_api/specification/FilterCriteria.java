package com.app.ecommerce_management_api.specification;

import lombok.Getter;
import lombok.Setter;
//comment
@Getter
@Setter
public class FilterCriteria {
  private String key;
  private Object value;
  private SearchOperation operation;

  public enum SearchOperation {
    EQUAL, LIKE, GREATER_THAN_OR_EQUAL_TO, LESS_THAN_OR_EQUAL_TO
  }
}