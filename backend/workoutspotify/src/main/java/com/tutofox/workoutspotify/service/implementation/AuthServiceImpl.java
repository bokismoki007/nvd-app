package com.tutofox.workoutspotify.service.implementation;

import com.tutofox.workoutspotify.exceptions.*;
import com.tutofox.workoutspotify.model.User;
import com.tutofox.workoutspotify.model.enumerations.UserStatus;
import com.tutofox.workoutspotify.repository.UserRepository;
import com.tutofox.workoutspotify.service.AuthService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    private boolean credentialsInvalid(String username, String password) {
        return username == null || password == null || username.isEmpty() || password.isEmpty();
    }
    @Override
    public User login(String email, String password) {
        if (credentialsInvalid(email, password)) {
            throw new InvalidArgumentException();
        }
        User user = userRepository.findByEmail(email).orElseThrow(() -> new InvalidUsernameException(email));
        if(!passwordEncoder.matches(password,user.getPassword())){
            throw new InvalidUserCredentialsException();
        }
        user.setUserStatus(UserStatus.LOGGED_IN);
        return this.userRepository.save(user);
    }

    @Override
    public User register(String username, String email, String password, String confirmPassword) {
        if (credentialsInvalid(email, password)) {
            throw new InvalidArgumentException();
        }
        if(password.length() <= 6){
            throw new PasswordTooShortException();
        }
        if(!password.equals(confirmPassword)){
            throw new PasswordsDoNotMatchException();
        }
        if(this.userRepository.findByUsername(username).isPresent() || this.userRepository.findByEmail(email).isPresent()){
            throw new UsernameOrEmailAlreadyExistsException();
        }
        String passwordEncoded = this.passwordEncoder.encode(password);
        User user = new User(username,email,passwordEncoded);
        return this.userRepository.save(user);
    }

    @Override
    public void logout(String username) {
        User user = this.userRepository.findByUsername(username).get();
        user.setUserStatus(UserStatus.LOGGED_OUT);
        this.userRepository.save(user);
    }
}
