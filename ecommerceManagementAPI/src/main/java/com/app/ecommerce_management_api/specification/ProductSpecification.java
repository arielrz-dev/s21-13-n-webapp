package com.app.ecommerce_management_api.specification;

import com.app.ecommerce_management_api.dto.ProductFilter;
import com.app.ecommerce_management_api.model.Product;
import io.micrometer.common.util.StringUtils;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//comment
public class ProductSpecification implements Specification<Product> {

  private final String name;
  private final String type;
  private final String brand;
  private final BigDecimal priceMin;
  private final BigDecimal priceMax;

  public ProductSpecification(ProductFilter filter) {
    this.name = filter.getName();
    this.type = filter.getType();
    this.brand = filter.getBrand();
    this.priceMin = filter.getPriceMin();
    this.priceMax = filter.getPriceMax();
  }

  @Override
  public Predicate toPredicate(Root<Product> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
    List<Predicate> predicates = new ArrayList<>();

    Optional.ofNullable(name)
            .filter(StringUtils::isNotBlank)
            .ifPresent(n -> predicates.add(criteriaBuilder.like(root.get("name"), "%" + n + "%")));

    Optional.ofNullable(type)
            .filter(StringUtils::isNotBlank)
            .ifPresent(t -> predicates.add(criteriaBuilder.equal(root.get("type"), t)));

    Optional.ofNullable(brand)
            .filter(StringUtils::isNotBlank)
            .ifPresent(b -> predicates.add(criteriaBuilder.equal(root.get("brand"), b)));

    Optional.ofNullable(priceMin)
            .ifPresent(min -> predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("price"), min)));

    Optional.ofNullable(priceMax)
            .ifPresent(max -> predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("price"), max)));

    return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
  }
}