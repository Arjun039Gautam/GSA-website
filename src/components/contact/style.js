import styled from "styled-components";

const Wrapper = styled.section`
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #b3aca6ff, #f7f5f3);
  padding: 100px 20px 80px 20px;

  .contact-wrapper {
    max-width: 1100px;
    margin: auto;
    text-align: center;
  }

  h1 {
    font-size: 42px;
    margin-bottom: 10px;
    color: #3e2c20;
    font-weight: 700;
  }

  .subtitle {
    font-size: 16px;
    color: #6e5d4e;
    margin-bottom: 50px;
  }

  .contact-container {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  /* Left Side */
  .contact-info {
    flex: 1;
    background: linear-gradient(135deg, #6f4e37, #a87c5f);
    color: #fff;
    padding: 50px 40px;
    min-width: 300px;
    text-align: left;
  }

  .contact-info h2 {
    margin-bottom: 15px;
    font-size: 26px;
    font-weight: 600;
  }

  .contact-info p {
    margin-bottom: 25px;
    color: #f0e5d8;
  }

  .contact-info ul {
    list-style: none;
    padding: 0;
    margin: 0 0 30px;
  }

  .contact-info li {
    margin-bottom: 18px;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .contact-info li a {
    color: #fff;
    text-decoration: underline;
  }

  /* Social icons */
  .social-icons {
    margin-top: 20px;
    display: flex;
    gap: 20px;
  }
  .social-icons a {
    color: #fff;
  }

  .social-icons a:hover {
    transform: scale(1.2);
  }

  /* Right Side */
  .contact-form {
    flex: 2;
    padding: 50px 40px;
    text-align: left;
    min-width: 350px;
  }

  .form-row {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .form-group {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    margin-bottom: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #3e2c20;
  }

  .form-group input,
  .form-group textarea {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    transition: all 0.3s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #a87c5f;
    box-shadow: 0px 0px 6px rgba(168, 124, 95, 0.4);
  }

  .form-group textarea {
    height: 120px;
    resize: none;
  }

  .radio-group {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .radio-group label {
    font-size: 14px;
    color: #555;
  }

  /* Button */
  button {
    background: #6f4e37;
    color: white;
    padding: 14px 28px;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 20px;
  }

  button:hover {
    background: #d4a15e;
    transform: translateY(-3px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }

  .map-container {
    margin-top: 20px;
    width: 100%;
  }

  .map-container iframe {
    width: 100%;
    height: 200px;
    border: none;
    border-radius: 10px;
  }
  
  .instagram{
    img{
      max-width: 40px;
      height: auto;
    }
  }
  .facebook{
    img{
      max-width: 38px;
      height: auto;
    }
  }

  /* Tablet-specific Styles (769px to 1024px) */
  @media (min-width: 769px) and (max-width: 1024px) {
    .contact-container {
      /* Keep the flex layout but add some padding */
      padding: 20px;
    }
    
    .contact-info,
    .contact-form {
      padding: 30px; /* Reduce padding to make the content fit better */
    }

    h1 {
      font-size: 38px;
    }
  }

  /* Mobile-specific Styles (Up to 768px) */
  @media (max-width: 768px) {
    .contact-container {
      flex-direction: column;
      flex-wrap: nowrap; /* Prevent wrapping on the vertical stack */
    }

    .contact-info,
    .contact-form {
      min-width: auto;
      padding: 30px 20px;
    }

    h1 {
      font-size: 32px;
    }

    .subtitle {
      margin-bottom: 30px;
    }

    .form-row {
      flex-direction: column;
      gap: 0;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 480px) {
    .contact-wrapper {
      padding: 0 10px;
    }
    
    .contact-info,
    .contact-form {
      padding: 20px 15px;
    }
    
    .contact-info li {
      font-size: 14px;
    }
  }

  button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

button.btn-loading {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 3px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

`;

export default Wrapper;