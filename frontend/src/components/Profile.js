import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "../styles/Profile.css"
const Profile = () => {
    const [playlists,setPlaylists] = useState([]);
    const [plans,setPlans] = useState([]);
    const userInfo = JSON.parse(sessionStorage.getItem("user"))
    useEffect(() => {
        fetch(`http://localhost:8080/api/playlist/user/${userInfo.id}`)
            .then(response => response.json())
            .then(data => {
                setPlaylists(data);
            });
    }, [])
    useEffect(() => {
        fetch(`http://localhost:8080/api/exercise/user/${userInfo.id}`)
            .then(response => response.json())
            .then(data => {
                setPlans(data);
            });
    }, [])
    return(
        <body>
            <div className="workout">
                <h2>{userInfo.username}</h2>
                <h2>{userInfo.email}</h2>
                <h2>Password: Hidden</h2>
                <h3>Playlists</h3>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Link</th>
                        <th>     </th>
                    </tr>
                        {playlists.map((playlist,i) => (
                            <tr key={i}>
                                <td>{playlist.name}</td>
                                <td><a href={playlist.url}>View</a></td>
                                <td><Link to="/delete-playlist" state={{
                                    userId: userInfo.id,
                                    playlistId: playlist.id
                                }}>Delete</Link></td>
                            </tr>
                        ))}
                </table>
                <h3>Plans</h3>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Link</th>
                    </tr>
                    {plans.map((plan,i) => (
                        <tr key={i}>
                            <td>{plan.name}</td>
                            <td><Link to="/plan" state={{
                                id:plan.id
                            }}>View</Link></td>
                            <td><Link to="/delete-plan" state={{
                                userId: userInfo.id,
                                planId: plan.id
                            }}>Delete</Link></td>
                        </tr>
                    ))}
                </table>
            </div>
        </body>
    )
}
export default Profile;