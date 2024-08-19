package com.tutofox.workoutspotify.web.controller;

import com.tutofox.workoutspotify.exceptions.InvalidIdException;
import com.tutofox.workoutspotify.model.Cardio;
import com.tutofox.workoutspotify.model.Plan;
import com.tutofox.workoutspotify.model.dto.CardioDto;
import com.tutofox.workoutspotify.model.dto.ExerciseDto;
import com.tutofox.workoutspotify.repository.CardioDtoRepository;
import com.tutofox.workoutspotify.repository.PlanRepository;
import com.tutofox.workoutspotify.service.CardioService;
import com.tutofox.workoutspotify.service.PlanService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cardio")
@Validated
@CrossOrigin("*")
public class CardioController {
    private final CardioService cardioService;
    private final PlanService planService;
    private final PlanRepository planRepository;
    private final CardioDtoRepository cardioDtoRepository;

    public CardioController(CardioService cardioService, PlanService planService, PlanRepository planRepository, CardioDtoRepository cardioDtoRepository) {
        this.cardioService = cardioService;
        this.planService = planService;
        this.planRepository = planRepository;
        this.cardioDtoRepository = cardioDtoRepository;
    }
    @PostMapping(value="/create")
    public String createCardio(
            @RequestBody Cardio cardio
    ){
        this.cardioService.create(cardio.getName(),cardio.getGoal(), cardio.getTime().toString(), cardio.getUrl());
        return "Success!";
    }
    @PostMapping(value="/find-before")
    public ResponseEntity<Object> findBeforeCardio(
            @RequestParam String goal,
            @RequestParam String targetBody,
            @RequestParam String userId
    ){
        if(!userId.equals("nothing")){
            CardioDto dto = this.cardioService.findCardioBefore(goal, targetBody);
            List<Plan> plans = this.planRepository.findAll();
            Plan plan = plans.get(plans.size()-1);
            dto.setPlan(plan);
            List<CardioDto> list = plan.getCardios();
            list.add(dto);
            plan.setCardios(list);
            this.planService.save(plan);
            return new ResponseEntity<>(this.cardioDtoRepository.save(dto),HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(this.cardioService.findCardioBefore(goal, targetBody), HttpStatus.OK);
        }
    }
    @PostMapping(value="/find-after")
    public ResponseEntity<Object> findAfterCardio(
            @RequestParam String goal,
            @RequestParam String activity,
            @RequestParam String userId
    ){
        if(!activity.equals("sedentary")){
            if(!userId.equals("nothing")){
                CardioDto dto = this.cardioService.findCardioAfter(goal, activity);
                List<Plan> plans = this.planRepository.findAll();
                Plan plan = plans.get(plans.size()-1);
                dto.setPlan(plan);
                List<CardioDto> list = plan.getCardios();
                list.add(dto);
                plan.setCardios(list);
                this.planService.save(plan);
                return new ResponseEntity<>(this.cardioDtoRepository.save(dto),HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>(this.cardioService.findCardioAfter(goal, activity), HttpStatus.OK);
            }
        }
        else{
            return null;
        }
    }
    @GetMapping(value = "/before/{planId}")
    public ResponseEntity<CardioDto> getBeforeByPlanId(@PathVariable("planId") Integer planId){
        return new ResponseEntity<>(this.cardioService.getBeforeByPlanId(planId),HttpStatus.OK);
    }
    @GetMapping(value = "/after/{planId}")
    public ResponseEntity<CardioDto> getAfterByPlanId(@PathVariable("planId") Integer planId){
        return new ResponseEntity<>(this.cardioService.getAfterByPlanId(planId),HttpStatus.OK);
    }
}
