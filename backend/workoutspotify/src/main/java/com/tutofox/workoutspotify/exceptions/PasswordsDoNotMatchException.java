package com.tutofox.workoutspotify.exceptions;

public class PasswordsDoNotMatchException extends RuntimeException{
    public PasswordsDoNotMatchException() {
        super("Лозинките не се совпаѓаат!");
    }
}
