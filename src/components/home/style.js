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

  /* Hero Overlay */
  .overlay {
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    position: relative;
    padding: 0 20px;
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
  }
  .social-img img:hover {
    transform: scale(1.1);
  }

  .logo img {
    width: 70px;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .title {
    font-size: 70px;
    letter-spacing: 3px;
    margin: 0;
    padding: 0;
  }

  .desc {
    font-size: 18px;
    margin-top: 15px;
    max-width: 600px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }


  /* Slogan Section */
  .slogan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    padding: 60px 100px;
    background: #fff;
  }

  .slogan-content {
    flex: 1;
    font-size: 30px;
    font-style: italic;
    color: #0f3d2e;
    font-family: "Georgia", serif;
    line-height: 1.5;
  }

  .slogan-video {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slogan-video video {
    width: 100%;
    max-width: 500px;
    border: 10px solid #d4a15e;
    border-radius: 4px;
    object-fit: cover;
  }

  .slogan-2 {
    font-size: 25px;
    color: wheat;
    background-color: #d4a15e;
    padding: 50px 150px;
    text-align: center;
  }

  .connect-us-heading {
    text-align: center;
    padding: 40px 20px;
    h1 {
      font-size: 35px;
      color: #fff;
      font-family: "TAN Meringue", serif;
    }
    p {
      color: #fff;
      font-size: 18px;
      max-width: 900px;
      margin: 20px auto;
    }
  }

  .contact-btn {
    background-color: #d4a15e;
    width: 150px;
    border-radius: 20px;
    margin: auto;
    padding: 10px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

  .connect-us-content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .connect-us-content div {
    flex: 1;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 30px;
  }

  .connect-us-content div:nth-child(1) {
    background: linear-gradient(135deg, #8b5e3c, #d2b48c);
  }
  .connect-us-content div:nth-child(2) {
    background: linear-gradient(135deg, #a97142, #e0c097);
  }
  .connect-us-content div:nth-child(3) {
    background: linear-gradient(135deg, #6f4e37, #cbb994);
  }

  .connect-us-content .number {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #fff8e7;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  }

  .connect-us-content p {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 0;
  }

  .why-choose-us {
    text-align: center;
    padding: 60px 20px;
    background: #fdf3e7;
  }

  .why-choose-us h1 {
    font-size: 50px;
    margin-bottom: 40px;
    color: #1b3d2f;
    font-weight: bold;
    font-family: "TAN Meringue", serif;
  }

  .why-choose-us-grid {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .why-card {
    background: #fff;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .why-card:hover {
    transform: translateY(-10px);
  }

  .why-card .icon {
    font-size: 36px;
    color: #d4a15e;
    margin-bottom: 10px;
  }

  .why-card h3 {
    font-size: 16px;
    color: #1b3d2f;
    font-weight: bold;
  }

  /* ============================================
     RESPONSIVE FIXES FOR HERO CENTERING
     ============================================ */

  @media (max-width: 992px) {
    .title {
      font-size: 50px;
    }
    .desc {
      font-size: 16px;
    }
    .slogan {
      flex-direction: column;
      padding: 40px 30px;
      text-align: center;
    }
    .slogan-content {
      font-size: 24px;
    }
    .slogan-2 {
      padding: 40px 60px;
      font-size: 20px;
    }
    .connect-us-heading p {
      padding: 0 40px;
      font-size: 16px;
    }
  }

  /* TABLET FIX */
  @media (max-width: 768px) {
    .overlay {
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0 15px;
    }

    .title {
      font-size: 36px;
    }
    .desc {
      font-size: 14px;
    }
    .slogan-content {
      font-size: 20px;
    }
    .slogan-2 {
      font-size: 18px;
      padding: 30px 30px;
    }
    .connect-us-content {
      flex-direction: column;
    }
    .connect-us-content div {
      width: 100%;
      min-width: unset;
    }
    .why-card {
      width: 160px;
      height: 160px;
    }
    .why-card h3 {
      font-size: 14px;
    }
  }

  /* MOBILE FIX */
  @media (max-width: 480px) {
    .overlay {
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0 10px;
    }

    .title {
      font-size: 28px;
      letter-spacing: 1px;
    }
    @media (max-width: 480px) {
  .desc {
    max-width: 90%;
    overflow-wrap: break-word;
  }
}

    .slogan-content {
      font-size: 16px;
    }
    .slogan-2 {
      font-size: 16px;
      padding: 20px;
    }
    .connect-us-heading h1 {
      font-size: 24px;
    }
    .connect-us-heading p {
      font-size: 14px;
      padding: 0 10px;
    }
    .contact-btn {
      width: 120px;
      padding: 8px;
    }
    .connect-us-content .number {
      font-size: 36px;
    }
    .connect-us-content p {
      font-size: 14px;
    }
    .why-card {
      width: 140px;
      height: 140px;
    }
  }
`;

export default Wrapper;
