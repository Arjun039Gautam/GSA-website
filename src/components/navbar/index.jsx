import React, { useState, useEffect } from "react";
import Wrapper from "./style";
import logo from "../images/for now final logo.png";
import { NavLink, useLocation } from "react-router-dom"; // 👈 Import useLocation
import QuoteModal from "../get-quote/QuoteModal.jsx";
import { FiMenu, FiX } from "react-icons/fi";

// List of all collection paths for easy checking
const COLLECTION_PATHS = [
    "/god-collection",
    "/lion-collection",
    "/horse-collection",
    "/cow-collection",
    "/elephant-collection",
    "/dog-collection",
    "/modern-art-collection",
    "/panel-collection",
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation(); // 👈 Use the location hook

  /* Check if any collection route is currently active */
  const isCollectionActive = COLLECTION_PATHS.some(path => 
    location.pathname.startsWith(path)
  );
    
  // ... (rest of the state and helper functions remain the same) ...

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(false);
  };
  
  useEffect(() => {
    const closeMenu = (e) => {
      if (
        isMobileMenuOpen &&
        !e.target.closest(".nav-links") &&
        !e.target.closest(".hamburger")
      ) {
        closeAllMenus();
      }
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, [isMobileMenuOpen]); 

  const closeMenuOnClick = () => {
    closeAllMenus();
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setOpenDropdown(false);
    }
  };

  const toggleDropdown = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setOpenDropdown(!openDropdown);
  };


  return (
    <Wrapper>
      {/* ... (Menu Overlay, Logo, Hamburger) ... */}
      <div
        className={`menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
      ></div>

      <div className="logo">
        <img src={logo} alt="GSA Logo" />
        <h2>Gautam Stone Art</h2>
      </div>

      <div
        className="hamburger"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>
      
      {/* NAV LINKS */}
      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            end // IMPORTANT: ensures HOME is only active at the root path "/"
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

        {/* DROPDOWN - Apply 'active' class manually based on current path */}
        <li
          className={`dropdown ${isCollectionActive ? "active" : ""}`} // 👈 Apply active class here
          onClick={toggleDropdown}
        >
          <span className={isCollectionActive ? "active" : ""}>COLLECTIONS ▾</span> {/* 👈 And here for span style */}
          <ul className={`dropdown-menu ${openDropdown ? "open" : ""}`}>
            {COLLECTION_PATHS.map((path) => (
              <li key={path}>
                <NavLink to={path} onClick={closeMenuOnClick}>
                  {path.replace("/", "").replace("-", " ").toUpperCase()}
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

        {/* ... (Mobile Quote Button, Desktop Quote Button, Modal) ... */}
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

      <button
        className="getquote desktop-quote"
        onClick={() => setIsModalOpen(true)}
      >
        Get a quote
      </button>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Wrapper>
  );
};

export default Navbar;