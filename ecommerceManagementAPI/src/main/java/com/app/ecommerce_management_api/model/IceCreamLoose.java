package com.app.ecommerce_management_api.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
//comment
@Entity
@Table(name = "stock_flavor")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class IceCreamLoose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String size;

    @OneToOne
    @JoinColumn(name = "id_product", nullable = false, unique = true)
    private Product product;

    @OneToMany(mappedBy = "iceCreamLoose", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<IceCreamLooseFlavor> flavors;
}
