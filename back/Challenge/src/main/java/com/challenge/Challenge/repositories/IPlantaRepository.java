package com.challenge.Challenge.repositories;

import com.challenge.Challenge.models.Planta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPlantaRepository extends JpaRepository<Planta, Integer> {
}
