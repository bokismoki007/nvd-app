package com.tutofox.workoutspotify.exceptions;

public class UsernameOrEmailAlreadyExistsException extends RuntimeException{
    public UsernameOrEmailAlreadyExistsException() {
        super(String.format("Корисник со корисничко име или емаил веќе постои!"));
    }
}