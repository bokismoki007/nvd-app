import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="home">
      <header>
        <img
          className="banner contact-banner"
          src="../../images/contact/contact.webp"
        />

        <Navbar />

        <main>
          <div className="slogans">
            <h1>Where can you find us?</h1>
          </div>
        </main>
      </header>

      <div className="container display">
        <div className="contact1">
          <img src="../../images/contact/c1.png" className="media" />
          <h2>CALL</h2>
          <h3>
            <a href="#">1.888.862.8818</a>
          </h3>
          <p>Monday-Thursday 7:00 - 15:00 CST</p>
          <p>Friday 7:00 - 10:00 CST</p>
        </div>

        <div className="contact1">
          <img src="../../images/contact/c2.png" className="media" />
          <h2>CHAT</h2>
          <h3>
            <a href="#">Available hours:</a>
          </h3>
          <p>Monday-Thursday 7:00 - 15:00 CST</p>
          <p>Friday 7:00 - 10:00 CST</p>
        </div>

        <div className="contact1">
          <img src="../../images/contact/c3.png" className="media" />
          <h2>EMAIL</h2>
          <p>If you have any questions,</p>
          <p>Send us an email by filling out this</p>
          <h3>
            <a href="#">FORM</a>
          </h3>
        </div>
      </div>

      <footer>
        <p>SWEAT & FORGET &copy;</p>
      </footer>
    </div>
  );
};

export default Contact;
