import React, { useState } from "react";
import Loading from "../components/Loading";
import "../styles/Playlist.css";

const Playlist = () => {
    const [loading, setLoading] = useState(false)
    const [playlist, setPlaylist] = useState(null)

    const handleEmotionClick = (emotion) => {
        setLoading(true)
        setTimeout(() => {
            setPlaylist(`Playlist for ${emotion}`)
            setLoading(false)
        }, 2000)
    }

    if(loading) return <Loading />

    return(
        <div className="playlist">
            <h1>Choose Your Emotion</h1>
            {['Happy', 'Sad', 'Energetic', 'Joyful', 'Relaxed', 'Drowsy'].map((emotion, i) => (
                <button key={i} onClick={() => handleEmotionClick(emotion)}>
                    {emotion}
                </button>
            ))}
            {playlist && <p>{playlist}</p>}
        </div>
    )
};

export default Playlist;
