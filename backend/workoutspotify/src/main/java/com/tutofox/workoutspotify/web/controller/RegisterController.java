package com.tutofox.workoutspotify.web.controller;

import com.tutofox.workoutspotify.exceptions.InvalidArgumentException;
import com.tutofox.workoutspotify.exceptions.PasswordsDoNotMatchException;
import com.tutofox.workoutspotify.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/register")
@Validated
@CrossOrigin("*")
public class RegisterController {
    private final AuthService authService;

    public RegisterController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("")
    public ResponseEntity<String> register(
            @RequestParam String username,
            @RequestParam String email,
            @RequestParam String password,
            @RequestParam String confirmPassword
    ){
        try{
            this.authService.register(username,email,password,confirmPassword);
            return ResponseEntity.ok("Корисникот е успешно регистриран!");
        }
        catch(PasswordsDoNotMatchException | InvalidArgumentException ex){
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }
}
