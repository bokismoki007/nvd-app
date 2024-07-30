package com.tutofox.workoutspotify.service.implementation;

import com.tutofox.workoutspotify.exceptions.NoExerciseFoundException;
import com.tutofox.workoutspotify.mapper.CardioMapper;
import com.tutofox.workoutspotify.model.Cardio;
import com.tutofox.workoutspotify.model.dto.CardioDto;
import com.tutofox.workoutspotify.model.enumerations.Time;
import com.tutofox.workoutspotify.repository.CardioRepository;
import com.tutofox.workoutspotify.service.CardioService;
import org.springframework.stereotype.Service;

@Service
public class CardioServiceImpl implements CardioService {
    private final CardioRepository cardioRepository;
    private final CardioMapper cardioMapper;

    public CardioServiceImpl(CardioRepository cardioRepository, CardioMapper cardioMapper) {
        this.cardioRepository = cardioRepository;
        this.cardioMapper = cardioMapper;
    }

    @Override
    public Cardio create(String name, String goal, String time) {
        Cardio cardio = new Cardio(name,goal,time);
        return this.cardioRepository.save(cardio);
    }

    @Override
    public CardioDto findCardioBefore(String goal, String targetBody) {
        return this.cardioMapper.cardioToDtoBefore(this.cardioRepository.findCardioByGoalContainingAndTime(goal, Time.BEFORE).orElseThrow(() -> new NoExerciseFoundException()),targetBody.toLowerCase());
    }

    @Override
    public CardioDto findCardioAfter(String goal, String activity) {
        return this.cardioMapper.cardioToDtoAfter(this.cardioRepository.findCardioByGoalContainingAndTime(goal, Time.AFTER).orElseThrow(() -> new NoExerciseFoundException()),activity);
    }
}
