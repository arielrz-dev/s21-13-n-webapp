package com.app.ecommerce_management_api.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "stock_flavor")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StockFlavor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double stockMin;
    private Double stockMax;
    private Double stockCurrent;

    @OneToOne
    @JoinColumn(name = "id_flavor", nullable = false, unique = true)
    private Product flavor;


}
