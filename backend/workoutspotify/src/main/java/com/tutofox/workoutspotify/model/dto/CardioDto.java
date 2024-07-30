package com.tutofox.workoutspotify.model.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.tutofox.workoutspotify.model.Plan;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class CardioDto{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private int duration;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="plan_id")
    private Plan plan;

    public CardioDto(String name, int duration) {
        this.name = name;
        this.duration = duration;
    }
}
