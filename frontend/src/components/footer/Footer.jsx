import React from 'react'
import style from './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    // <div>
      
    <div className="box-container">
        <div className="box">
            <h3>quick links</h3>
            <Link to=""><i className="fas fa-angle-right "> </i>about</Link>
            <Link to="/"><i className="fas fa-angle-right "> </i>home</Link>
            <Link to=""><i className="fas fa-angle-right "> </i>package</Link>
            <Link to=""><i className="fas fa-angle-right "> </i>book</Link>


        </div>
        <div className="box">
            <h3>extra links</h3>
            <Link to="#"><i className="fas fa-angle-right "> </i>ask questions</Link>
            <Link to="#"><i className="fas fa-angle-right "> </i>about us</Link>
            <Link to="#"><i className="fas fa-angle-right "> </i>privacy policy </Link>
            <Link to="#"><i className="fas fa-angle-right "> </i>terms of use</Link>
            

        </div>
        <div className="box">
            <h3>contact links</h3>
            <Link to="#"><i className="fas fa-angle-right "> </i> +251-234-234-234 </Link>
            <Link to="#"><i className="fas fa-angle-right "> </i>  </Link>
            <Link to="#"><i className="fas fa-angle-right "> </i> swegb@gmail.com </Link>
            <Link to="#"><i className="fas fa-angle-right "> </i> addis ababa, ethiopia- 34403</Link>
            

        </div>
        <div className="box">
            <h3>contact links</h3>
            <Link to="#"><i className="fab fa-facebook "> </i> facebook </Link>
            <Link to="#"><i className="fab fa-instagram "> </i> twitter </Link>
            <Link to="#"><i className="fab fa-twitter "> </i> instagram </Link>
            <Link to="#"><i className="fab fa-linkedin "> </i> linkedin </Link>

    </div>
    <div className="credit">© 2022 <span>Airbnb</span> , Inc</div>


    </div>
    // </div>
  )
}

export default Footer
