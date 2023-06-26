import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Home.module.css'

import main_image from '../asset/brain original.jpg'

function Home() {
  return (
    <div className={style.home}>
      <div className={style.front}>
      <div className={style.image}>
        <img src={main_image} alt="calming-image" />
        
      </div>
      <div className={style.front_qoute}>
        <h1>What Lies Behind Your Outward Calm?
</h1>
<p>Discover mysteries of your inner self and find solution of your personal problems with the help of our psychologists.

</p>
      </div>
      </div>
    </div>
  )
}

export default Home
