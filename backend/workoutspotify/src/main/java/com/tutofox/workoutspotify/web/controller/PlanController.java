package com.tutofox.workoutspotify.web.controller;

import com.tutofox.workoutspotify.model.dto.ExerciseDto;
import com.tutofox.workoutspotify.service.CardioService;
import com.tutofox.workoutspotify.service.ExerciseService;
import com.tutofox.workoutspotify.service.PlanService;
import com.tutofox.workoutspotify.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plan")
@Validated
@CrossOrigin("*")
public class PlanController {
    private final ExerciseService exerciseService;
    private final PlanService planService;
    private final CardioService cardioService;
    private final UserService userService;
    public PlanController(ExerciseService exerciseService, PlanService planService, CardioService cardioService, UserService userService) {
        this.exerciseService = exerciseService;
        this.planService = planService;
        this.cardioService = cardioService;
        this.userService = userService;
    }

    @GetMapping(value = "/planId/{id}")
    public ResponseEntity<List<ExerciseDto>> getExercisesByPlanId(@PathVariable Integer id){
        return new ResponseEntity<>(this.exerciseService.getExercisesByPlan(id), HttpStatus.OK);
    }
    @DeleteMapping("/delete/{userId}/{planId}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deletePlan(
            @PathVariable("userId") Integer userId,
            @PathVariable("planId") Integer planId
    ) {
        this.cardioService.deleteByPlanId(planId);
        this.exerciseService.deleteByPlanId(planId);
        this.planService.delete(planId);
        this.userService.deletePlan(userId,planId);
        return ResponseEntity.ok("Plan removed.");
    }
}
