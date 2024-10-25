package com.challenge.Challenge.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlantaDtoResponse {
    @NotBlank
    private Integer id;
    @NotBlank
    private String pais;
    @NotBlank
    private String nombre;
    @NotBlank
    private int cantLecturas;
    @NotBlank
    private int alertasMedias;
    @NotBlank
    private int alertasAltas;
    @NotBlank
    private int sensoresDeshab;
}
