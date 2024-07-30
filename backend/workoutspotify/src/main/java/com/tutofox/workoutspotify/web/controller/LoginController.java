package com.tutofox.workoutspotify.web.controller;

import com.tutofox.workoutspotify.exceptions.InvalidUserCredentialsException;
import com.tutofox.workoutspotify.model.User;
import com.tutofox.workoutspotify.service.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/login")
@Validated
@CrossOrigin("*")
public class LoginController {
    private final AuthService authService;

    public LoginController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("")
    public ResponseEntity<Object> login(HttpServletRequest request){
        try{
            User user = this.authService.login(request.getParameter("email"),request.getParameter("password"));
            return ResponseEntity.ok(user);
        }
        catch(InvalidUserCredentialsException ex){
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }
}
