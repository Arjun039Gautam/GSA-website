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
  .logo img:hover { transform: scale(1.07); }
  .logo h2 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #ffffff;
  }

  /* --- NAV LINKS --- */
  .nav-links {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0 auto;
    gap: 22px;
    padding: 10px 26px;
    border-radius: 42px;
    background: #1a1a1a;
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
  }

  /* --- Underline animation --- */
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

  .desktop-quote { display: block; }
  .mobile-quote { display: none; }

  /* --- DROPDOWN --- */
  .dropdown { position: relative; }
  .dropdown-menu {
    position: absolute;
    top: 40px;
    left: 0;
    width: 200px;
    background: #0d0d0d;
    border-radius: 10px;
    list-style: none;
    padding: 8px 0;
    box-shadow: 0 8px 20px rgba(0,0,0,.5);

    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
    overflow: hidden;
    transition: all .3s ease;
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
  }

  /* --- RESPONSIVE --- */
  @media (max-width: 992px) {
    .hamburger { display: block; }

    .nav-links {
      position: fixed;
      top: var(--nav-h);
      right: 0;
      flex-direction: column;
      align-items: flex-start;
      background: #0d0d0d;
      width: 280px;
      height: calc(100vh - var(--nav-h));
      padding: 30px 20px;
      transform: translateX(100%);
      transition: transform .3s ease;
      border-radius: 0;
    }
    .nav-links.open { transform: translateX(0); }

    .dropdown-menu {
      position: static;
      background: transparent;
      box-shadow: none;
      padding-left: 10px;
    }

    .desktop-quote { display: none; }
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
