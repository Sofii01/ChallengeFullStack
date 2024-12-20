package com.challenge.Challenge.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlantaUpdateRequest {
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
