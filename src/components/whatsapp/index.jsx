import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

/* 🔥 Pulse animation */
const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
  70% { transform: scale(1.08); box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
`;

const Button = styled.a`
  position: fixed;
  bottom: 50px;
  right: 20px;
  background-color: #25d366;
  color: white;
  font-size: 32px;
  padding: 14px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 9999;

  /* Smooth animation */
  animation: ${pulse} 2s infinite;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    background-color: #1ebe5d;
    transform: scale(1.15) rotate(10deg);
  }
`;

const WhatsAppButton = () => {
  return (
    <Button
      href="https://wa.me/919829058944" // 👉 apna WhatsApp number yaha daalna (91 = India code)
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </Button>
  );
};

export default WhatsAppButton;
