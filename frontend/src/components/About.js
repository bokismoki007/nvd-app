import React, { useRef } from "react";
import { Link } from "react-router-dom";
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
        </div>

        <div className="card-wrapper">
          <h2 className="title tops">
            6 reasons why our workout plans can become addictive
          </h2>
          <hr className="hr-about" />

          <div className="card-container">
            <div class="card">
              #1
              <hr className="hr-about hr-about-card" />
              <h3>Having fun while getting results!</h3>
              <p>
                Create fun workout plans that are effective and thrilling for
                each individual
              </p>
            </div>
            <div class="card">
              #2
              <hr className="hr-about hr-about-card" />
              <h3>The effect is clearly visible!</h3>
              <p>
                It doesn't take much to notice the first ever changes on you and
                your body
              </p>
            </div>
            <div class="card">
              #3
              <hr className="hr-about hr-about-card" />
              <h3>Entire support from us!</h3>
              <p>
                Know that rooting for our clients is something we prioritize and
                make it well known
              </p>
            </div>
            <div class="card">
              #4
              <hr className="hr-about hr-about-card" />
              <h3>Choosing a training style that works best for you!</h3>
              <p>
                Whether you want to train something more laid-back or hardcore
                have in mind that we have both
              </p>
            </div>
            <div class="card">
              #5
              <hr className="hr-about hr-about-card" />
              <h3>
                Selecting a type of a playlist that matches your current state!
              </h3>
              <p>
                You have the freedom of choice to select whatever type of
                musical playlist to motivate you
              </p>
            </div>
            <div class="card">
              #6
              <hr className="hr-about hr-about-card" />
              <h3>All in all a feel-good workout!</h3>
              <p>
                Another thing we kept in our minds was to make the workout plans
                rather more enjoyable
              </p>
            </div>
          </div>
        </div>

        <div className="steps">
          <h1 className="title">First-time training flow</h1>
          <hr className="hr-about hr-about-card" />
          <h2>Easy 5 steps</h2>
          <div className="columns">
            <div>
              <h2>Step</h2>
              <h1 className="numbers">
                1 <br /> <span className="vertical-line"></span>
              </h1>
            </div>

            <div className="align-left">
              <h2 className="align-left">Registration</h2>
              Easy registration via the link from the menu bar.
            </div>

            <div>
              <img src="../../images/about/step-1.jpg" />
            </div>
          </div>

          <div className="columns">
            <div>
              <h2>Step</h2>
              <h1 className="numbers">
                2 <br /> <span className="vertical-line"></span>
              </h1>
            </div>

            <div className="align-left">
              <h2 className="align-left">Survey #1</h2>A short survey to let us
              decide the best workout plan considering your current status and
              end goal.
            </div>

            <div>
              <img src="../../images/about/step-2.webp" />
            </div>
          </div>

          <div className="columns">
            <div>
              <h2>Step</h2>
              <h1 className="numbers">
                3 <br /> <span className="vertical-line"></span>
              </h1>
            </div>

            <div className="align-left">
              <h2 className="align-left">Workout plan</h2>
              Based on your survey answers an ideal plan is generated which you
              can save until further notice.
            </div>

            <div>
              <img src="../../images/about/step-3.webp" />
            </div>
          </div>

          <div className="columns">
            <div>
              <h2>Step</h2>
              <h1 className="numbers">
                4 <br /> <span className="vertical-line"></span>
              </h1>
            </div>

            <div className="align-left">
              <h2 className="align-left">Survey #2</h2>An even shorter survey to
              let us create the best musical playlist considering your current
              mood to drive you to your absolute best.
            </div>

            <div>
              <img src="../../images/about/step-4.jpeg" />
            </div>
          </div>

          <div className="columns">
            <div>
              <h2>Step</h2>
              <h1 className="numbers">
                5 <br /> <span className="vertical-line"></span>
              </h1>
            </div>

            <div className="align-left">
              <h2 className="align-left">Aim for the stars</h2>
              At this point we consider you ready to strive in your surroundings
              while working on yourself. Good luck and have fun.
            </div>

            <div>
              <img src="../../images/about/step-5.jpg" />
            </div>
          </div>
        </div>

        <span>
          <h2 className="outline">
            ARE YOU READY TO START <span className="span">YOUR JOURNEY</span>{" "}
            WITH US?
          </h2>

          <Link style={{ textDecoration: "none" }} to="/login">
            <button className="button margin">Yes</button>
          </Link>
        </span>

        <footer>
          <p>SWEAT & FORGET &copy;</p>
        </footer>
      </div>
    </div>
  );
};

export default About;
