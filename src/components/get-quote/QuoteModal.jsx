// QuoteModal.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbwoVQ7dFHkIvLNCCC-XBGhMjiDwg7odA32xEmv3fEemrvv3NmTAlC_axcIJz9Ehc2pZBg/exec";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalBox = styled.div`
  background: #fff;
  width: 500px;
  max-width: 90%;
  border-radius: 10px;
  padding: 25px;
  position: relative;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: bold;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input, textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    outline: none;
    font-size: 14px;
  }

  textarea {
    resize: none;
    height: 100px;
  }

  button {
    padding: 10px;
    border: none;
    background: linear-gradient(135deg, #f5a623, #ff6b6b);
    color: #fff;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  button:hover {
    background: linear-gradient(135deg, #ff6b6b, #f5a623);
  }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  /* Spinner */
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

  .close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 40px;
    cursor: pointer;
    color: #333;
    transition: color 0.3s ease;
  }

  .close-btn:hover {
    color: #f00;
  }
`;

const QuoteModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    setLoading(true);

    const payload = new URLSearchParams();
    payload.append("source", "Quote");
    payload.append("name", form.name.value);
    payload.append("email", form.email.value);
    payload.append("phone", form.phone.value);
    payload.append("subject", "Quote Request");
    payload.append("message", form.message.value);

    try {
      const res = await fetch(WEB_APP_URL, {
        method: "POST",
        body: payload,
      });

      const json = await res.json();

      if (json.status === "success") {
        toast.success("Quote request submitted!");
        form.reset();
        onClose();
      } else {
        toast.error("Server error! Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit form!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Backdrop>
      <ModalBox>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Gautam Stone Art</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email Address" required />
          <input name="phone" type="text" placeholder="Contact No." />
          <textarea name="message" placeholder="Message" required></textarea>

          <button type="submit" disabled={loading}>
            {loading ? <div className="spinner"></div> : "Submit"}
          </button>
        </form>
      </ModalBox>
    </Backdrop>
  );
};

export default QuoteModal;
