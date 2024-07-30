package com.tutofox.workoutspotify.repository;

import com.tutofox.workoutspotify.model.Cardio;
import com.tutofox.workoutspotify.model.enumerations.Time;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CardioRepository extends JpaRepository<Cardio,Integer> {
    Optional<Cardio> findCardioByGoalContainingAndTime(String goal, Time time);
}
