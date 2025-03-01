package com.app.ecommerce_management_api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
//comment
@Entity
@Table(name = "flavor")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Flavor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "flavor", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<IceCreamLooseFlavor> looseIceCreams;

}