import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.footer`
  background: linear-gradient(135deg, #1b0d0d, #4b2e2e);
  color: #f3f3f3;
  padding: 60px 20px 25px;
  font-family: "Poppins", sans-serif;

  .footer-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 35px;
    max-width: 1200px;
    margin: 0 auto;
    align-items: start;
  }

  .animate {
    animation: ${slideUp} 0.8s ease forwards;
  }

  .footer-section h2,
  .footer-section h3 {
    color: #fff;
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 18px;
  }

  .footer-section p,
  .footer-section a {
    font-size: 14px;
    line-height: 1.6;
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .footer-section a:hover {
    color: #ffb74d;
  }

  .footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-section ul li {
    margin: 6px 0;
    transition: color 0.3s ease;
  }

  .footer-section ul li:hover {
    color: #ffb74d;
  }

  .footer-logo {
    width: 100px;
    margin-bottom: 10px;
    border-radius: 8px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 8px 0;
    font-size: 14px;
  }

  .social-icons {
    margin-top: 15px;
    display: flex;
    gap: 14px;
  }

  .social-icons img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    background: #fff2;
    padding: 5px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .social-icons img:hover {
    transform: scale(1.15);
    box-shadow: 0 0 10px #ffb74d;
  }

  .footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #444;
    margin-top: 25px;
    font-size: 13px;
    color: #aaa;
  }

  /* 🌟 Tablet view */
  @media (max-width: 900px) {
    padding: 50px 25px 20px;

    .footer-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
      text-align: center;
    }

    .footer-section h2,
    .footer-section h3 {
      font-size: 16px;
    }

    .footer-section p,
    .footer-section a {
      font-size: 13px;
    }

    .about {
      grid-column: span 2;
    }

    .contact {
      grid-column: span 2;
    }

    .social-icons {
      justify-content: center;
    }
  }

  /* 🌟 Mobile view */
  @media (max-width: 600px) {
    padding: 40px 10px 15px;

    .footer-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      text-align: center;
    }

    .footer-section {
      max-width: 90%;
    }

    .footer-section h2,
    .footer-section h3 {
      font-size: 15px;
      margin-bottom: 8px;
    }

    .footer-section p,
    .footer-section a {
      font-size: 13px;
      line-height: 1.5;
    }

    .contact-item {
      justify-content: center;
      text-align: center;
      flex-wrap: wrap;
    }

    .social-icons {
      justify-content: center;
      margin-top: 10px;
    }

    /* ✅ Compact, centered Browse & Collections */
    .nav,
    .collections {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .nav ul,
    .collections ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px 20px;
      padding: 0;
      margin-top: 5px;
    }

    .nav ul li,
    .collections ul li {
      margin: 0;
      font-size: 13px;
      line-height: 1.4;
    }

    .footer-bottom {
      font-size: 12px;
      margin-top: 15px;
    }
  }
`;

export default Wrapper;
