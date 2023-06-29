import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import anxiety_image from "../asset/anxiety.jpg";
import family_consouling from "../asset/family conseling.jpg";
import indvidual from "../asset/individual.jpg";

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={family_consouling}
              text='Our family counseling services aim to provide support and guidance
            to students and their families, addressing challenges and improving
            communication within the family unit. We work collaboratively to
            foster healthy relationships and cultivate a nurturing environment
            for personal and academic growth.'
              label='Family Counseling'
              path='/contacts'
            />
            <CardItem
              src={anxiety_image}
              text="We understand that depression and anxiety can significantly impact a
            student's well-being and academic performance. Our counseling office
            offers professional support and evidence-based treatments to address
            these mental health concerns. "
              label='Depression and Anxiety Support'
              path='/blog'
            />
            <CardItem
              src={indvidual}
              text=' Our individual counseling sessions are designed to support students
            facing emotional distress caused by various life circumstances such
            as divorce, failure, or the loss of a loved one. Our dedicated
            counselors provide a safe and confidential space for students to
            express their feelings and process their experiences.' 
              label='Individual Counseling'
              path='/exercise'
            />
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default Cards;