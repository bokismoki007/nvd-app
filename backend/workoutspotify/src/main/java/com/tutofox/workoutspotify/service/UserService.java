package com.tutofox.workoutspotify.service;

import com.tutofox.workoutspotify.model.Plan;
import com.tutofox.workoutspotify.model.Playlist;
import com.tutofox.workoutspotify.model.dto.ExerciseDto;

public interface UserService {
    void delete(Integer id);

    void savePlaylist(Integer id,Playlist playlist);
    void savePlan(Integer id, Plan plan);
    void deletePlan(Integer userId, Integer planId);
    void deletePlaylist(Integer userId, Integer playlistId);
}
