package com.app.ecommerce_management_api.repository;

import com.app.ecommerce_management_api.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//comment
@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {
}
