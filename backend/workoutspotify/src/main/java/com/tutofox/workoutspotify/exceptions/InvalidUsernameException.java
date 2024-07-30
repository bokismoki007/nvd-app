package com.tutofox.workoutspotify.exceptions;

public class InvalidUsernameException extends RuntimeException{
    public InvalidUsernameException(String username){
        super(String.format("Корисничкото име %s не постои!",username));
    }
}
