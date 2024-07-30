package com.tutofox.workoutspotify.model.dto;

import com.tutofox.workoutspotify.model.enumerations.Type;
import com.tutofox.workoutspotify.model.enumerations.Weight;

public record ExerciseDto(
        String name,
        Type type,
        String targetMuscle,
        Weight weight,
        int sets,
        int reps
) {
}
