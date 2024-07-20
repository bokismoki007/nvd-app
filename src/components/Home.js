import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <header>
        <video playsInline muted loop className="video">
          /* autoPlay is missing ^ */
          <source src="../../images/video-.mp4" type="video/mp4" />
        </video>

        <nav>
          <img src="../../images/app-logo.png" />
          <ul>
            <li>
              <a href="#section1">Home</a>
            </li>
            <li>
              <a href="#section2">About</a>
            </li>
            <li>
              <a href="#section3">Reviews</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="slogans">
          <h1>
            WORK HARD, PLAY EVEN <span>HARDER</span>.
          </h1>
          <h2>
            World-Class Training Programs, Premium Content, and guaranteed Fast
            Visible Results!
          </h2>
        
          <Link to="/workout-survey">
            <button className="button">Take the Survey</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
