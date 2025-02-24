package com.app.ecommerce_management_api.model;

import jakarta.persistence.*;

import java.math.BigDecimal;


@Entity
public class IceCreamLooseFlavor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ice_cream_loose_id", nullable = false)
    private IceCreamLoose iceCreamLoose;

    @ManyToOne
    @JoinColumn(name = "id_flavor", nullable = false)
    private Flavor flavor;

    private BigDecimal amount;
}
