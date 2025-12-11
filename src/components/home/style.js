import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  overflow: hidden;

  /* Background Video */
  .bg-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  }

  /* Overlay Hero */
  .overlay {
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(6px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    position: relative;
    /* padding: 0 20px; */
  }

  .title {
    font-size: 70px;
    letter-spacing: 3px;
    margin: 0;
    opacity: 0;
    transform: scale(0.9);
    animation: fadeInScale 1s forwards 0.5s;
    will-change: opacity, transform;
  }

  .desc {
    font-size: 18px;  
    max-width: 600px;
    margin: 15px auto 0;
    opacity: 0;
    animation: fadeIn 1s forwards 0.8s;
    will-change: opacity;
  }

  .social-img {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    gap: 10px;
  }

  .social-img img {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: transform 0.3s ease;
    will-change: transform;
  }
  .social-img img:hover {
    transform: scale(1.2);
  }

  /* Sections Animation */
  .section {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.6s ease-out;
    will-change: opacity, transform;
  }
  .section.animate {
    opacity: 1;
    transform: translateY(0);
  }

  /* Slogan Section */
  .slogan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    padding: 60px 100px;
    background: #fff;
    color: #0f3d2e;
    flex-wrap: wrap;
  }

  .slogan-content {
    flex: 1;
    font-size: 30px;
    font-style: italic;
    font-family: "Georgia", serif;
    line-height: 1.5;
    min-width: 280px;
  }

  .slogan-video {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 280px;
  }

  .slogan-video video {
    width: 100%;
    max-width: 500px;
    border: 10px solid #d4a15e;
    border-radius: 4px;
    object-fit: cover;
  }

  /* Connect Us */
  .connect-us-heading {
    text-align: center;
    padding: 40px 20px;
  }
  .connect-us-heading h1 {
    font-size: 35px;
  }
  .connect-us-heading p {
    font-size: 18px;
    max-width: 900px;
    margin: 20px auto;
  }
  .contact-btn {
    background-color: #d4a15e;
    width: 150px;
    border-radius: 20px;
    margin: 20px auto;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s ease;
    will-change: transform;
  }
  .contact-btn:hover {
    transform: scale(1.1);
  }

  .connect-us-content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
  }
  .connect-us-content div {
    flex: 1;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    background: linear-gradient(135deg, #8b5e3c, #d2b48c);
    transition: transform 0.3s ease;
    will-change: transform;
  }
  .connect-us-content div:hover {
    transform: translateY(-10px);
  }
  .connect-us-content .number {
    font-size: 50px;
    margin-bottom: 10px;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
  }
  .connect-us-content p {
    font-size: 18px;
    margin: 0;
  }

  /* Why Choose Us */
  .why-choose-us {
    text-align: center;
    padding: 60px 20px;
    background: #fdf3e7;
  }
  .why-choose-us h1 {
    font-size: 50px;
    margin-bottom: 40px;
  }
  .why-choose-us-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
  }
  .why-card {
    width: 180px;
    height: 180px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    will-change: transform;
  }
  .why-card:hover {
    transform: scale(1.05) rotate(2deg);
  }
  .why-card .icon {
    font-size: 40px;
    margin-bottom: 10px;
    color: #d4a15e;
  }
  .why-card h3 {
    font-size: 16px;
    font-weight: bold;
  }

  /* Animations */
  @keyframes fadeIn {
    to { opacity: 1; }
  }
  @keyframes fadeInScale {
    to { opacity: 1; transform: scale(1); }
  }

  /* Responsive */
  @media (max-width: 992px) {
    .slogan {
      padding: 40px 30px;
    }
    .slogan-content {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    .section { transition: all 0.5s ease-out; }
    .title { font-size: 36px; }
    .desc { font-size: 14px; }
    .slogan {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }
    .slogan-content { font-size: 20px; }
    .slogan-video { max-width: 100%; }
    .connect-us-content div { width: 100%; min-width: unset; }
  }

  @media (max-width: 480px) {
    .title { font-size: 28px; }
    .desc { font-size: 14px; max-width: 90%; }
    .slogan-content { font-size: 16px; }
    .slogan-video video { max-width: 100%; border-width: 6px; }
    .contact-btn { width: 120px; padding: 8px; }
    .connect-us-content .number { font-size: 36px; }
    .why-card { width: 140px; height: 140px; padding: 5px}
  }
`;

export default Wrapper;
