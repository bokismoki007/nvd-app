import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#section1">Section 1</a>
            </li>
            <li>
              <a href="#section2">Section 2</a>
            </li>
            <li>
              <a href="#section3">Section 3</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="hero">
          <Link to="/survey">
            <button>Take the Survey</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;