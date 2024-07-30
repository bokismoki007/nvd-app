package com.tutofox.workoutspotify.service;

import com.tutofox.workoutspotify.model.Playlist;

import java.util.List;

public interface PlaylistService {
    Playlist savePlaylistToUser(String name, String url, Integer id);
    void deletePlaylist(Integer id);
    List<Playlist> getPlaylistsByUserId(Integer id);
}
