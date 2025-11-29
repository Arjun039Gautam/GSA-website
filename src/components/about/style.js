import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0;
  padding: 80px 20px;
  background: linear-gradient(135deg, #f5f1ec, #e9e4de);
  font-family: "Poppins", sans-serif;

  .heading {
    text-align: center;
    margin-bottom: 40px;
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
  }

  .aboutImg {
  position: relative;
  width: 420px;
  height: 420px;
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
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  transition: transform 0.3s ease;
}

/* Main Image (bottom left) */
.img1 {
  top: 40px;
  left: 0;
  z-index: 1;
}

/* Second Image (top right) */
.img2 {
  top: 0;
  right: 10px;
  z-index: 2;
}

/* Third Image (bottom right) - overlapping */
.img3 {
  bottom: 0;
  right: 40px;
  z-index: 3;
}

/* Hover animations */
.img-grid .img:hover {
  transform: scale(1.06) translateY(-6px);
  z-index: 5;
}

/* Responsive */
@media (max-width: 768px) {
  .aboutImg {
    width: 300px;
    height: 300px;
  }

  .img-grid .img {
    width: 160px;
    height: 190px;
  }
}

@media (max-width: 480px) {
  .aboutImg {
    width: 260px;
    height: 260px;
  }

  .img-grid .img {
    width: 140px;
    height: 170px;
  }
}


  .written-content {
    max-width: 600px;
    padding: 20px;
    color: #5a4c2e;
    line-height: 1.8;
    font-size: 16px;
    text-align: justify;
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
    background: #fff;
    padding: 25px;
    border-radius: 16px;
    text-align: center;
    max-width: 280px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s;
  }

  .feature-box:hover {
    transform: translateY(-8px);
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

  /* CTA */
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
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  .explore-btn:hover {
    background: linear-gradient(135deg, #d4af37, #6f4e37);
    transform: scale(1.05);
  }

  /* Responsiveness */
  @media (max-width: 992px) {
    h1 {
      font-size: 42px;
    }
    .content {
      gap: 40px;
    }
    img {
      width: 320px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
    }
    .content {
      flex-direction: column;
      gap: 30px;
    }
    img {
      width: 100%;
      max-width: 300px;
    }
    .written-content {
      font-size: 15px;
    }
    .features {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 28px;
    }
    img {
      max-width: 250px;
    }
    .written-content {
      font-size: 14px;
    }
  }
`;

export default Wrapper;
