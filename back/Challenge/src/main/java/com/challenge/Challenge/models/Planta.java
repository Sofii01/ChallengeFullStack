package com.challenge.Challenge.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class Planta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String pais;
    private String nombre;
    private int cantLecturas = 0;
    private int alertasMedias = 0;
    private int alertasAltas = 0;

    private int sensoresDeshab = 0;

}
