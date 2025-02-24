package com.app.ecommerce_management_api.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "discount")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Discount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String discountType;
    private BigDecimal amount;
    private String description;
    private Boolean active;
    private String applicationLevel;

    @ManyToMany(mappedBy = "discounts")
    private List<CartItem> cartItems;

    @ManyToMany(mappedBy = "discounts")
    private List<Cart> carts;

    @ManyToMany(mappedBy = "discounts")
    private List<OrderItem> orderItems;




}
