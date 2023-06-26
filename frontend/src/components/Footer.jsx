import React from 'react'
import './Footer.module.css'

function Footer() {
  return (
    <div className=''>
      
    <div className="box-container">
        <div className="box">
            <h3>quick links</h3>
            <a href=""><i class="fas fa-angle-right "> </i>home</a>
            <a href=""><i class="fas fa-angle-right "> </i>about</a>
            <a href=""><i class="fas fa-angle-right "> </i>package</a>
            <a href=""><i class="fas fa-angle-right "> </i>book</a>


        </div>
        <div className="box">
            <h3>extra links</h3>
            <a href="#"><i class="fas fa-angle-right "> </i>ask questions</a>
            <a href="#"><i class="fas fa-angle-right "> </i>about us</a>
            <a href="#"><i class="fas fa-angle-right "> </i>privacy policy </a>
            <a href="#"><i class="fas fa-angle-right "> </i>terms of use</a>
            

        </div>
        <div className="box">
            <h3>contact links</h3>
            <a href="#"><i class="fas fa-angle-right "> </i> +251-234-234-234 </a>
            <a href="#"><i class="fas fa-angle-right "> </i>  </a>
            <a href="#"><i class="fas fa-angle-right "> </i> swegb@gmail.com </a>
            <a href="#"><i class="fas fa-angle-right "> </i> addis ababa, ethiopia- 34403</a>
            

        </div>
        <div className="box">
            <h3>contact links</h3>
            <a href="#"><i class="fab fa-facebook "> </i> facebook </a>
            <a href="#"><i class="fab fa-instagram "> </i> twitter </a>
            <a href="#"><i class="fab fa-twitter "> </i> instagram </a>
            <a href="#"><i class="fab fa-linkedin "> </i> linkedin </a>

    </div>
    <div className="credit">© 2022 <span>Airbnb</span> , Inc</div>


    </div>
    </div>
  )
}

export default Footer
