package com.app.ecommerce_management_api.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//comment
@Entity
@Table(name = "stock_product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StockProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long stock;

    @OneToOne
    @JoinColumn(name = "id_product", nullable = false, unique = true)
    @JsonBackReference
    private Product product;

}
