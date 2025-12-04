import styled, { keyframes } from "styled-components";

/* Animations */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const Wrapper = styled.section`
  margin: 0;
  padding: 80px 20px;
  background: linear-gradient(135deg, #f5f1ec, #e9e4de);
  font-family: "Poppins", sans-serif;

  .heading {
    text-align: center;
    margin-bottom: 50px;
    animation: ${fadeUp} 1s ease forwards;
  }

  h1 {
    font-size: 50px;
    color: #6f4e37;
    font-family: "TAN Meringue", serif;
    margin-bottom: 10px;
    position: relative;
    display: inline-block;
  }

  h1::after {
    content: "";
    display: block;
    height: 4px;
    width: 60%;
    margin: 10px auto 0;
    background: linear-gradient(90deg, #6f4e37, #d4af37);
    border-radius: 2px;
  }

  .tagline {
    font-size: 18px;
    color: #555;
    margin-top: 10px;
    font-weight: 500;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 60px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 60px;
    animation: ${fadeUp} 1.2s ease forwards;
  }

  /* Images Grid */
  .aboutImg {
    position: relative;
    width: 420px;
    height: 420px;
    border-radius: 20px;
    overflow: hidden;
  }

  .img-grid {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .img-grid .img {
    position: absolute;
    width: 230px;
    height: 260px;
    object-fit: cover;
    border-radius: 18px;
    box-shadow: 0 12px 25px rgba(0,0,0,0.2);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  .img1 { top: 40px; left: 0; z-index: 1; }
  .img2 { top: 0; right: 10px; z-index: 2; }
  .img3 { bottom: 0; right: 40px; z-index: 3; }

  .img-grid .img:hover {
    transform: scale(1.1) translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.25);
    z-index: 5;
  }

  .written-content {
    max-width: 600px;
    padding: 25px;
    color: #5a4c2e;
    line-height: 1.8;
    font-size: 16px;
    text-align: justify;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    animation: ${fadeIn} 1.5s ease forwards;
    border: 2px solid rgba(212,175,55,0.5);
  }

  .highlight {
    color: #d4af37;
    font-weight: 600;
  }

  /* Features Row */
  .features {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }

  .feature-box {
    background: linear-gradient(135deg, #fff8f0, #f5e4d1);
    padding: 25px;
    border-radius: 20px;
    text-align: center;
    max-width: 280px;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
    transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.5s ease;
    animation: ${fadeUp} 1.6s ease forwards;
    cursor: pointer;
  }

  .feature-box:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 25px 50px rgba(0,0,0,0.25);
    background: linear-gradient(135deg, #f5e0c8, #d4af37);
    animation: ${float} 2s infinite;
  }

  .feature-box h3 {
    margin: 15px 0 8px;
    font-size: 18px;
    color: #6f4e37;
  }

  .feature-box p {
    font-size: 14px;
    color: #666;
  }

  /* CTA Button */
  .cta {
    text-align: center;
  }

  .explore-btn {
    background: linear-gradient(135deg, #6f4e37, #d4af37);
    color: white;
    padding: 14px 32px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }

  .explore-btn:hover {
    background: linear-gradient(135deg, #d4af37, #6f4e37);
    transform: scale(1.1);
    box-shadow: 0 15px 35px rgba(0,0,0,0.25);
  }

  /* Responsive */
  @media (max-width: 992px) {
    h1 { font-size: 42px; }
    .content { gap: 40px; }
    .aboutImg { width: 350px; height: 350px; }
    .img-grid .img { width: 180px; height: 210px; }
  }

  @media (max-width: 768px) {
    h1 { font-size: 36px; }
    .content { flex-direction: column; gap: 30px; }
    .aboutImg { width: 300px; height: 300px; }
    .img-grid .img { width: 160px; height: 190px; }
    .written-content { font-size: 15px; }
    .features { flex-direction: column; align-items: center; gap: 20px; }
  }

  @media (max-width: 480px) {
    h1 { font-size: 28px; }
    .aboutImg { width: 260px; height: 260px; }
    .img-grid .img { width: 140px; height: 170px; }
    .written-content { font-size: 14px; padding: 15px; }
    .features { gap: 15px; }
    .explore-btn { padding: 12px 28px; font-size: 15px; }
  }
`;

export default Wrapper;
