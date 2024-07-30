package com.tutofox.workoutspotify.model;

import com.tutofox.workoutspotify.model.enumerations.Type;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Exercise {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    @Enumerated(EnumType.STRING)
    private Type type;
    private String targetMuscles;
    private String goal;
    private int sets;
    private int minReps;
    private int maxReps;
    public Exercise(String name, String type, String targetMuscles, String goal, int sets, int minReps, int maxReps) {
        this.name = name;
        this.type = Type.valueOf(type);
        this.targetMuscles = targetMuscles;
        this.goal = goal;
        this.sets = sets;
        this.minReps = minReps;
        this.maxReps = maxReps;
    }

}
