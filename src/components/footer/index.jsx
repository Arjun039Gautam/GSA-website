import React from "react";
import Wrapper from "./style";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        {/* Left section - Logo + About */}
        <div className="footer-section about animate">
          <img src='https://res.cloudinary.com/dancodp27/image/upload/f_auto,q_auto/v1764750124/for_now_final_logo_an7xps.png' alt="Logo" className="footer-logo" />
          <h2>Gautam Stone Art</h2>
          <p>
            125 years of artistry, carrying forward a timeless vision with modern elegance.
          </p>
        </div>

        {/* Middle section - Navigation */}
        <div className="footer-section nav animate">
          <h3>Browse</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/contact">Reach Us</Link></li>
          </ul>
        </div>

        {/* Middle section - Collections */}
        <div className="footer-section collections animate">
          <h3>Collections</h3>
          <ul>
            <li><Link to="/god-collection">God Idols</Link></li>
            <li><Link to="/lion-collection">Lion Statues</Link></li>
            <li><Link to="/horse-collection">Horse Statues</Link></li>
            <li><Link to="/cow-collection">Cow Statues</Link></li>
            <li><Link to="/elephant-collection">Elephant Statues</Link></li>
            <li><Link to="/dog-collection">Dog Statues</Link></li>
            {/* <li><Link to="/tortoise-collection">Tortoise Statues</Link></li> */}
            <li><Link to="/modern-art-collection">Modern Art</Link></li>
            <li><Link to="/panel-collection">Wall Panels</Link></li>
            {/* <li><Link to="/master-collection">Master Piece</Link></li> */}
            {/* <li><Link to="/creative-collection">Creative Designs</Link></li> */}
          </ul>
        </div>

        {/* Right section - Contact */}
        <div className="footer-section contact animate">
          <h3>Keep in Touch</h3>
          <div className="contact-item">
            <HiMail size={22}/> 
            <a href="mailto:gautamstoneart5876@gmail.com">gautamstoneart5876@gmail.com</a>
          </div>
          <div className="contact-item">
            <IoMdCall size={22}/> 
            <a href="tel:+919829058944">+91 9829058944</a>, 
            <a href="tel:+919521465844">+91 9521465844</a>
          </div>
          <div className="contact-item">
            <IoLocation size={22}/> Jaipur, Rajasthan 302001
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/gautamstoneart" target="_blank" rel="noopener noreferrer">
              <img src='https://res.cloudinary.com/dancodp27/image/upload/f_auto,q_auto/v1764750100/facebook_inv66f.png' alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/gautamstoneart" target="_blank" rel="noopener noreferrer">
              <img src='https://res.cloudinary.com/dancodp27/image/upload/f_auto,q_auto/v1764750123/instagram_1_mg3hjm.png' alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Gautam Stone Art | All Rights Reserved</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
