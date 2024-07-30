package com.tutofox.workoutspotify.service;

import com.tutofox.workoutspotify.model.Exercise;
import com.tutofox.workoutspotify.model.dto.ExerciseDto;


public interface ExerciseService {
    Exercise create(String name, String type, String targetMuscles, String goal, int sets, int minReps, int maxReps);

    void delete(Integer id);

    ExerciseDto findExerciseForChestCompound(String goal, String currentBody, String targetBody);
    ExerciseDto findExerciseForBackCompound(String goal, String currentBody, String targetBody);
    ExerciseDto findExerciseForShouldersIsolation(String goal, String currentBody, String targetBody);
    ExerciseDto findExerciseForTricepsIsolation(String goal, String currentBody, String targetBody);
    ExerciseDto findExerciseForBicepsIsolation(String goal, String currentBody, String targetBody);
    ExerciseDto findExerciseForStomachIsolation(String goal, String currentBody, String targetBody);
    ExerciseDto findExerciseForLegsIsolation(String goal, String currentBody, String targetBody);
    ExerciseDto findExerciseForLegsCompound(String goal, String currentBody, String targetBody);
}
