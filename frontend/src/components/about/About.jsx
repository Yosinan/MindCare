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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nisi aut quod sed, consequatur molestiae magnam itaque commodi, saepe veniam obcaecati? Earum distinctio tenetur, cupiditate harum tempore voluptatem cum eaque.</p>
        </div>
        <hr />
        <div className="box2">
          <div className="vision">
          <span><i class="far fa-sharp fa-regular fa-lightbulb-on fa-sm" style={{color: "#6c297f"}}></i></span> 
          <h2>Vision</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nulla veniam blanditiis! Repellendus, earum amet recusandae repudiandae quae molestiae assumenda, accusantium iusto sed corporis autem nesciunt commodi perferendis. Nobis, dolorem.</p>
          </div>
          <div className="mission">
          <span><i class=" far fa-sharp fa-regular fa-lightbulb-on fa-sm" style={{color: "#6c297f"}}></i></span> 
          <h2>Mission</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nulla veniam blanditiis! Repellendus, earum amet recusandae repudiandae quae molestiae assumenda, accusantium iusto sed corporis autem nesciunt commodi perferendis. Nobis, dolorem.</p>
          </div>
          <div className="moto">
          <span><i class="far fa-sharp fa-regular fa-lightbulb-on fa-sm" style={{color: "#6c297f"}}></i></span> 
          <h2>Moto</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nulla veniam blanditiis! Repellendus, earum amet recusandae repudiandae quae molestiae assumenda, accusantium iusto sed corporis autem nesciunt commodi perferendis. Nobis, dolorem.</p>
          </div>
        </div>
       </div>
       </div>
    </>
  );
}
