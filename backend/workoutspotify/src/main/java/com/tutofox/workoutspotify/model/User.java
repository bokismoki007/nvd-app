package com.tutofox.workoutspotify.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.tutofox.workoutspotify.model.enumerations.UserStatus;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name="app_users")
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String email;
    private String password;
    @JsonManagedReference
    @OneToMany(mappedBy = "user")
    private List<Plan> plans;
    @JsonManagedReference
    @OneToMany(mappedBy = "user")
    private List<Playlist> playlists;
    @Enumerated(EnumType.STRING)
    private UserStatus userStatus;
    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.userStatus = UserStatus.LOGGED_OUT;
        this.plans = new ArrayList<>();
        this.playlists = new ArrayList<>();
    }
}
