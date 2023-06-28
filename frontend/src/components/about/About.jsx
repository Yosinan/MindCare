import React from 'react';
import './About.css'
import photo from './photo.jpg'
import image from './photo.jpg';
export default function About() {
  return (
    <>
    <div className="about">
      
      <div className="aboutTitles">
        <span className="aboutTitleLg">About</span>
      </div>
        <img className="aboutImg" src={photo} alt="" />
    </div>
    <div className='contain'>
    <div className='info'>
      <div className='words'>
      <h6>who we are </h6>
      <h2>Mental health is human right,not a privilage.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Libero consectetur ipsa repellat mollitia quod commodi cum eveniet eius quia accusantium magnam blanditiis iste atque veniam quisquam perspiciatis, error, earum est.</p>

      </div>
      <div>
         <img className='images' src={image} alt="" />
      </div>
      </div>

    </div>
        <div className='container'>
       <div className="containerbox">
        <div className="top">
          <h1>If you can laugh together,you can work together </h1>
          <p>At MindCare, we understand the power of fostering positive connections and building a supportive community. Our approach combines professionalism with a warm and friendly atmosphere, creating a safe space where students can feel comfortable, understood, and empowered. 
            Through laughter, shared experiences, and a collaborative spirit, we believe in creating a foundation of trust that strengthens the therapeutic relationship and promotes effective counseling outcomes. Together, we can navigate challenges, celebrate victories, and build a brighter future."</p>
        </div>
        <hr />
        <div className="box2">
          <div className="vision">
          <span><i class="far fa-sharp fa-regular fa-lightbulb-on fa-sm" style={{color: "#6c297f"}}></i></span> 
          <h2>Vision</h2>
          <p>Our vision is to be the premier destination for university students seeking guidance and support. 
            We envision a campus community that values and prioritizes mental health, where every student feels heard, supported, and equipped with the tools to thrive.
             Through our holistic approach, we aim to foster resilience, promote self-discovery, and inspire a lifelong commitment to well-being.</p>
          </div>
          <div className="mission">
          <span><i class=" far fa-sharp fa-regular fa-lightbulb-on fa-sm" style={{color: "#6c297f"}}></i></span> 
          <h2>Mission</h2>
          <p>Our mission is to provide comprehensive and compassionate support to university students, empowering 
            them to navigate life's challenges, cultivate personal growth, and enhance their overall well-being.
             We strive to create a nurturing and inclusive environment where students can flourish academically, 
             emotionally, and socially.</p>
          </div>
          <div className="moto">
          <span><i class="far fa-sharp fa-regular fa-lightbulb-on fa-sm" style={{color: "#6c297f"}}></i></span> 
          <h2>Moto</h2>
          <p>Empowering Minds, Transforming Lives." At our counseling office, we are driven by the belief that by empowering students to unlock their true potential and embrace personal growth, we can profoundly impact their lives.
             With compassion, expertise, and unwavering dedication, we are committed to empowering students to overcome challenges, cultivate resilience, and embark on a transformative journey towards success and fulfillment.</p>
          </div>
        </div>
       </div>
       </div>
    </>
  );
}
