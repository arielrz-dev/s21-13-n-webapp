package com.app.ecommerce_management_api.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(name = "product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String type;
    private String brand;
    private String description;
    private BigDecimal price;
    private String imageUrl;
    private Instant createdAt;

    @OneToOne
    @JoinColumn(name = "id_stock_product", nullable = false, unique = true)
    private StockProduct stockProduct;

}
