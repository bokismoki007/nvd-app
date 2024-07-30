package com.tutofox.workoutspotify.service.implementation;

import com.tutofox.workoutspotify.exceptions.InvalidIdException;
import com.tutofox.workoutspotify.model.Plan;
import com.tutofox.workoutspotify.model.Playlist;
import com.tutofox.workoutspotify.model.User;
import com.tutofox.workoutspotify.repository.UserRepository;
import com.tutofox.workoutspotify.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void delete(Integer id) {
        this.userRepository.deleteById(id);
    }

    @Override
    public void savePlaylist(Integer id, Playlist playlist) {
        User user = this.userRepository.findById(id).orElseThrow(() -> new InvalidIdException());
        List<Playlist> playlists = user.getPlaylists();
        playlists.add(playlist);
        user.setPlaylists(playlists);
        this.userRepository.save(user);
    }
    @Override
    public void savePlan(Integer id, Plan plan) {
        User user = this.userRepository.findById(id).orElseThrow(() -> new InvalidIdException());
        List<Plan> plans = user.getPlans();
        plans.add(plan);
        user.setPlans(plans);
        this.userRepository.save(user);
    }

    @Override
    public void deletePlan(Integer userId, Integer planId) {
        User user = this.userRepository.findById(userId).orElseThrow(() -> new InvalidIdException());
        List<Plan> allPlans = user.getPlans();
        for(Plan plan : allPlans){
            if(plan.getId().equals(planId)){
                allPlans.remove(plan);
            }
        }
        user.setPlans(allPlans);
        this.userRepository.save(user);
    }

    @Override
    public void deletePlaylist(Integer userId, Integer playlistId) {
        User user = this.userRepository.findById(userId).orElseThrow(() -> new InvalidIdException());
        List<Playlist> allPlaylists = user.getPlaylists();
        for(Playlist playlist : allPlaylists){
            if(playlist.getId().equals(playlistId)){
                allPlaylists.remove(playlist);
            }
        }
        user.setPlaylists(allPlaylists);
        this.userRepository.save(user);
    }
}
