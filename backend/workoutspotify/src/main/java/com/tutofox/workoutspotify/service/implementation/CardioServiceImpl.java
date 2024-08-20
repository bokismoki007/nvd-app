package com.tutofox.workoutspotify.service.implementation;

import com.tutofox.workoutspotify.exceptions.NoExerciseFoundException;
import com.tutofox.workoutspotify.mapper.CardioMapper;
import com.tutofox.workoutspotify.model.Cardio;
import com.tutofox.workoutspotify.model.dto.CardioDto;
import com.tutofox.workoutspotify.model.enumerations.Time;
import com.tutofox.workoutspotify.repository.CardioDtoRepository;
import com.tutofox.workoutspotify.repository.CardioRepository;
import com.tutofox.workoutspotify.service.CardioService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardioServiceImpl implements CardioService {
    private final CardioRepository cardioRepository;
    private final CardioDtoRepository cardioRepository2;
    private final CardioMapper cardioMapper;

    public CardioServiceImpl(CardioRepository cardioRepository, CardioDtoRepository cardioRepository2, CardioMapper cardioMapper) {
        this.cardioRepository = cardioRepository;
        this.cardioRepository2 = cardioRepository2;
        this.cardioMapper = cardioMapper;
    }

    @Override
    public Cardio create(String name, String goal, String time, String url) {
        Cardio cardio = new Cardio(name,goal,time, url);
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

    @Override
    public CardioDto getBeforeByPlanId(Integer planId) {
        CardioDto result = null;
        List<CardioDto> getAll = this.cardioRepository2.findAll();
        for(CardioDto dto : getAll){
            if(dto.getPlan().getId().equals(planId) && !dto.getName().equals("Floor Hip Abduction")){
                result = dto;
            }
        }
        return result;
    }
    @Override
    public CardioDto getAfterByPlanId(Integer planId) {
        CardioDto result = null;
        List<CardioDto> getAll = this.cardioRepository2.findAll();
        for(CardioDto dto : getAll){
            if(dto.getPlan().getId().equals(planId) && dto.getName().equals("Floor Hip Abduction")){
                result = dto;
            }
        }
        return result;
    }

    @Override
    public void deleteByPlanId(Integer planId) {
        List<CardioDto> allDtos = this.cardioRepository2.findAll();
        for(CardioDto dto : allDtos){
            if(dto.getPlan().getId().equals(planId)){
                this.cardioRepository2.deleteById(dto.getId());
            }
        }
    }
}
