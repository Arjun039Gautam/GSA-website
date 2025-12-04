import React, { useState, useRef, useEffect } from "react";
import Wrapper from "./style";
import Gallery from "../gallery";
import About from "../about";
import QuoteModal from "../get-quote/QuoteModal";

// Lightweight Counter Component
const Counter = ({ end }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / 100);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 20);
    return () => clearInterval(interval);
  }, [end]);

  return <span>{count}+</span>;
};

// Custom Hook for Intersection Observer Animations
const useInViewAnimation = (ref, className = "animate") => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(className);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, className]);
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const sloganRef = useRef(null);
  const connectRef = useRef(null);
  const whyRef = useRef(null);

  useInViewAnimation(aboutRef);
  useInViewAnimation(galleryRef);
  useInViewAnimation(sloganRef);
  useInViewAnimation(connectRef);
  useInViewAnimation(whyRef);

  // Cloudinary optimization
  const optimize = (url) =>
    url.includes("/upload/")
      ? url.replace("/upload/", "/upload/f_auto,q_auto/")
      : url;

  return (
    <Wrapper>
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="bg-video">
        <source
          src={optimize(
            "https://res.cloudinary.com/dancodp27/video/upload/v1764852114/VN-final_dzwnxv.mp4"
          )}
          type="video/mp4"
        />
      </video>

      {/* Hero Section */}
      <div className="overlay">
        <h1 className="title">GAUTAM STONE ART</h1>
        <p className="desc">
          We make all types of handicraft items in marble and specialize in
          animal statues.
        </p>

        <div className="social-img">
          <a
            href="https://www.instagram.com/gautamstoneart"
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dancodp27/image/upload/f_auto,q_auto/v1764750123/instagram_1_mg3hjm.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/gautamstoneart"
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dancodp27/image/upload/f_auto,q_auto/v1764750100/facebook_inv66f.png"
              alt="Facebook"
            />
          </a>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="section about-section">
        <About />
      </div>

      {/* Gallery Section */}
      <div ref={galleryRef} className="section gallery-section">
        <Gallery />
      </div>

      {/* Slogan Section */}
      <div ref={sloganRef} className="section slogan">
        <div className="slogan-content">
          <p>
            "We focus on creating less, but ensuring that every single piece
            stands as a masterpiece of quality and craftsmanship."
          </p>
        </div>
        <div className="slogan-video">
          <video
            src={optimize(
              "https://res.cloudinary.com/dancodp27/video/upload/v1764582043/web-short-video-2_o3gmcc.mp4"
            )}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Connect Us */}
      <div ref={connectRef} className="section connect-us">
        <div className="connect-us-heading">
          <h1>Come & Discuss</h1>
          <p>Where artisans craft dreams into reality...</p>
          <div
            className="contact-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Contact Us
          </div>
        </div>
        <div className="connect-us-content">
          <div>
            <Counter end={100} />
            <p>GLORIOUS YEARS</p>
          </div>
          <div>
            <Counter end={1100} />
            <p>INDIAN ARTEFACTS</p>
          </div>
          <div>
            <Counter end={10} />
            <p>PASSIONATE ARTISANS</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div ref={whyRef} className="section why-choose-us">
        <h1>Why Choose Us</h1>
        <div className="why-choose-us-grid">
          {[
            { icon: "✔️", text: "High Quality" },
            { icon: "🔨", text: "Customizable" },
            { icon: "🎧", text: "Quick Support" },
            { icon: "🚚", text: "Fast Delivery" },
            { icon: "📦", text: "Quality Collection" }
          ].map((item, i) => (
            <div key={i} className="why-card">
              <div className="icon">{item.icon}</div>
              <h3>{item.text}</h3>
            </div>
          ))}
        </div>
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Wrapper>
  );
};

export default Home;
