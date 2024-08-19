package com.tutofox.workoutspotify.service.implementation;


import com.tutofox.workoutspotify.exceptions.NoExerciseFoundException;
import com.tutofox.workoutspotify.mapper.ExerciseMapper;
import com.tutofox.workoutspotify.model.Exercise;
import com.tutofox.workoutspotify.model.Playlist;
import com.tutofox.workoutspotify.model.dto.ExerciseDto;
import com.tutofox.workoutspotify.model.enumerations.Type;
import com.tutofox.workoutspotify.repository.ExerciseDtoRepository;
import com.tutofox.workoutspotify.repository.ExerciseRepository;
import com.tutofox.workoutspotify.service.ExerciseService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ExerciseServiceImpl implements ExerciseService {
    private final ExerciseRepository exerciseRepository;
    private final ExerciseDtoRepository exerciseRepository2;
    private final ExerciseMapper exerciseMapper;

    public ExerciseServiceImpl(ExerciseRepository exerciseRepository, ExerciseDtoRepository exerciseRepository2, ExerciseMapper exerciseMapper) {
        this.exerciseRepository = exerciseRepository;
        this.exerciseRepository2 = exerciseRepository2;
        this.exerciseMapper = exerciseMapper;
    }

    @Override
    public Exercise create(String name, String type, String targetMuscles,String goal, int sets, int minReps, int maxReps, String url) {
        Exercise exercise = new Exercise(name,type,targetMuscles,goal,sets,minReps,maxReps, url);
        return this.exerciseRepository.save(exercise);
    }

    @Override
    public void delete(Integer id) {
        this.exerciseRepository.deleteById(id);
    }

    @Override
    public ExerciseDto findExerciseForChestCompound(String goal, String currentBody, String targetBody) {
        return this.exerciseMapper.exerciseToDto(this.exerciseRepository.findExerciseByGoalContainingAndTargetMusclesStartsWithAndType(goal,"chest",Type.COMPOUND).orElseThrow(() -> new NoExerciseFoundException()),goal,currentBody, targetBody);
    }

    @Override
    public ExerciseDto findExerciseForBackCompound(String goal, String currentBody, String targetBody) {
        return this.exerciseMapper.exerciseToDto(this.exerciseRepository.findExerciseByGoalContainingAndTargetMusclesStartsWithAndType(goal,"back",Type.COMPOUND).orElseThrow(() -> new NoExerciseFoundException()),goal,currentBody, targetBody);
    }

    @Override
    public ExerciseDto findExerciseForShouldersIsolation(String goal, String currentBody, String targetBody) {
        return this.exerciseMapper.exerciseToDto(this.exerciseRepository.findExerciseByGoalContainingAndTargetMusclesStartsWithAndType(goal,"shoulders",Type.ISOLATION).orElseThrow(() -> new NoExerciseFoundException()),goal,currentBody, targetBody);
    }

    @Override
    public ExerciseDto findExerciseForTricepsIsolation(String goal, String currentBody, String targetBody) {
        return this.exerciseMapper.exerciseToDto(this.exerciseRepository.findExerciseByGoalContainingAndTargetMusclesStartsWithAndType(goal,"triceps",Type.ISOLATION).orElseThrow(() -> new NoExerciseFoundException()),goal,currentBody, targetBody);
    }

    @Override
    public ExerciseDto findExerciseForBicepsIsolation(String goal, String currentBody, String targetBody) {
        return this.exerciseMapper.exerciseToDto(this.exerciseRepository.findExerciseByGoalContainingAndTargetMusclesStartsWithAndType(goal,"biceps",Type.ISOLATION).orElseThrow(() -> new NoExerciseFoundException()),goal,currentBody, targetBody);
    }

    @Override
    public ExerciseDto findExerciseForStomachIsolation(String goal, String currentBody, String targetBody) {
        return this.exerciseMapper.exerciseToDto(this.exerciseRepository.findExerciseByGoalContainingAndTargetMusclesStartsWithAndType(goal,"stomach",Type.ISOLATION).orElseThrow(() -> new NoExerciseFoundException()),goal,currentBody, targetBody);
    }

    @Override
    public ExerciseDto findExerciseForLegsIsolation(String goal, String currentBody, String targetBody) {
        return this.exerciseMapper.exerciseToDto(this.exerciseRepository.findExerciseByGoalContainingAndTargetMusclesStartsWithAndType(goal,"hamstrings",Type.ISOLATION).orElseThrow(() -> new NoExerciseFoundException()),goal,currentBody, targetBody);
    }

    @Override
    public ExerciseDto findExerciseForLegsCompound(String goal, String currentBody, String targetBody) {
        return this.exerciseMapper.exerciseToDto(this.exerciseRepository.findExerciseByGoalContainingAndTargetMusclesStartsWithAndType(goal,"legs",Type.COMPOUND).orElseThrow(() -> new NoExerciseFoundException()),goal,currentBody, targetBody);
    }

    @Override
    public List<ExerciseDto> getExercisesByPlan(Integer id) {
        List<ExerciseDto> list = new ArrayList<>();
        List<ExerciseDto> allExercises = this.exerciseRepository2.findAll();
        for(ExerciseDto ex : allExercises){
            if(ex.getPlan().getId().equals(id)){
                list.add(ex);
            }
        }
        return list;
    }

    @Override
    public void deleteByPlanId(Integer planId) {
        List<ExerciseDto> allDtos = this.exerciseRepository2.findAll();
        for(ExerciseDto dto : allDtos){
            if(dto.getPlan().getId().equals(planId)){
                this.exerciseRepository2.deleteById(dto.getId());
            }
        }
    }


}
