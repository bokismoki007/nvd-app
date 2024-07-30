package com.tutofox.workoutspotify.exceptions;

public class ExerciseDoesNotExistException extends RuntimeException{
    public ExerciseDoesNotExistException(String name){
        super(String.format("Exercise with name %s does not exist",name));
    }
}
