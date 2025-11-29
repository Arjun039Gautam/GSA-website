import styled from "styled-components";

const Wrapper = styled.nav`
  --nav-h: 86px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-h);
  padding: 0 clamp(16px, 5vw, 40px);
  z-index: 1000;

  background: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* --- LOGO --- */
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  .logo img {
    width: 80px;
    transition: transform 0.3s ease;
  }
  .logo img:hover {
    transform: scale(1.07);
  }
  .logo h2 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #ffffff;
  }

  /* --- NAV LINKS (Desktop) --- */
  .nav-links {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0 auto;
    gap: 22px;
    padding: 10px 26px;
    border-radius: 42px;
    background: #1a1a1a;
    transition: all 0.4s ease;
  }

  .nav-links li a,
  .dropdown span {
    position: relative;
    text-decoration: none;
    color: #ffffff;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;
    padding: 5px 0;
  }

  .nav-links li a::after,
  .dropdown span::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background: #bfa181;
    transition: width 0.3s ease;
  }

  .nav-links li a:hover::after,
  .dropdown span:hover::after {
    width: 100%;
  }

  .nav-links li a.active {
    color: #bfa181;
  }
  .nav-links li a.active::after {
    width: 100%;
  }

  /* --- FIX FOR DROPDOWN ACTIVE STATE --- */
  .dropdown span.active {
    color: #bfa181; /* Apply active color when a sub-route is active */
  }
  .dropdown span.active::after {
    width: 100%; /* Apply underline when a sub-route is active */
  }

  /* --- BUTTON --- */
  .getquote {
    padding: 8px 20px;
    border-radius: 24px;
    border: 2px solid transparent;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    color: #ffffff;
    background: #bfa181;
    transition: all 0.3s ease;
  }
  .getquote:hover {
    background: #72604c;
    color: #0d0d0d;
    border-color: #bfa181;
  }

  .desktop-quote {
    display: block;
  }
  .mobile-quote {
    display: none;
  }

  /* --- DROPDOWN (Desktop) --- */
  .dropdown {
    position: relative;
  }

  .dropdown-menu {
    position: absolute;
    top: 40px;
    left: 0;
    min-width: 200px;
    background: #0d0d0d;
    border-radius: 10px;
    list-style: none;
    padding: 8px 0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);

    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .dropdown-menu.open {
    opacity: 1;
    transform: translateY(0);
    max-height: 600px;
  }

  .dropdown-menu li {
    padding: 10px 18px;
  }
  .dropdown-menu li a {
    color: #ffffff;
  }
  .dropdown-menu li a:hover {
    color: #bfa181;
  }

  /* --- HAMBURGER --- */
  .hamburger {
    display: none;
    color: #ffffff;
    cursor: pointer;
    z-index: 2001;
  }

  /* --- MOBILE OVERLAY EFFECT --- */
  .menu-overlay {
    display: none;
  }

  /* =======================================
     MOBILE STYLES (Modern Design)
     ======================================= */
  @media (max-width: 992px) {
    .hamburger {
      display: block;
    }

    /* Overlay effect */
    .menu-overlay {
      display: block;
      position: fixed;
      top: var(--nav-h);
      left: 0;
      width: 100vw;
      height: calc(100vh - var(--nav-h));
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(5px);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.35s ease;
      z-index: 100;
    }
    .menu-overlay.open {
      opacity: 1;
      pointer-events: all;
    }

    /* Mobile Nav Menu Container */
    .nav-links {
      position: fixed;
      top: var(--nav-h);
      right: 0;
      flex-direction: column;
      align-items: flex-start;
      background: #0d0d0d;
      width: 280px;
      height: calc(100vh - var(--nav-h));
      padding: 40px 25px;
      transform: translateX(100%);
      transition: transform 0.4s ease-in-out;
      border-radius: 0;
      z-index: 2000;
      box-shadow: -5px 0 15px rgba(0, 0, 0, 0.4);
      gap: 30px;
    }

    .nav-links.open {
      transform: translateX(0);
    }

    /* Mobile Nav Links */
    .nav-links li {
      width: 100%;
    }
    
    .nav-links li a {
        font-size: 1.1rem;
    }

    /* Mobile dropdown */
    .dropdown {
        width: 100%;
        padding-bottom: 0;
    }
    
    .dropdown span {
        font-size: 1.1rem;
        display: block;
    }
    
    /* FIX: Ensure dropdown menu is styled correctly for mobile */
    .dropdown-menu {
      position: static;
      background: transparent;
      box-shadow: none;
      padding: 0 0 0 15px;
      width: auto;
      min-width: auto;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease-in-out;
      border-radius: 0;
    }

    .dropdown-menu.open {
        max-height: 500px;
        opacity: 1;
        transform: none;
    }

    .dropdown-menu li {
        padding: 8px 0;
    }

    .dropdown-menu li a {
        font-size: 1rem;
        &:hover {
            color: #bfa181;
        }
    }

    /* Remove the bottom line effect on mobile for better touch experience */
    .nav-links li a::after,
    .dropdown span::after {
        display: none;
    }
    
    .nav-links li a.active,
    .dropdown span.active { /* Apply active color to dropdown span on mobile */
        color: #bfa181;
    }

    /* Button */
    .desktop-quote {
      display: none;
    }
    .mobile-quote {
      display: block;
      margin-top: 20px;
      width: 100%;
    }
    .mobile-quote .getquote {
      width: 100%;
      text-align: center;
    }
  }
`;

export default Wrapper;