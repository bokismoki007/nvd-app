import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import axios from "axios";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Logout = async () => {
    const formData = new FormData();
    formData.append('username',JSON.parse(sessionStorage.getItem('user')).username)
    const response = await axios.post(
        'http://localhost:8080/api/logout',
        formData,{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
    );
    sessionStorage.removeItem('user');
    alert(response.data)
    window.location.href="/";
  }


  return (
    <nav>
      <div className="nav-container">
        <img src="../../images/app-logo.png" alt="logo" className="logo" />

        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          {sessionStorage.getItem("user") ? (
              <li>
                <Link to="/profile">
                  Profile
                </Link>
              </li>
          ) : (null)}
          <li>
            {sessionStorage.getItem("user") ? (
                <Link to="/" onClick={Logout}>
                  Logout
                </Link>
            ) : (
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
