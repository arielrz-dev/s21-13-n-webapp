package com.app.ecommerce_management_api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private Product product;

}
