import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Wrapper from "./style";
import Gallery from "../gallery";
import About from "../about";
import { FaCheckCircle } from "react-icons/fa";
import { GiStakeHammer } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaTruck } from "react-icons/fa6";
import { FaBoxesStacked } from "react-icons/fa6";
import instaImg from "../images/instagram (1).png";
import fbImg from "../images/facebook.png";
import QuoteModal from "../get-quote/QuoteModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");

  // Track which sections have animated
  const [animatedSections, setAnimatedSections] = useState({});

  // Scroll direction detection
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if (scrollY > lastScrollY) setScrollDir("down");
      else if (scrollY < lastScrollY) setScrollDir("up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  // Helper to animate only once per section
  const handleInView = (sectionName) => {
    if (!animatedSections[sectionName] && scrollDir === "down") {
      setAnimatedSections((prev) => ({ ...prev, [sectionName]: true }));
    }
  };

  return (
    <Wrapper>
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="hero section gsa main.mp4" type="video/mp4" />
      </video>

      {/* Hero Section */}
      <motion.div
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="title"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          GAUTAM STONE ART
        </motion.h1>

        <motion.p
          className="desc"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We make all types of handicraft items in marble and specialize in animal statues.
        </motion.p>

        <motion.div
          className="social-img"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/gautamstoneart" target="_blank">
            <img src={instaImg} alt="Instagram" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/gautamstoneart" target="_blank">
            <img src={fbImg} alt="Facebook" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={() => handleInView("about")}
        animate={animatedSections["about"] ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={() => handleInView("gallery")}
        animate={animatedSections["gallery"] ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Gallery />
      </motion.div>

      {/* Slogan Section */}
      <motion.div
        className="slogan"
        initial={{ opacity: 0, y: 50 }}
        whileInView={() => handleInView("slogan")}
        animate={animatedSections["slogan"] ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="slogan-content">
          <p>
            "We focus on creating less, but ensuring that every single piece
            stands as a masterpiece of quality and craftsmanship."
          </p>
        </div>
        <motion.div
          className="slogan-video"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <video
            src="web-short-video-2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
      </motion.div>

      {/* Connect Us */}
      <motion.div
        className="connect-us"
        initial={{ opacity: 0 }}
        whileInView={() => handleInView("connect")}
        animate={animatedSections["connect"] ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="connect-us-heading">
          <h1>Come & Discuss</h1>
          <p>Come & Discuss, where artisans craft dreams into reality...</p>
          <motion.div
            className="contact-btn"
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsModalOpen(true)}
          >
            Contact Us
          </motion.div>
        </div>

        <div className="connect-us-content">
          <motion.div
            whileInView={() => handleInView("glorious")}
            animate={animatedSections["glorious"] ? { scale: [0.8, 1] } : {}}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="number"><CountUp start={0} end={100} duration={5} />+</span>
            <p>GLORIOUS YEARS</p>
          </motion.div>
          <motion.div
            whileInView={() => handleInView("artefacts")}
            animate={animatedSections["artefacts"] ? { scale: [0.8, 1] } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="number"><CountUp start={0} end={1100} duration={5} />+</span>
            <p>INDIAN ARTEFACTS</p>
          </motion.div>
          <motion.div
            whileInView={() => handleInView("artisans")}
            animate={animatedSections["artisans"] ? { scale: [0.8, 1] } : {}}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="number"><CountUp start={0} end={10} duration={5} />+</span>
            <p>PASSIONATE ARTISANS</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h1>Why Choose Us</h1>
        <motion.div className="why-choose-us-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={() => handleInView("why")}
          animate={animatedSections["why"] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {[
            { icon: <FaCheckCircle size={50} />, text: "High Quality" },
            { icon: <GiStakeHammer size={50} />, text: "Customizable" },
            { icon: <TfiHeadphoneAlt size={50} />, text: "Quick Support" },
            { icon: <FaTruck size={50} />, text: "Fast Delivery" },
            { icon: <FaBoxesStacked size={50} />, text: "Quality Collection" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="why-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={() => handleInView(`why-card-${i}`)}
              animate={animatedSections[`why-card-${i}`] ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              viewport={{ once: true }}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.text}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Wrapper>
  );
};

export default Home;
