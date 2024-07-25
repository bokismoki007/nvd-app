import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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

          <Link to="/workout-survey" className="btn-text">
            <button className="button">Take the Survey</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
