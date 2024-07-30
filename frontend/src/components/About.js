import React, { useRef } from "react";
import Navbar from "./Navbar";
import "../styles/About.css";

const About = () => {
  return (
    <div className="home">
      <header>
        <img className="banner" src="../../images/about.png" />

        <Navbar />

        <section>
          <div className="slogans">
            <h1>
              Sweat & Forget is rapidly becoming one of the leading fitness
              brands online, with over <span>200 thousand</span> customers
              served to date...
            </h1>
          </div>

          <div className="go_back">
            <img src="../../images/arrow.png" />
          </div>
        </section>
      </header>

      <div className="container">
        <div className="paragraphs">
          <h2 className="title">OUR MISSION</h2>
          <p>
            Our mission is to make health and fitness more accessible to the
            people who can benefit from online fitness and coaching programs
            designed to achieve life-changing results.
          </p>

          <h2 className="title">OUR “BIG WHY”</h2>
          <p>
            We ask all of our customers looking to lose weight or get in shape
            to{" "}
            <b>
              identify their “big why” – their biggest motivators and
              inspiration for making the change.
            </b>
          </p>

          <p>
            Our “Big Why” for starting Sweat & Forget came from noticing the
            overwhelming{" "}
            <b>
              misinformation and confusion around weight loss, dieting, and
              fitness…
            </b>
          </p>

          <p>
            And observing how the <b>obesity crisis was worsening each year…</b>
          </p>

          <p>
            And how the BEST workouts, programs, and coaching services were
            designed for people who had the luxury of spending thousands of
            dollars a month on a personal trainer, coach, or a personal chef.
          </p>

          <p>
            <b> So we decided to change all that.</b>
          </p>

          <p>
            We developed a series of fitness programs for men and women who
            wanted to <b>lose weight the RIGHT way,</b> learn how to build
            muscle naturally, and <b>get in the best shape of their lives.</b>
          </p>

          <h2 className="outline">
            ARE YOU READY TO START <span className="span">YOUR JOURNEY</span>{" "}
            WITH US?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
