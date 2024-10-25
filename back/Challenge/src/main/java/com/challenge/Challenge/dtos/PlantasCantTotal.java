package com.challenge.Challenge.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class PlantasCantTotal {
    @NotBlank
    private int cantLecturas;
    @NotBlank
    private int cantAlertMedias;
    @NotBlank
    private int cantAlertAltas;
    @NotBlank
    private int cantSensDes;

}
