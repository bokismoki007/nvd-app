package com.tutofox.workoutspotify.repository;

import com.tutofox.workoutspotify.model.Plan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanRepository extends JpaRepository<Plan,Integer> {
    @Override
    List<Plan> findAll();
}
