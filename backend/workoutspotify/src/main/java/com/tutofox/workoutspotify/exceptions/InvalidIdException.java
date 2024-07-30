package com.tutofox.workoutspotify.exceptions;

public class InvalidIdException extends RuntimeException{
    public InvalidIdException(){
        super("Invalid id.");
    }
}
