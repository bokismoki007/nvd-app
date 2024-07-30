package com.tutofox.workoutspotify.service;

import com.tutofox.workoutspotify.model.Cardio;
import com.tutofox.workoutspotify.model.dto.CardioDto;

public interface CardioService {
    Cardio create(String name, String goal, String time);
    CardioDto findCardioBefore(String goal, String targetBody);
    CardioDto findCardioAfter(String goal, String activity);
}
