package com.tutofox.workoutspotify.service.implementation;

import com.tutofox.workoutspotify.exceptions.InvalidIdException;
import com.tutofox.workoutspotify.model.Playlist;
import com.tutofox.workoutspotify.model.User;
import com.tutofox.workoutspotify.repository.PlaylistRepository;
import com.tutofox.workoutspotify.repository.UserRepository;
import com.tutofox.workoutspotify.service.PlaylistService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlaylistServiceImpl implements PlaylistService {
    private final PlaylistRepository playlistRepository;
    private final UserRepository userRepository;

    public PlaylistServiceImpl(PlaylistRepository playlistRepository, UserRepository userRepository) {
        this.playlistRepository = playlistRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Playlist savePlaylistToUser(String name, String url, Integer id) {
        Playlist playlist = new Playlist(name,url);
        User user = this.userRepository.findById(id).orElseThrow(() -> new InvalidIdException());
        playlist.setUser(user);
        return this.playlistRepository.save(playlist);
    }

    @Override
    public void deletePlaylist(Integer id) {
        this.playlistRepository.deleteById(id);
    }

    @Override
    public List<Playlist> getPlaylistsByUserId(Integer id) {
        List<Playlist> list = new ArrayList<>();
        List<Playlist> allPlaylists = this.playlistRepository.findAll();
        for(Playlist playlist : allPlaylists){
            if(playlist.getUser().getId().equals(id)){
                list.add(playlist);
            }
        }
        return list;
    }
}
