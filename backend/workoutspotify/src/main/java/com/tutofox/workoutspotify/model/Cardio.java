package com.tutofox.workoutspotify.model;

import com.tutofox.workoutspotify.model.enumerations.Time;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Cardio {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private String goal;
    @Enumerated(EnumType.STRING)
    private Time time;

    public Cardio(String name, String goal, String time) {
        this.name = name;
        this.goal = goal;
        this.time = Time.valueOf(time);
    }
}
