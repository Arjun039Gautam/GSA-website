import React, { useState } from "react";
import Wrapper from "./style";
import logo from "../images/for now final logo.png";
import { NavLink } from "react-router-dom";
import QuoteModal from "../get-quote/QuoteModal.jsx";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Wrapper>
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="GSA Logo" />
          <h2>Gautam Stone Art</h2>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-story"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              OUR STORY
            </NavLink>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <span>COLLECTIONS ▾</span>
            <ul className={`dropdown-menu ${openDropdown ? "open" : ""}`}>
              <li><NavLink to="/god-collection">God Idols</NavLink></li>
              <li><NavLink to="/lion-collection">Lion Statues</NavLink></li>
              <li><NavLink to="/horse-collection">Horse Statues</NavLink></li>
              <li><NavLink to="/cow-collection">Cow Statues</NavLink></li>
              <li><NavLink to="/elephant-collection">Elephant Statues</NavLink></li>
              <li><NavLink to="/dog-collection">Dog Statues</NavLink></li>
              <li><NavLink to="/tortoise-collection">Tortoise Statues</NavLink></li>
              <li><NavLink to="/modern-art-collection">Modern Art</NavLink></li>
              <li><NavLink to="/panel-collection">Wall Panels</NavLink></li>
              <li><NavLink to="/creative-collection">Creative Designs</NavLink></li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              REACH US
            </NavLink>
          </li>

          {/* Mobile-only Quote Button */}
          <li className="mobile-quote">
            <button
              className="getquote"
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Get a quote
            </button>
          </li>
        </ul>

        {/* Desktop Quote Button */}
        <button
          className="getquote desktop-quote"
          onClick={() => {
            setIsModalOpen(true);
            setIsMobileMenuOpen(false);
          }}
        >
          Get a quote
        </button>
      </Wrapper>

      {/* Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
