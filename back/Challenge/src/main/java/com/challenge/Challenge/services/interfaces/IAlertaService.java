package com.challenge.Challenge.services.interfaces;

import com.challenge.Challenge.dtos.AlertaDtoResponse;
import com.challenge.Challenge.dtos.AlertaRequest;
import com.challenge.Challenge.enums.AlertType;

import java.util.List;

public interface IAlertaService {
    List<AlertaDtoResponse> getByPlanta(Integer id_planta);
    List<AlertaDtoResponse> getByType(AlertType type);
    AlertaDtoResponse createAlerta(AlertaRequest request);
}
