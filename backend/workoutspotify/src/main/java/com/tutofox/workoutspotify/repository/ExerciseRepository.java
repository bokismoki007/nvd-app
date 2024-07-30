package com.tutofox.workoutspotify.repository;

import com.tutofox.workoutspotify.model.Exercise;
import com.tutofox.workoutspotify.model.Playlist;
import com.tutofox.workoutspotify.model.enumerations.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise,Integer> {
    Optional<Exercise> findExerciseByGoalContainingAndTargetMusclesStartsWithAndType(String goal, String targetMuscle, Type type);
}
