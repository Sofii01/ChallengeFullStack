package com.challenge.Challenge.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlantaRequest {
    @NotBlank
    private String nombre;
    @NotBlank
    private String pais;
}
