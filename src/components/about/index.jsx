import React from "react";
import Wrapper from "./style";
import factoryImg from "../images/factoryImg.jpeg"
import showroomImg from "../images/showroom1.jpg";
import workersImg from "../images/showroom2.jpg"; 
import { FaAward, FaPaintBrush, FaGlobe } from "react-icons/fa";

const About = () => {
  return (
    <Wrapper>
      <div className="heading">
        <h1>About Us</h1>
        <p className="tagline">Masters of Marble, Crafting Timeless Elegance</p>
      </div>

      <div className="content">
        {/* Left Image */}
        <div className="aboutImg">
          <div className="img-grid">
            <img src={factoryImg} alt="Factory" className="img img1" />
            <img src={showroomImg} alt="Showroom" className="img img2" />
            <img src={workersImg} alt="Workers" className="img img3" />
          </div>
        </div>

        {/* Right Text */}
        <div className="written-content">
          <p>
            For generations, <span className="highlight">Gautam Stone Art</span>{" "}
            has transformed raw stone into breathtaking works of art. Known as{" "}
            <span className="highlight">Ustaad</span> in animal sculptures, we
            bring life to every creation with unmatched detail and artistry.
          </p>
          <p>
            From majestic lions to modern art for home décor, every sculpture is
            a <span className="highlight">blend of tradition & modernity</span>,
            crafted to complement your space with timeless elegance.
          </p>
        </div>
      </div>

      {/* Features Row */}
      <div className="features">
        <div className="feature-box">
          <FaAward size={40} />
          <h3>Legacy of Excellence</h3>
          <p>Decades of mastery passed through generations.</p>
        </div>
        <div className="feature-box">
          <FaPaintBrush size={40} />
          <h3>Artistic Detailing</h3>
          <p>Every sculpture crafted with soul and precision.</p>
        </div>
        <div className="feature-box">
          <FaGlobe size={40} />
          <h3>Modern Designs</h3>
          <p>Blending tradition with global contemporary art.</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
