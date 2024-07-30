package com.tutofox.workoutspotify.web.controller;


import com.tutofox.workoutspotify.model.Exercise;
import com.tutofox.workoutspotify.model.dto.ExerciseDto;
import com.tutofox.workoutspotify.service.ExerciseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@Validated
@RequestMapping("/api/exercise")
@CrossOrigin("*")
public class ExerciseController {
    private final ExerciseService exerciseService;

    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }
    // parameters: mainGoal, currentBody, targetBody, activityLevel
    @PostMapping(value="/create")
    public String createExercise(
            @RequestBody Exercise exercise
    ){
            this.exerciseService.create(exercise.getName(),exercise.getType().toString(), exercise.getTargetMuscles(), exercise.getGoal(), exercise.getSets(), exercise.getMinReps(), exercise.getMaxReps());
            return "Success!";
    }
    @PostMapping(value = "/find")
    public ResponseEntity<List<ExerciseDto>> findExercise(
            @RequestParam String goal,
            @RequestParam String currentBody,
            @RequestParam String targetBody
    ){
        List<ExerciseDto> exercise = new ArrayList<>();
        exercise.add(this.exerciseService.findExerciseForChestCompound(goal,currentBody.toLowerCase(),targetBody.toLowerCase()));
        exercise.add(this.exerciseService.findExerciseForBackCompound(goal,currentBody.toLowerCase(),targetBody.toLowerCase()));
        exercise.add(this.exerciseService.findExerciseForShouldersIsolation(goal,currentBody.toLowerCase(),targetBody.toLowerCase()));
        exercise.add(this.exerciseService.findExerciseForTricepsIsolation(goal,currentBody.toLowerCase(),targetBody.toLowerCase()));
        exercise.add(this.exerciseService.findExerciseForBicepsIsolation(goal,currentBody.toLowerCase(),targetBody.toLowerCase()));
        exercise.add(this.exerciseService.findExerciseForStomachIsolation(goal,currentBody.toLowerCase(),targetBody.toLowerCase()));
        exercise.add(this.exerciseService.findExerciseForLegsCompound(goal,currentBody.toLowerCase(),targetBody.toLowerCase()));
        exercise.add(this.exerciseService.findExerciseForLegsIsolation(goal,currentBody.toLowerCase(),targetBody.toLowerCase()));
        return new ResponseEntity<>(exercise, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(
            @PathVariable("id") Integer id
    ) {
        this.exerciseService.delete(id);
    }
}
