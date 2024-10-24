package com.challenge.Challenge.repositories;

import com.challenge.Challenge.models.Alerta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAlertaRepository extends JpaRepository<Alerta, Integer> {
}
