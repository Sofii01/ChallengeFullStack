package com.challenge.Challenge.services.implement;

import com.challenge.Challenge.dtos.PlantaDtoResponse;
import com.challenge.Challenge.dtos.PlantaRequest;
import com.challenge.Challenge.dtos.PlantaUpdateRequest;
import com.challenge.Challenge.dtos.PlantasCantTotal;
import com.challenge.Challenge.exceptions.ModelNotFoundException;
import com.challenge.Challenge.models.Planta;
import com.challenge.Challenge.repositories.IPlantaRepository;
import com.challenge.Challenge.services.interfaces.IPlantaService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PlantaService implements IPlantaService {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private IPlantaRepository plantaRepository;

    @Override
    public PlantaDtoResponse createPlanta(PlantaRequest request) {
        try{
            Planta planta = new Planta();
            planta.setNombre(request.getNombre());
            planta.setPais(request.getPais());
            plantaRepository.save(planta);

            return modelMapper.map(planta, PlantaDtoResponse.class);

        }catch (Exception e){
            throw new RuntimeException("Cannot create planta" + e.getMessage());
        }
    }

    @Override
    public PlantaDtoResponse updatePlanta(Integer id, PlantaUpdateRequest request) {
        Optional<Planta> optional = plantaRepository.findById(id);
        if (optional.isEmpty()){
            throw new ModelNotFoundException("Not found Planta with id " + id);
        }
        Planta planta = optional.get();
        planta.setPais(request.getPais());
        planta.setNombre(request.getNombre());
        planta.setCantLecturas(request.getCantLecturas());
        planta.setAlertasMedias(request.getAlertasMedias());
        planta.setAlertasAltas(request.getAlertasAltas());
        planta.setSensoresDeshab(request.getSensoresDeshab());
        plantaRepository.save(planta);
        return modelMapper.map(planta, PlantaDtoResponse.class);
    }

    @Override
    public PlantaDtoResponse getById(Integer id) {
        Optional<Planta> planta = plantaRepository.findById(id);
        if (planta.isEmpty()){
            throw new ModelNotFoundException("Not found Planta with id " + id);
        }

        return modelMapper.map(planta.get(), PlantaDtoResponse.class);
    }

    @Override
    public List<PlantaDtoResponse> getAll() {
        List<Planta> list = plantaRepository.findAll();
        return list.stream().map(planta -> modelMapper.map(planta, PlantaDtoResponse.class)).collect(Collectors.toList());
    }

    @Override
    public void deletePlanta(Integer id) {
        Optional<Planta> optional = plantaRepository.findById(id);
        if (optional.isEmpty()){
            throw new ModelNotFoundException("Not found Planta with id " + id);
        }
        Planta planta = optional.get();
        plantaRepository.delete(planta);
    }

    @Override
    public PlantasCantTotal calcularCantidades() {
        int cantLecturas = 0;
        int cantAlertMedias = 0;
        int cantAlertAltas = 0;
        int cantSensDes = 0;
        List<Planta> plantas = plantaRepository.findAll();

        for ( Planta planta : plantas){
            cantLecturas += (planta.getCantLecturas() != 0) ? planta.getCantLecturas(): 0;
            cantAlertMedias += (planta.getAlertasMedias() != 0 ) ? planta.getAlertasMedias() : 0 ;
            cantAlertAltas += (planta.getAlertasAltas() != 0) ? planta.getAlertasAltas() : 0;
            cantSensDes += (planta.getSensoresDeshab() != 0) ? planta.getSensoresDeshab() : 0  ;

        }
        return new PlantasCantTotal(cantLecturas, cantAlertMedias, cantAlertAltas, cantSensDes);
    }
}
