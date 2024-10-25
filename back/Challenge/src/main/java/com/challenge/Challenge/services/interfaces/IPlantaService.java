package com.challenge.Challenge.services.interfaces;

import com.challenge.Challenge.dtos.PlantaDtoResponse;
import com.challenge.Challenge.dtos.PlantaRequest;
import com.challenge.Challenge.dtos.PlantaUpdateRequest;
import com.challenge.Challenge.dtos.PlantasCantTotal;


import java.util.List;

public interface IPlantaService {
    PlantaDtoResponse createPlanta(PlantaRequest request);
    PlantaDtoResponse updatePlanta(Integer id, PlantaUpdateRequest request);

    PlantaDtoResponse getById(Integer id);
    List<PlantaDtoResponse> getAll();
     void deletePlanta(Integer id);
    PlantasCantTotal calcularCantidades();

}
