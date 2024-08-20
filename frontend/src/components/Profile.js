import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Profile.css";

const Profile = () => {
  const [playlists, setPlaylists] = useState([]);
  const [plans, setPlans] = useState([]);
  const userInfo = JSON.parse(sessionStorage.getItem("user"));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigate("/");
    }
  };
  const setId = (id) => {
    sessionStorage.setItem("planId",id);
  }
  useEffect(() => {
    fetch(`http://localhost:8080/api/playlist/user/${userInfo.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPlaylists(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/api/exercise/user/${userInfo.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPlans(data);
      });
  }, []);

  return (
    <body className="body_profile">
      <div className="go_back" onClick={handleGoBack}>
        <img src="../../images/arrow.png" />
      </div>
      <div className="profile">
        <h2>Hello {userInfo.username}!</h2>
        <h2>Email: {userInfo.email}</h2>
        <h3>Playlists</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Link-1</th>
            <th>Link-2</th>
          </tr>
          {playlists.map((playlist, i) => (
            <tr key={i}>
              <td>{playlist.name}</td>
              <td>
                <a target="_blank" href={playlist.url}>
                  View
                </a>
              </td>
              <td>
                <Link
                  to="/delete-playlist"
                  state={{
                    userId: userInfo.id,
                    playlistId: playlist.id,
                  }}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </table>
        <h3>Plans</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Link-1</th>
            <th>Link-2</th>
          </tr>
          {plans.map((plan, i) => (
            <tr key={i}>
              <td>{plan.name}</td>
              <td>
                <Link
                    to="/redirect"
                    state={{
                      planId: plan.id,
                    }}
                >
                  View
                </Link>
              </td>
              <td>
                <Link
                  to="/delete-plan"
                  state={{
                    userId: userInfo.id,
                    planId: plan.id,
                  }}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </table>

        <Link to="/workout-survey">
          {" "}
          <button>
            Generate a new Workout Playlist
          </button>
        </Link>
      </div>
    </body>
  );
};

export default Profile;
