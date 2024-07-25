package com.tutofox.workoutspotify.exceptions;

public class NoExerciseFoundException extends RuntimeException{
    public NoExerciseFoundException(){
        super("No exercise found.");
    }
}
