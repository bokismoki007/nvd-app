package com.tutofox.workoutspotify.service;

import com.tutofox.workoutspotify.model.User;

public interface AuthService {
    User login(String email, String password);
    User register(String username, String email, String password, String confirmPassword);
    void logout(String email);
}
