package com.tutofox.workoutspotify.web.controller;

import com.tutofox.workoutspotify.service.AuthService;
import com.tutofox.workoutspotify.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/logout")
@Validated
@CrossOrigin("*")
public class LogoutController {
    private final AuthService authService;
    private final UserService userService;

    public LogoutController(AuthService authService, UserService userService) {
        this.authService = authService;
        this.userService = userService;
    }
    @PostMapping
    public ResponseEntity<String> logout(HttpServletRequest request){
        authService.logout(request.getParameter("username"));
        return ResponseEntity.ok("Logout successful.");
    }
    @DeleteMapping("/delete/{user-id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(
            @PathVariable("user-id") Integer id
    ) {
        this.userService.delete(id);
    }
}
