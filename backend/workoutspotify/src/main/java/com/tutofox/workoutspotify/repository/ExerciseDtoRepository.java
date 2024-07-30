package com.tutofox.workoutspotify.repository;

import com.tutofox.workoutspotify.model.dto.ExerciseDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseDtoRepository extends JpaRepository<ExerciseDto,Integer> {
}
