package com.tutofox.workoutspotify.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.tutofox.workoutspotify.model.dto.CardioDto;
import com.tutofox.workoutspotify.model.dto.ExerciseDto;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @JsonManagedReference
    @OneToMany(mappedBy = "plan")
    private List<ExerciseDto> exercises;

    @JsonManagedReference
    @OneToMany(mappedBy = "plan")
    private List<CardioDto> cardios;

    public Plan(String name) {
        this.name = name;
        this.exercises = new ArrayList<>();
        this.cardios = new ArrayList<>();
    }
}
