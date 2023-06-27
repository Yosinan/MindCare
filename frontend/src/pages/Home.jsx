import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Home.module.css";

import main_image from "../asset/brain original.jpg";

function Home() {
  return (
    <div className={style.home}>
      <div className={style.front}>
        <div className={style.image}>
          <img src={main_image} alt="calming-image" />
        </div>
        <div className={style.front_qoute}>
          <h1>What Lies Behind Your Outward Calm?</h1>
          <p>
            Discover mysteries of your inner self and find solution of your
            personal problems with the help of our psychologists.
          </p>
        </div>
      </div>
      <div className={style.welcome_part}>
        <h1>Welcome to Our Site</h1>
        <p>
          We are dedicated to providing support and assistance to students in
          resolving their personal and school-related psychological challenges.
          Our team is prepared to offer guidance and solutions to help students
          navigate through their difficulties and enhance their overall
          well-being. Whether it's addressing stress, anxiety, academic
          pressures, or other psychological concerns, we are here to lend a
          helping hand. Together, we can work towards creating a positive and
          nurturing environment for students to thrive in their personal and
          academic lives.
        </p>
      </div>
      <div className={style.services}>
        <h1>Services</h1>
        <p>
          At our Psychological Support Office, we are committed to providing
          effective treatments to help you transform unhelpful patterns of
          beliefs, thinking, feelings, and behaviors. Our dedicated team of
          professionals is here to support you in addressing and overcoming the
          psychological challenges you may be facing during your university
          journey. Whether it's managing stress, improving mental well-being,
          developing coping strategies, or enhancing personal growth, our
          treatments are tailored to meet your specific needs. We believe in
          empowering you to make positive changes and thrive academically and
          personally.
        </p>
      </div>
      
    </div>
  );
}

export default Home;