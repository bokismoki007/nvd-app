import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const DeletePlaylist = () => {
    const location = useLocation();

    useEffect(() => {
        axios.delete(`http://localhost:8080/api/playlist/delete/${location.state.userId}/${location.state.playlistId}`,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',},
            })
        window.location.href="/profile";
    },[])
    return(
        <body>

        </body>
    )
}
export default DeletePlaylist;