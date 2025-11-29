import React, { useState, useEffect } from "react";
import Wrapper from "./style";
import logo from "../images/for now final logo.png";
import { NavLink } from "react-router-dom";
import QuoteModal from "../get-quote/QuoteModal.jsx";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* Close mobile menu when clicking outside */
  useEffect(() => {
    const closeMenu = (e) => {
      if (
        !e.target.closest(".nav-links") &&
        !e.target.closest(".hamburger")
      ) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  /* Close menu on route change */
  const closeMenuOnClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(false);
  };

  return (
    <Wrapper>
      {/* Background overlay when menu is open */}
      <div
        className={`menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
      ></div>

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

      {/* NAV LINKS */}
      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            end
            onClick={closeMenuOnClick}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/our-story"
            onClick={closeMenuOnClick}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            OUR STORY
          </NavLink>
        </li>

        {/* DROPDOWN */}
        <li
          className="dropdown"
          onClick={() => setOpenDropdown(!openDropdown)}
        >
          <span>COLLECTIONS ▾</span>
          <ul className={`dropdown-menu ${openDropdown ? "open" : ""}`}>
            {[
              "god-collection",
              "lion-collection",
              "horse-collection",
              "cow-collection",
              "elephant-collection",
              "dog-collection",
              // "tortoise-collection",
              "modern-art-collection",
              "panel-collection",
              // "creative-collection",
            ].map((path) => (
              <li key={path}>
                <NavLink to={`/${path}`} onClick={closeMenuOnClick}>
                  {path.replace("-", " ").toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <NavLink
            to="/contact"
            onClick={closeMenuOnClick}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            REACH US
          </NavLink>
        </li>

        {/* MOBILE QUOTE BUTTON */}
        <li className="mobile-quote">
          <button
            className="getquote"
            onClick={() => {
              setIsModalOpen(true);
              closeMenuOnClick();
            }}
          >
            Get a quote
          </button>
        </li>
      </ul>

      {/* DESKTOP QUOTE BUTTON */}
      <button
        className="getquote desktop-quote"
        onClick={() => setIsModalOpen(true)}
      >
        Get a quote
      </button>

      {/* MODAL */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Wrapper>
  );
};

export default Navbar;
