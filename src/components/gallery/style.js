import styled from "styled-components";

const Wrapper = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  text-align: center;

  .gallery-title {
    font-size: 2.5rem;
    font-family: "Georgia", serif;
    margin-bottom: 10px;
    letter-spacing: 2px;
    color: #3b2f2f;
    animation: fadeInDown 1s ease;
  }

  .gallery-subtitle {
    font-size: 1rem;
    max-width: 600px;
    margin: 0 auto 40px;
    color: #6b5a5a;
    animation: fadeIn 1.2s ease;
  }

  .carousel-container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .swiper {
    padding-bottom: 50px; /* space for pagination dots */
  }

  .card {
    background: #fff;
    border-radius: 15px;
    border: 1px solid #e0e0e0;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .card:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  /* ✅ FIXED: Show full 1:1 image properly */
  .card-image-container {
    position: relative;
    aspect-ratio: 1 / 1; /* keeps perfect square shape */
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f8f8;
  }

  .card-image-container img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* show full image without crop */
    transition: transform 0.5s ease;
    border-radius: 10px;
  }

  .card:hover .card-image-container img {
    transform: scale(1.05); /* slight zoom on hover */
  }

  .card-content {
    padding: 15px;
    animation: fadeInUp 0.8s ease;
    flex-grow: 1;
  }

  .card h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #3b2f2f;
  }

  .card p {
    font-size: 0.9rem;
    color: #6b5a5a;
  }

  /* Swiper navigation buttons */
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 50%;
    transition: background 0.3s ease;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  /* Swiper pagination dots */
  .swiper-pagination-bullet {
    background: #6b5a5a;
    opacity: 0.7;
  }

  .swiper-pagination-bullet-active {
    background: #3b2f2f;
    opacity: 1;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Wrapper;
