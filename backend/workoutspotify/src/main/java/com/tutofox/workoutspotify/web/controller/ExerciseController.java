package com.tutofox.workoutspotify.web.controller;


import com.tutofox.workoutspotify.model.Exercise;
import com.tutofox.workoutspotify.model.Plan;
import com.tutofox.workoutspotify.model.Playlist;
import com.tutofox.workoutspotify.model.dto.ExerciseDto;
import com.tutofox.workoutspotify.repository.ExerciseDtoRepository;
import com.tutofox.workoutspotify.service.ExerciseService;
import com.tutofox.workoutspotify.service.PlanService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@Validated
@RequestMapping("/api/exercise")
@CrossOrigin("*")
public class ExerciseController {
    private final ExerciseService exerciseService;
    private final PlanService planService;
    private final ExerciseDtoRepository exerciseDtoRepository;

    public ExerciseController(ExerciseService exerciseService, PlanService planService, ExerciseDtoRepository exerciseDtoRepository) {
        this.exerciseService = exerciseService;
        this.planService = planService;
        this.exerciseDtoRepository = exerciseDtoRepository;
    }
    // parameters: mainGoal, currentBody, targetBody, activityLevel
    @PostMapping(value="/create")
    public String createExercise(
            @RequestBody Exercise exercise
    ){
            this.exerciseService.create(exercise.getName(),exercise.getType().toString(), exercise.getTargetMuscles(), exercise.getGoal(), exercise.getSets(), exercise.getMinReps(), exercise.getMaxReps(), exercise.getUrl());
            return "Success!";
    }
    @PostMapping(value = "/find")
    public ResponseEntity<List<ExerciseDto>> findExercise(
            @RequestParam String goal,
            @RequestParam String currentBody,
            @RequestParam String targetBody,
            @RequestParam String name,
            @RequestParam String userId
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
        if(!userId.equals("nothing")){
            Plan plan = this.planService.createPlan(name,exercise,Integer.valueOf(userId));
            for(ExerciseDto ex : exercise){
                ex.setPlan(plan);
                this.exerciseDtoRepository.save(ex);
            }
        }
        return new ResponseEntity<>(exercise, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(
            @PathVariable("id") Integer id
    ) {
        this.exerciseService.delete(id);
    }
    @GetMapping(value = "/user/{id}")
    public ResponseEntity<List<Plan>> getPlansByUserId(@PathVariable Integer id){
        return new ResponseEntity<>(this.planService.getPlansByUserId(id),HttpStatus.OK);
    }
}
