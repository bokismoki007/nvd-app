package com.tutofox.workoutspotify.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Playlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String url;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    public Playlist(String name, String url) {
        this.name = name;
        this.url = url;
    }
}
