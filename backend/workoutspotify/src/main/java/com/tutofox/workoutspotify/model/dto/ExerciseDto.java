package com.tutofox.workoutspotify.model.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.tutofox.workoutspotify.model.Plan;
import com.tutofox.workoutspotify.model.enumerations.Type;
import com.tutofox.workoutspotify.model.enumerations.Weight;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
@Entity
@Data
@NoArgsConstructor
public class ExerciseDto{
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;
        private String name;
        @Enumerated(EnumType.STRING)
        private Type type;
        private String targetMuscle;
        @Enumerated(EnumType.STRING)
        private Weight weight;
        private int sets;
        private int reps;
        @JsonBackReference
        @ManyToOne
        @JoinColumn(name="plan_id")
        private Plan plan;

        public ExerciseDto(String name, Type type, String targetMuscle, Weight weight, int sets, int reps) {
                this.name = name;
                this.type = type;
                this.targetMuscle = targetMuscle;
                this.weight = weight;
                this.sets = sets;
                this.reps = reps;
        }
}
