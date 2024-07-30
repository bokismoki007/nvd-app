package com.tutofox.workoutspotify.service.implementation;

import com.tutofox.workoutspotify.exceptions.InvalidIdException;
import com.tutofox.workoutspotify.model.Plan;
import com.tutofox.workoutspotify.model.User;
import com.tutofox.workoutspotify.model.dto.ExerciseDto;
import com.tutofox.workoutspotify.repository.PlanRepository;
import com.tutofox.workoutspotify.repository.UserRepository;
import com.tutofox.workoutspotify.service.PlanService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PlanServiceImpl implements PlanService {
    private final PlanRepository planRepository;
    private final UserRepository userRepository;


    public PlanServiceImpl(PlanRepository planRepository, UserRepository userRepository) {
        this.planRepository = planRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Optional<Plan> getById(Integer id) {
        return this.planRepository.findById(id);
    }

    @Override
    public Plan createPlan(String name, List<ExerciseDto> exercises, Integer id) {
        Plan plan = new Plan(name);
        User user = this.userRepository.findById(id).orElseThrow(() -> new InvalidIdException());
        plan.setUser(user);
        plan.setExercises(exercises);
        return this.planRepository.save(plan);
    }

    @Override
    public List<Plan> getPlansByUserId(Integer id) {
        List<Plan> list = new ArrayList<>();
        List<Plan> allPlans = this.planRepository.findAll();
        for(Plan plan : allPlans){
            if(plan.getUser().getId().equals(id)){
                list.add(plan);
            }
        }
        return list;
    }

    @Override
    public void delete(Integer id) {
        this.planRepository.deleteById(id);
    }

    @Override
    public void save(Plan plan) {
        this.planRepository.save(plan);
    }
}
