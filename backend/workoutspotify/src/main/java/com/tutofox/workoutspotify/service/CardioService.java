package com.tutofox.workoutspotify.service;

import com.tutofox.workoutspotify.model.Cardio;
import com.tutofox.workoutspotify.model.dto.CardioDto;

public interface CardioService {
    Cardio create(String name, String goal, String time, String url);
    CardioDto findCardioBefore(String goal, String targetBody);
    CardioDto findCardioAfter(String goal, String activity);
    CardioDto getBeforeByPlanId(Integer planId);
    CardioDto getAfterByPlanId(Integer planId);
    void deleteByPlanId(Integer planId);
}
