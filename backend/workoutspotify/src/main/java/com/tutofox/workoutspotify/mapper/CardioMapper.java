package com.tutofox.workoutspotify.mapper;

import com.tutofox.workoutspotify.model.Cardio;
import com.tutofox.workoutspotify.model.dto.CardioDto;
import org.springframework.stereotype.Service;

@Service
public class CardioMapper {
    public CardioDto cardioToDtoBefore(Cardio cardio, String targetBody){
        int duration = 0;
        if(targetBody.equals("regular")){
            duration = 5;
        }
        if(targetBody.equals("fit") || targetBody.equals("curvy")){
            duration = 10;
        }
        if(targetBody.equals("athletic") || targetBody.equals("flat stomach")){
            duration = 15;
        }
        return new CardioDto(cardio.getName(),duration);
    }
    public CardioDto cardioToDtoAfter(Cardio cardio, String activity){
        int duration = 0;
        if(activity.equals("Somewhat active")){
            duration = 5;
        }
        if(activity.equals("Moderately active")){
            duration = 10;
        }
        if(activity.equals("Very active") || activity.equals("Highly active")){
            duration = 15;
        }
        return new CardioDto(cardio.getName(), duration);
    }
}
