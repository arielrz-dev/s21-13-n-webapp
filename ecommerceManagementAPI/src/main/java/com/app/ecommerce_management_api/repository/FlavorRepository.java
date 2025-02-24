package com.app.ecommerce_management_api.repository;

import com.app.ecommerce_management_api.model.Flavor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlavorRepository extends JpaRepository<Flavor,Long> {
}
