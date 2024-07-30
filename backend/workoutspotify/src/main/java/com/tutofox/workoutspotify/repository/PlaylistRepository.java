package com.tutofox.workoutspotify.repository;

import com.tutofox.workoutspotify.model.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaylistRepository extends JpaRepository<Playlist,Integer> {
    @Override
    List<Playlist> findAll();
}
