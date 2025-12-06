import styled, { keyframes } from "styled-components";

/* Animations */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Wrapper = styled.section`
  padding: 100px 5%;
  background: #fdfbf7; /* Very warmth off-white */
  font-family: "Poppins", sans-serif;
  overflow: hidden;

  /* --- Heading Section --- */
  .heading {
    text-align: center;
    margin-bottom: 70px;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  h1 {
    font-size: 3.5rem;
    color: #4a3b2a;
    font-family: "Playfair Display", serif; /* More classic serif */
    margin-bottom: 15px;
    letter-spacing: 1px;
  }

  .tagline {
    font-family: "Inter", sans-serif;
    font-size: 1.1rem;
    color: #8c7b6c;
    text-transform: uppercase;
    letter-spacing: 3px;
    position: relative;
    display: inline-block;
  }
  
  .tagline::after {
    content: "";
    display: block;
    width: 60px;
    height: 1px;
    background: #d4af37;
    margin: 15px auto 0;
  }

  /* --- Main Content Layout --- */
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto 100px;
  }

  /* --- Creative Image Composition --- */
  .aboutImg {
    position: relative;
    height: 550px;
    width: 100%;
    animation: ${fadeUp} 1s ease forwards;
  }

  .img-grid {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .img {
    position: absolute;
    object-fit: cover;
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
    transition: all 0.5s ease;
    filter: brightness(0.95);
  }

  .img:hover {
    z-index: 10;
    transform: scale(1.02);
    filter: brightness(1.05);
    box-shadow: 0 25px 50px rgba(0,0,0,0.2);
  }

  /* Main Large Image */
  .img1 {
    width: 65%;
    height: 85%;
    left: 0;
    top: 0;
    border-radius: 4px; /* Sharp classy corners or slight round */
    z-index: 1;
  }

  /* Secondary Tall Image */
  .img2 {
    width: 45%;
    height: 55%;
    right: 0;
    top: 10%;
    border-radius: 4px;
    z-index: 2;
    border: 8px solid #fdfbf7; /* Border matching bg to create separation */
  }

  /* Third Wide Image */
  .img3 {
    width: 55%;
    height: 40%;
    right: 5%;
    bottom: 0;
    border-radius: 4px;
    z-index: 3;
    border: 8px solid #fdfbf7;
  }

  /* Golden Frame Decoration */
  .aboutImg::before {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    width: 60%;
    height: 80%;
    border: 1px solid #d4af37;
    z-index: 0;
    opacity: 0.6;
  }

  /* --- Text Content --- */
  .written-content {
    animation: ${fadeIn} 1.2s ease forwards;
    padding-left: 20px;
    border-left: 1px solid #e0d8c3;
  }

  .written-content p {
    font-size: 1.15rem;
    color: #555;
    line-height: 1.9;
    margin-bottom: 30px;
    font-weight: 300;
  }

  .highlight {
    color: #d4af37;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    font-style: italic;
  }

  /* --- Features Section --- */
  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
    border-top: 1px solid rgba(0,0,0,0.05);
  }

  .feature-box {
    text-align: center;
    padding: 30px 20px;
    transition: transform 0.3s ease;
    animation: ${fadeUp} 1.4s ease forwards;
    background: transparent; /* No card bg */
  }

  .feature-box:hover {
    transform: translateY(-10px);
  }

  /* Icons */
  .feature-box svg {
    color: #d4af37;
    margin-bottom: 20px;
    filter: drop-shadow(0 5px 10px rgba(212, 175, 55, 0.2));
  }

  .feature-box h3 {
    font-family: "Playfair Display", serif;
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 12px;
  }

  .feature-box p {
    font-size: 0.95rem;
    color: #777;
    line-height: 1.6;
  }

  /* --- Button --- */
  .cta { margin-top: 40px; text-align: left; }
  
  .explore-btn {
    background: transparent;
    color: #d4af37;
    border: 1px solid #d4af37;
    padding: 12px 35px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .explore-btn:hover {
    background: #d4af37;
    color: #fff;
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
  }

  /* --- Responsive --- */
  @media (max-width: 1024px) {
    .content {
      grid-template-columns: 1fr;
      gap: 60px;
    }

    .aboutImg {
      height: 450px;
      max-width: 600px;
      margin: 0 auto;
    }

    .written-content {
      border-left: none;
      border-top: 1px solid #e0d8c3;
      padding-left: 0;
      padding-top: 40px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    
    .features {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .img1 { width: 80%; left: 10%; }
    .img2 { display: none; } /* Simplify for mobile */
    .img3 { width: 60%; right: 0; bottom: -20px; }
  }
`;

export default Wrapper;
