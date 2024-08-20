package com.tutofox.workoutspotify.model.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.tutofox.workoutspotify.model.Plan;
import com.tutofox.workoutspotify.model.enumerations.Type;
import com.tutofox.workoutspotify.model.enumerations.Weight;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

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
        private String url;

        public ExerciseDto(String name, Type type, String targetMuscle, String weight, int sets, int reps, String url) {
                this.name = name;
                this.type = type;
                this.targetMuscle = targetMuscle;
                this.weight = Weight.valueOf(weight);
                this.sets = sets;
                this.reps = reps;
                this.url = url;
        }
}
