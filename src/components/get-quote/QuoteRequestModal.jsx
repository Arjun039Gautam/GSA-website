// QuoteRequestModal.jsx - Premium animated UI for quote requests
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 15, 25, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(8px) saturate(1.1);
  -webkit-backdrop-filter: blur(8px) saturate(1.1);
  animation: fadeInBackdrop 300ms ease-out;
  overflow-y: auto;

  @keyframes fadeInBackdrop {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalBox = styled.div`
  box-sizing: border-box;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fc 100%);
  width: 680px;
  max-width: 95vw;
  border-radius: 24px;
  padding: 32px;
  position: relative;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.2), 
              0 0 1px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.9);
  transform-origin: center;
  animation: slideInUp 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  margin: 20px auto;

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .header {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 28px;
    padding-bottom: 22px;
    border-bottom: 2px solid rgba(255, 122, 89, 0.1);
    animation: fadeInDown 550ms ease-out 80ms forwards;
    opacity: 0;

    @keyframes fadeInDown {
      from { 
        opacity: 0; 
        transform: translateY(-15px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
  }

  .preview {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 14px;
    border: 2px solid rgba(255, 122, 89, 0.2);
    box-shadow: 0 10px 32px rgba(255, 122, 89, 0.18);
    transition: all 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
  }

  .preview:hover {
    transform: scale(1.1) rotateY(-8deg);
    box-shadow: 0 16px 48px rgba(255, 122, 89, 0.28);
  }

  .header-content {
    flex: 1;
    margin-top: 4px;
  }

  h2 {
    margin: 0 0 8px 0;
    font-size: 28px;
    color: #0a0a0a;
    font-weight: 900;
    background: linear-gradient(135deg, #ff7a59 0%, #ff4e6a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.5px;
  }

  .meta {
    color: #8a94a6;
    font-size: 13px;
    font-weight: 500;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    animation: fadeInUp 550ms ease-out 150ms forwards;
    opacity: 0;

    @keyframes fadeInUp {
      from { 
        opacity: 0; 
        transform: translateY(20px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
  }

  label {
    font-size: 11px;
    color: #5a6b7a;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    display: block;
    margin-bottom: 7px;
  }

  input, select {
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    padding: 14px 16px;
    border: 1.5px solid #e0e6f0;
    border-radius: 11px;
    font-size: 14px;
    background: #fff;
    font-weight: 500;
    transition: all 240ms ease;
    position: relative;

    &::placeholder {
      color: #a8b5c5;
      font-weight: 400;
    }

    &:focus {
      outline: none;
      border-color: #ff7a59;
      box-shadow: 0 0 0 4px rgba(255, 122, 89, 0.12),
                  inset 0 1px 2px rgba(0, 0, 0, 0.02);
      transform: translateY(-2px);
      background: #fefffe;
    }

    &:hover:not(:focus) {
      border-color: #d5dce8;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    &:disabled {
      background: #f5f7fb;
      color: #9aa5b8;
      cursor: not-allowed;
    }
  }

  .row {
    display: flex;
    gap: 14px;

    > div {
      flex: 1;
      min-width: 0; /* allow inputs to shrink on narrow screens */
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
    gap: 12px;
    flex-wrap: wrap; /* allow buttons to wrap instead of pushing layout */
  }

  button {
    padding: 14px 32px;
    border: none;
    background: linear-gradient(135deg, #ff7a59 0%, #ff4e6a 100%);
    color: #fff;
    border-radius: 11px;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.3px;
    box-shadow: 0 12px 32px rgba(255, 74, 99, 0.32);
    transition: all 320ms cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-width: 140px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: rgba(255, 255, 255, 0.25);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 500ms, height 500ms;
    }

    &:hover:not(:disabled) {
      transform: translateY(-4px);
      box-shadow: 0 18px 48px rgba(255, 74, 99, 0.42);

      &::before {
        width: 350px;
        height: 350px;
      }
    }

    &:active:not(:disabled) {
      transform: translateY(-1px);
    }

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }
  }

  .close-btn {
    position: absolute;
    right: 18px;
    top: 18px;
    font-size: 28px;
    cursor: pointer;
    color: #a0aab8;
    transition: all 280ms cubic-bezier(0.34, 1.56, 0.64, 1);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-weight: 300;
    line-height: 1;

    &:hover {
      color: #ff5252;
      background: rgba(255, 82, 82, 0.1);
      transform: rotate(15deg) scale(1.15);
    }

    &:active {
      transform: rotate(15deg) scale(1.05);
    }
  }

  /* Tablet (768px - 1024px) */
  @media (max-width: 1024px) {
    width: 90vw;
    padding: 28px;

    h2 {
      font-size: 24px;
    }

    .preview {
      width: 90px;
      height: 90px;
    }

    button {
      min-width: 120px;
      padding: 12px 24px;
      font-size: 14px;
    }
  }

  /* Mobile (480px - 768px) */
  @media (max-width: 768px) {
    width: 88vw;
    padding: 24px;
    border-radius: 20px;
    margin: 16px auto;

    .header {
      gap: 14px;
      margin-bottom: 20px;
      padding-bottom: 16px;
    }

    .preview {
      width: 80px;
      height: 80px;
      border-radius: 12px;
    }

    .header-content {
      margin-top: 2px;
    }

    h2 {
      font-size: 20px;
      margin-bottom: 4px;
    }

    .meta {
      font-size: 12px;
    }

    form {
      gap: 14px;
    }

    label {
      font-size: 10px;
      margin-bottom: 5px;
    }

    input, select {
      padding: 12px 14px;
      font-size: 16px;
      border-radius: 9px;
    }

    .row {
      gap: 10px;
    }

    .actions {
      gap: 8px;
      margin-top: 12px;
    }

    button {
      min-width: auto;
      padding: 12px 20px;
      font-size: 14px;
      flex: 1;
    }

    .close-btn {
      right: 12px;
      top: 12px;
      font-size: 24px;
      width: 36px;
      height: 36px;
    }
  }

  /* Small Mobile (320px - 480px) */
  @media (max-width: 480px) {
    width: 85vw;
    padding: 18px;
    border-radius: 22px;
    margin: 12px auto;

    .header {
      flex-direction: column;
      gap: 12px;
      margin-bottom: 16px;
      padding-bottom: 14px;
    }

    .preview {
      width: 70px;
      height: 70px;
      align-self: center;
    }

    .header-content {
      text-align: center;
      margin-top: 0;
    }

    h2 {
      font-size: 18px;
      margin-bottom: 3px;
    }

    .meta {
      font-size: 11px;
    }

    form {
      gap: 12px;
    }

    label {
      font-size: 9px;
      margin-bottom: 4px;
    }

    input, select {
      padding: 11px 12px;
      font-size: 16px;
      border-radius: 8px;
    }

    .row {
      flex-direction: column;
      gap: 0;
    }

    .actions {
      flex-direction: column;
      gap: 8px;
      margin-top: 10px;
    }

    button {
      width: 100%;
      padding: 12px 16px;
      font-size: 14px;
      min-width: auto;
    }

    .close-btn {
      right: 10px;
      top: 10px;
      font-size: 22px;
      width: 32px;
      height: 32px;
    }
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2.5px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 900ms linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const FieldGroup = styled.div`
  animation: slideInField 450ms ease-out ${props => props.delay}ms backwards;

  @keyframes slideInField {
    from {
      opacity: 0;
      transform: translateX(-24px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const RowGroup = styled.div`
  display: flex;
  gap: 14px;

  > ${FieldGroup} {
    flex: 1;
  }
`;

const CancelButton = styled.button`
  padding: 14px 32px;
  border: 1.5px solid #dce3f0;
  background: #f5f7fb;
  color: #5a6b7a;
  border-radius: 11px;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.3px;
  transition: all 280ms cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;

  &:hover:not(:disabled) {
    border-color: #c8d0e0;
    background: #eef0f8;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Tablet (768px - 1024px) */
  @media (max-width: 1024px) {
    min-width: 120px;
    padding: 12px 24px;
    font-size: 14px;
  }

  /* Mobile (480px - 768px) */
  @media (max-width: 768px) {
    flex: 1;
    min-width: auto;
    padding: 12px 20px;
    font-size: 14px;
  }

  /* Small Mobile (320px - 480px) */
  @media (max-width: 480px) {
    width: 100%;
    min-width: auto;
    padding: 12px 16px;
    font-size: 14px;
  }
`;

const QuoteRequestModal = ({ isOpen, onClose, productImage, productId }) => {
  const [formData, setFormData] = useState({
    size: "",
    marbleType: "",
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const WEB_APP_URL = process.env.REACT_APP_WEB_APP_URL;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const payload = new URLSearchParams({
        name: formData.name.trim(),
        email: formData.email.trim(),   
        phone: formData.phone.trim(),
        size: formData.size.trim(),
        marble: formData.marbleType.trim(),
        productId: productId || "N/A",
        source: "quote_product",
      });

      await axios.post(WEB_APP_URL, payload);
      toast.success("✓ Quote request submitted! We'll contact you soon.");
      setFormData({ size: "", marbleType: "", name: "", email: "", phone: "" });
      setTimeout(() => {
        onClose();
      }, 800);
    } catch (error) {
      console.error("Quote submission error:", error);
      toast.error("Unable to submit request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !loading) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalBox>
        <div className="close-btn" onClick={onClose}>✕</div>
        
        <div className="header">
          {productImage && (
            <img className="preview" src={productImage} alt="product preview" />
          )}
          <div className="header-content">
            <h2>Get Your Quote</h2>
            <div className="meta">Tell us your preferences for a personalized offer</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <FieldGroup delay={160}>
            <label>Preferred Size</label>
            <input
              type="text"
              name="size"
              placeholder="e.g., 12 inches, 30cm"
              value={formData.size}
              onChange={handleChange}
              disabled={loading}
            />
          </FieldGroup>

          <FieldGroup delay={220}>
            <label>Marble Type / Color</label>
            <input
              type="text"
              name="marbleType"
              placeholder="e.g., White Marble, Black Granite"
              value={formData.marbleType}
              onChange={handleChange}
              disabled={loading}
            />
          </FieldGroup>

          <RowGroup>
            <FieldGroup delay={280}>
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </FieldGroup>
            <FieldGroup delay={340}>
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </FieldGroup>
          </RowGroup>

          <FieldGroup delay={400}>
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 xxxxxxxxxx"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </FieldGroup>

          <div className="actions">
            <CancelButton 
              type="button" 
              onClick={onClose} 
              disabled={loading}
            >
              Cancel
            </CancelButton>
            <button 
              type="submit" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoadingSpinner />
                  Submitting...
                </>
              ) : (
                "Get Quote"
              )}
            </button>
          </div>
        </form>
      </ModalBox>
    </Backdrop>
  );
};

export default QuoteRequestModal;
