import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="home">
      <header>
        <img className="banner contact-banner" src="../../images/contact.webp" />

        <Navbar/>

        <main>
          <div className="slogans">
            <h1>
              Where can you find us? glupoooooo
            </h1>
          </div>
        </main>
      </header>

    </div>
  );
};

export default Contact;
