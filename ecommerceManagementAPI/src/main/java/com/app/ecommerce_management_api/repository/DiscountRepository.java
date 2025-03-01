package com.app.ecommerce_management_api.repository;

import com.app.ecommerce_management_api.model.Discount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//comment
@Repository
public interface DiscountRepository extends JpaRepository<Discount,Long> {
}
