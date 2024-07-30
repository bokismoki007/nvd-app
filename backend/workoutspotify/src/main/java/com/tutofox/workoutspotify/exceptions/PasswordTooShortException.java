package com.tutofox.workoutspotify.exceptions;

public class PasswordTooShortException extends RuntimeException{
    public PasswordTooShortException(){
        super("Password must have more than 6 characters!");
    }
}
