package com.challenge.Challenge.dtos;

import jakarta.validation.constraints.NotBlank;

public class PlantaRequest {
    @NotBlank
    private String nombre;
    @NotBlank
    private String pais;
}
