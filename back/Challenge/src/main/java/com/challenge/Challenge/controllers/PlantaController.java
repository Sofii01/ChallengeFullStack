package com.challenge.Challenge.controllers;

import com.challenge.Challenge.dtos.PlantaDtoResponse;
import com.challenge.Challenge.dtos.PlantaRequest;
import com.challenge.Challenge.dtos.PlantaUpdateRequest;
import com.challenge.Challenge.dtos.PlantasCantTotal;
import com.challenge.Challenge.services.interfaces.IPlantaService;
import jakarta.validation.constraints.Min;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plantas")
public class PlantaController {

    @Autowired
    private IPlantaService plantaService;

    @PostMapping()
    public ResponseEntity<PlantaDtoResponse> createPlanta(@RequestBody PlantaRequest request){
        PlantaDtoResponse plantaDtoResponse = plantaService.createPlanta(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(plantaDtoResponse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PlantaDtoResponse> updatePlanta(@PathVariable @Min(1) Integer id, @RequestBody PlantaUpdateRequest request){
        PlantaDtoResponse plantaDtoResponse = plantaService.updatePlanta(id, request);
        return ResponseEntity.ok(plantaDtoResponse);
    }
    @GetMapping("/cantidades")
    public ResponseEntity<PlantasCantTotal> calcularTotales(){
        PlantasCantTotal cantTotal = plantaService.calcularCantidades();

        return ResponseEntity.ok(cantTotal);
    }
    @GetMapping()
    public ResponseEntity<List<PlantaDtoResponse>> getAll(){
        List<PlantaDtoResponse> plantaDtoResponses = plantaService.getAll();
        return ResponseEntity.ok(plantaDtoResponses);
    }
}
