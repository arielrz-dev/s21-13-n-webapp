package com.app.ecommerce_management_api.specification;


import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public abstract class BaseSpecification<T> implements Specification<T> {

  protected List<Predicate> buildPredicates(Root<T> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder, List<FilterCriteria> criteriaList) {
    List<Predicate> predicates = new ArrayList<>();
    for (FilterCriteria criteria : criteriaList) {
      switch (criteria.getOperation()) {
        case EQUAL:
          predicates.add(criteriaBuilder.equal(root.get(criteria.getKey()), criteria.getValue()));
          break;
        case LIKE:
          predicates.add(criteriaBuilder.like(root.get(criteria.getKey()), "%" + criteria.getValue() + "%"));
          break;
        case GREATER_THAN_OR_EQUAL_TO:
          predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get(criteria.getKey()), criteria.getValue().toString()));
          break;
        case LESS_THAN_OR_EQUAL_TO:
          predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get(criteria.getKey()), criteria.getValue().toString()));
          break;
        // Agrega más casos según sea necesario
      }
    }
    return predicates;
  }
}