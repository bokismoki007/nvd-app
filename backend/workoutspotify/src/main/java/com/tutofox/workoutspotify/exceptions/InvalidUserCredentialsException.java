package com.tutofox.workoutspotify.exceptions;

public class InvalidUserCredentialsException extends RuntimeException{
    public InvalidUserCredentialsException() {
        super("Погрешно корисничко име или лозинка!");
    }
}
