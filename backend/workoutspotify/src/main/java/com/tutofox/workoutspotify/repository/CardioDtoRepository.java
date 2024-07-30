package com.tutofox.workoutspotify.repository;

import com.tutofox.workoutspotify.model.dto.CardioDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardioDtoRepository extends JpaRepository<CardioDto,Integer> {
}
