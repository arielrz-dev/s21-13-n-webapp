package com.app.ecommerce_management_api.specification;

import com.app.ecommerce_management_api.model.Product;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;


public class ProductSpecification implements Specification<Product> {

  private String name;
  private String type;
  private String brand;
  private BigDecimal priceMin;
  private BigDecimal priceMax;

  public ProductSpecification(String name, String type, String brand, BigDecimal priceMin, BigDecimal priceMax) {
    this.name = name;
    this.type = type;
    this.brand = brand;
    this.priceMin = priceMin;
    this.priceMax = priceMax;
  }

  @Override
  public Predicate toPredicate(Root<Product> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
    List<Predicate> predicates = new ArrayList<>();
    if (name != null) {
      predicates.add(criteriaBuilder.like(root.get("name"), "%" + name + "%"));
    }
    if (type != null) {
      predicates.add(criteriaBuilder.equal(root.get("type"), type));
    }
    if (brand != null) {
      predicates.add(criteriaBuilder.equal(root.get("brand"), brand));
    }
    if (priceMin != null) {
      predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("price"), priceMin));
    }
    if (priceMax != null) {
      predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("price"), priceMax));
    }
    return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
  }
}