package com.app.ecommerce_management_api.repository;

import com.app.ecommerce_management_api.model.IceCreamLoose;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//comment
@Repository
public interface IcemCreamLosseRepository extends JpaRepository<IceCreamLoose,Long> {
}
