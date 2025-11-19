import styled, { keyframes } from "styled-components";


/* Animations */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideLeft = keyframes`
  from { opacity: 0; transform: translateX(-60px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideRight = keyframes`
  from { opacity: 0; transform: translateX(60px); }
  to { opacity: 1; transform: translateX(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const Wrapper = styled.section`
  padding: 80px 5%;
  background: linear-gradient(135deg, #f8f8f8, #e9ecef);
  font-family: "Poppins", sans-serif;
  position: relative;
  color: #2d2d2d;

  /* Heading */
  .heading {
    text-align: center;
    margin-bottom: 60px;
    animation: ${fadeIn} 1.2s ease-in-out;
  }

  .heading h1 {
  font-family: 'Playfair Display', serif; /* Elegant serif font */
  font-size: 64px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 4px;
  background: linear-gradient(90deg, #c49b63, #8b5e3c);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glow 2.5s ease-in-out infinite alternate;
  position: relative;
  display: inline-block;
  padding: 12px 24px;
}
.heading h1 {
  text-shadow: 2px 2px 8px rgba(0,0,0,0.15);
  letter-spacing: 5px;
}


  .subtitle {
    font-size: 1.2rem;
    color: #555;
    margin-top: 10px;
  }

  /* Timeline */
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 60px;
    position: relative;
  }

  /* Story blocks */
  .story-block {
    display: flex;
    align-items: center;
    gap: 50px;
    background: rgba(255, 255, 255, 0.85);
    padding: 25px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    animation: ${slideLeft} 1s ease forwards;
    position: relative;
  }

  .story-block.reverse {
    flex-direction: row-reverse;
    animation: ${slideRight} 1s ease forwards;
  }

  .story-block img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border: 6px solid #fff;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    animation: ${float} 4s ease-in-out infinite;
  }

  .story-content {
    flex: 1;
  }

  .story-content h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #8b5e3c;
  }

  .story-content p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #444;
  }

  /* Date bubble */
  .story-date {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    background: #8b5e3c;
    color: white;
    padding: 8px 16px;
    border-radius: 50px;
    font-weight: bold;
    font-size: 0.9rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  /* Responsive */
  @media (max-width: 992px) {
    .story-block {
      flex-direction: column;
      text-align: center;
    }
    .story-block.reverse {
      flex-direction: column;
    }
    .story-block img {
      width: 140px;
      height: 140px;
    }
  }
`;

export default Wrapper;
