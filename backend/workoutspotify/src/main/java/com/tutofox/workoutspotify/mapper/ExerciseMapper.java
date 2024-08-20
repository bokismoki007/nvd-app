package com.tutofox.workoutspotify.mapper;

import com.tutofox.workoutspotify.model.Exercise;
import com.tutofox.workoutspotify.model.dto.ExerciseDto;
import com.tutofox.workoutspotify.model.enumerations.Weight;
import org.springframework.stereotype.Service;

@Service
public class ExerciseMapper {
    public ExerciseDto exerciseToDto (Exercise exercise, String goal, String currentBody, String targetBody){
        int reps = determineReps(exercise,currentBody,targetBody);
        Weight weight = determineWeight(goal,currentBody);
        return new ExerciseDto(exercise.getName(), exercise.getType(), exercise.getTargetMuscles(), weight.toString(), exercise.getSets(), reps, exercise.getUrl());
    }
    public Weight determineWeight(String goal, String currentBody){
        Weight weight = null;
        if(
                (goal.equals("Gain muscle") || goal.equals("Alleviate physical pain")) && (currentBody.equals("regular") || currentBody.equals("flabby"))
        ){
            weight = Weight.HEAVY;
        }
        if(
                (goal.equals("Gain muscle") || goal.equals("Alleviate physical pain")) && (currentBody.equals("extra") || currentBody.equals("overweight") || currentBody.equals("obese"))
        ){
            weight = Weight.MODERATE;
        }
        if(
                (goal.equals("Reduce stress and anxiety") || goal.equals("Release stored emotions")) && (currentBody.equals("regular") || currentBody.equals("flabby") || currentBody.equals("extra"))
        ){
            weight = Weight.MODERATE;
        }
        if(
                (goal.equals("Reduce stress and anxiety") || goal.equals("Release stored emotions")) && (currentBody.equals("overweight") || currentBody.equals("obese"))
        ){
            weight = Weight.LIGHT;
        }
        if(
                (goal.equals("Lose weight") || goal.equals("Increase flexibility")) && (currentBody.equals("regular"))
        ){
            weight = Weight.MODERATE;
        }
        if(
                (goal.equals("Lose weight") || goal.equals("Increase flexibility")) && (currentBody.equals("flabby") || currentBody.equals("extra") || currentBody.equals("overweight") || currentBody.equals("obese"))
        ){
            weight = Weight.LIGHT;
        }
        return weight;
    }
    public int determineReps(Exercise exercise, String currentBody, String targetBody){
        int reps = 0;
        if(
                (currentBody.equals("regular") || currentBody.equals("flabby")) && (targetBody.equals("regular"))
        ){
            reps = exercise.getMinReps();
        }
        if(
                (currentBody.equals("regular")) && (targetBody.equals("fit") || targetBody.equals("curvy"))
        ){
            reps = exercise.getMinReps();
        }
        if(
                (currentBody.equals("regular")) && (targetBody.equals("athletic") || targetBody.equals("flat stomach"))
        ){
            reps = exercise.getMinReps();
            reps++;
        }
        if(
                (currentBody.equals("flabby")) && (targetBody.equals("fit") || targetBody.equals("curvy"))
        ){
            reps = exercise.getMinReps();
            reps++;
        }
        if(
                (currentBody.equals("flabby")) && (targetBody.equals("athletic") || targetBody.equals("flat stomach"))
        ){
            reps = exercise.getMinReps();
            reps+=2;
        }
        if (
                (currentBody.equals("extra")) && (targetBody.equals("regular"))
        ){
            reps = exercise.getMinReps();
            reps++;
        }
        if (
                (currentBody.equals("extra")) && (targetBody.equals("fit") || targetBody.equals("curvy"))
        ){
            reps = exercise.getMinReps();
            reps+=2;
        }
        if (
                (currentBody.equals("extra")) && (targetBody.equals("athletic") || targetBody.equals("flat stomach"))
        ){
            reps = exercise.getMaxReps();
            reps-=2;
        }
        if (
                (currentBody.equals("overweight")) && (targetBody.equals("regular"))
        ){
            reps = exercise.getMinReps();
            reps+=2;
        }
        if (
                (currentBody.equals("overweight")) && (targetBody.equals("fit") || targetBody.equals("curvy"))
        ){
            reps = exercise.getMaxReps();
            reps-=2;
        }
        if (
                (currentBody.equals("overweight")) && (targetBody.equals("athletic") || targetBody.equals("flat stomach"))
        ){
            reps = exercise.getMaxReps();
            reps-=1;
        }
        if (
                (currentBody.equals("obese")) && (targetBody.equals("regular"))
        ){
            reps = exercise.getMaxReps();
            reps-=1;
        }
        if (
                (currentBody.equals("obese")) && (targetBody.equals("fit") || targetBody.equals("curvy") || targetBody.equals("athletic") || targetBody.equals("flat stomach"))
        ){
            reps = exercise.getMaxReps();
        }
        return reps;
    }
}
