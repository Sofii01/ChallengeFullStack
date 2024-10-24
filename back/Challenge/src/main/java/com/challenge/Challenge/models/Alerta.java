package com.challenge.Challenge.models;

import com.challenge.Challenge.enums.AlertType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Alerta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Enumerated(EnumType.STRING)
    private AlertType tipo;
    private int cant;
    @ManyToOne
    @JoinColumn(name = "planta_id")
    private Planta planta;
}
