package com.tutofox.workoutspotify.web.controller;

import com.tutofox.workoutspotify.exceptions.InvalidIdException;
import com.tutofox.workoutspotify.model.Playlist;
import com.tutofox.workoutspotify.service.PlaylistService;
import com.tutofox.workoutspotify.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/playlist")
@Validated
@CrossOrigin("*")
public class PlaylistController {
    private final PlaylistService playlistService;
    private final UserService userService;

    public PlaylistController(PlaylistService playlistService, UserService userService) {
        this.playlistService = playlistService;
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<String> addPlaylistToUser(HttpServletRequest request){
        try {
            Playlist playlist = this.playlistService.savePlaylistToUser(request.getParameter("name"),request.getParameter("url"),Integer.valueOf(request.getParameter("id")));
            this.userService.savePlaylist(Integer.valueOf(request.getParameter("id")),playlist);
            return ResponseEntity.ok("Playlist added.");
        }
        catch(InvalidIdException ex){
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }
    @DeleteMapping("/delete/{userId}/{playlistId}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deletePlaylist(
            @PathVariable("userId") Integer userId,
            @PathVariable("playlistId") Integer playlistId
    ) {
        this.playlistService.deletePlaylist(playlistId);
        this.userService.deletePlaylist(userId,playlistId);
        return ResponseEntity.ok("Playlist removed.");
    }
    @GetMapping(value = "/user/{id}")
    public ResponseEntity<List<Playlist>> getPlaylistsByUserId(@PathVariable Integer id){
        return new ResponseEntity<>(this.playlistService.getPlaylistsByUserId(id),HttpStatus.OK);
    }
}
