import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Home.module.css";
import Cards from "../components/Cards"
import Testimonails from "../components/Testimonails"

import main_image from "../asset/brain original.jpg";
import anxiety_image from "../asset/anxiety.jpg";
import family_consouling from "../asset/family conseling.jpg";
import indvidual from "../asset/individual.jpg";

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
        <hr/>

{/* <span className="line">______________<span className="dot">.</span>______________</span> */}
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
        <hr/>

        {/* <span className="line">______________<span className="dot">.</span>______________</span> */}

      </div>

      
        <Cards/>

        {/* <div className={style.services_containers}>
          <img src={family_consouling} alt="famil_consouling" />
          <h2>Family Counseling</h2>
          <p>
            Our family counseling services aim to provide support and guidance
            to students and their families, addressing challenges and improving
            communication within the family unit. We work collaboratively to
            foster healthy relationships and cultivate a nurturing environment
            for personal and academic growth.
          </p>
        </div>
        <div className={style.services_containers}>
          <img src={anxiety_image} alt="anxiety_image" />
          <h2>Depression and Anxiety Support</h2>
          <p>
            We understand that depression and anxiety can significantly impact a
            student's well-being and academic performance. Our counseling office
            offers professional support and evidence-based treatments to address
            these mental health concerns. Our team of experts is here to help
            students navigate through their emotions, develop coping strategies,
            and regain a sense of balance and fulfillment.
          </p>
        </div>
        <div className={style.services_containers}>
          <img src={indvidual} alt="indvidual" />
          <h2>Individual Counseling</h2>
          <p>
            Our individual counseling sessions are designed to support students
            facing emotional distress caused by various life circumstances such
            as divorce, failure, or the loss of a loved one. Our dedicated
            counselors provide a safe and confidential space for students to
            express their feelings, process their experiences, and work towards
            rebuilding their mental health and resilience.
          </p>
        </div> */}
        {/* <div className={style.services_side}>
          <h2>What We Do for You</h2>
          <hr/>

          <p>We will help you with your problems. We are here for you.</p>
        </div> */}
      
{/* <Testimonails/> */}


      {/* <div className={style.testimonails}>
        <h1>Testimonials</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          ipsum nulla, impedit id incidunt eius, modi ea est quas dicta fuga
          asperiores. Est voluptatum doloribus non voluptate quis eos quibusdam?
        </p>
      </div> */}


      
    </div>
  );
}

export default Home;
