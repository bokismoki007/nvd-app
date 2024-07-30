package com.tutofox.workoutspotify.service;

import com.tutofox.workoutspotify.model.Plan;
import com.tutofox.workoutspotify.model.dto.ExerciseDto;

import java.util.List;
import java.util.Optional;

public interface PlanService {
    Optional<Plan> getById(Integer id);
    Plan createPlan(String name, List<ExerciseDto> exercises, Integer id);
    List<Plan> getPlansByUserId(Integer id);
    void delete(Integer id);
    void save(Plan plan);
}
