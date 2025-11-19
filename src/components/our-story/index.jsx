import React from "react";
import Wrapper from "./style";
import profile from "../images/person_16dp_0B2239_FILL0_wght400_GRAD0_opsz20.png";

const OurStory = () => {
  return (
    <Wrapper>
      {/* Heading */}
      <div className="heading">
        <h1>Our Story</h1>
        <p className="subtitle">
          A Journey of Heritage, Artistry, and Timeless Craftsmanship
        </p>
      </div>

      {/* Timeline container */}
      <div className="timeline">
        {/* Part 1 */}
        <div className="story-block fade-left">
          <div className="story-date">~125 Years Ago</div>
          <img src="Nanaji Ustaad Mali Ram Ji.jpeg" alt="Mali Ram ji" />
          <div className="story-content">
            <h3>A Legacy in Stone</h3>
            <p>
              The art of stone carving has been the very essence of our family for over a century, rooted in a tradition of meticulous craftsmanship and an unwavering focus on quality, not quantity. Our story begins approximately 125 years ago with our great-grandfather, Ustaad Late Mali Ram Ji Gautam, a true master craftsman whose legacy laid the foundation for everything we do. His exceptional skill and artistry earned him the prestigious role of creating intricate sculptures and statues for the royal class. Ustaad Mali Ram Ji’s masterful work stands as a testament to his talent, with his pieces adorning royal residences, temples, and landmarks across India, each one a unique work of art born from passion and precision.
            </p>
          </div>
        </div>

        {/* Part 2 */}
        <div className="story-block reverse fade-right">
          <div className="story-date">~75 Years Ago</div>
          <img src='Suraj ram ji 2.png' alt="Suraj Ram ji" />
          <div className="story-content">
            <h3>The Vision of Gautam Stone Art</h3>
            <p>
              Ustaad Mali Ram Ji's artistic legacy was lovingly carried forward by his son, Late Suraj Ram Ji Gautam. He dedicated his life to the craft, not just continuing his father's work but elevating it to new heights of excellence with the help of his family. Suraj Ram Ji’s unwavering determination and hard work refined our family's craft, ensuring that the reputation for unparalleled quality was maintained. It was his vision and tireless efforts that prepared the ground for the future, preserving the artistry and integrity of our work for the next generation.
            </p>
          </div>
        </div>

        {/* Part 3 */}
        <div className="story-block fade-up">
          <div className="story-date">Today</div>
          <img src="\Sanjay-Gautam-img.png" alt="Sanjay Gautam ji" />
          <div className="story-content">
            <h3>Modern Legacy</h3>
            <p>
              This timeless tradition was then elevated and transformed into the enterprise we know today. Gautam Stone Art was founded by his son, Sanjay Ji Gautam. He not only upholds this rich heritage but also brings a modern vision to the craft, ensuring our artistic creations continue to inspire. With the support of his entire family, he has turned a family legacy into a thriving venture, built on the principle that true art is born from dedication and an uncompromising commitment to quality.
            </p>
          </div>
        </div>
        <img src="collage.png" alt="" />
      </div>
    </Wrapper>
  );
};

export default OurStory;
