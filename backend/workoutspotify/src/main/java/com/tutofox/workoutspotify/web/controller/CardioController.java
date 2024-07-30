package com.tutofox.workoutspotify.web.controller;

import com.tutofox.workoutspotify.model.Cardio;
import com.tutofox.workoutspotify.service.CardioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cardio")
@Validated
@CrossOrigin("*")
public class CardioController {
    private final CardioService cardioService;

    public CardioController(CardioService cardioService) {
        this.cardioService = cardioService;
    }
    @PostMapping(value="/create")
    public String createCardio(
            @RequestBody Cardio cardio
    ){
        this.cardioService.create(cardio.getName(),cardio.getGoal(), cardio.getTime().toString());
        return "Success!";
    }
    @PostMapping(value="/find-before")
    public ResponseEntity<Object> findBeforeCardio(
            @RequestParam String goal,
            @RequestParam String targetBody
    ){
        return new ResponseEntity<>(this.cardioService.findCardioBefore(goal, targetBody), HttpStatus.OK);
    }
    @PostMapping(value="/find-after")
    public ResponseEntity<Object> findAfterCardio(
            @RequestParam String goal,
            @RequestParam String activity
    ){
        if(!activity.equals("sedentary")){
            return new ResponseEntity<>(this.cardioService.findCardioAfter(goal, activity),HttpStatus.OK);
        }
        else{
            return null;
        }
    }
}
