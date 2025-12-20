import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeInOverlay 0.3s ease-out;

  @keyframes fadeInOverlay {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
      -webkit-backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ModalContainer = styled.div`
  box-sizing: border-box;
  background: linear-gradient(135deg, #ffffff 0%, #faf9f7 50%, #f5f3f0 100%);
  border-radius: 28px;
  box-shadow: 
    0 30px 80px rgba(0, 0, 0, 0.25),
    0 0 1px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(255, 255, 255, 0.8);
  overflow: hidden;
  max-width: 1100px;
  width: 100%;
  max-height: 85vh;
  display: flex;
  animation: slideUpModal 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 1px solid rgba(212, 161, 94, 0.15);

  @keyframes slideUpModal {
    from {
      opacity: 0;
      transform: translateY(60px) scale(0.92);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 95vh;
    border-radius: 24px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 480px) {
    border-radius: 20px;
    max-height: 98vh;
  }
`;

export const ImageSection = styled.div`
  box-sizing: border-box;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(135deg, #fdfcfb 0%, #f8f6f3 50%, #f3f0ed 100%);
  padding: 50px;
  overflow: hidden;
  border-right: 1px solid rgba(212, 161, 94, 0.1);
  gap: 30px;

  @media (max-width: 768px) {
    padding: 35px 25px;
    border-right: none;
    border-bottom: 1px solid rgba(212, 161, 94, 0.1);
    min-height: 320px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 25px 15px;
    min-height: 280px;
    gap: 15px;
  }
`;

export const ImageWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 520px;

  @media (max-width: 768px) {
    max-height: 350px;
  }

  @media (max-width: 480px) {
    max-height: 280px;
  }
`;

export const StyledImage = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 16px;
  animation: zoomInImage 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
  box-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.5);

  @keyframes zoomInImage {
    from {
      opacity: 0;
      transform: scale(0.85);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 480px) {
    border-radius: 12px;
  }
`;

export const DetailsSection = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 55px 50px;
  background: linear-gradient(135deg, #ffffff 0%, #faf9f7 100%);
  position: relative;
  animation: slideInDetailsRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);

  @keyframes slideInDetailsRight {
    from {
      opacity: 0;
      transform: translateX(60px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* make the inner container full width and allow centering on small screens
     while keeping description text left-aligned */
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    padding: 40px 35px;
    > div {
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(212, 161, 94, 0.3);
  color: #7a5c3d;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);

  &:hover {
    background: rgba(212, 161, 94, 0.15);
    border-color: #d4a15e;
    transform: rotate(90deg) scale(1.1);
    box-shadow: 0 8px 25px rgba(212, 161, 94, 0.2);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    width: 44px;
    height: 44px;
    font-size: 24px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
    top: 12px;
    right: 12px;
  }
`;

export const Title = styled.h2`
  min-width: 0;
  font-size: 36px;
  color: #3d2f24;
  margin: 0 0 16px 0;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 1.2;
  animation: fadeInDownTitle 0.6s ease 0.1s both;
  background: linear-gradient(135deg, #3d2f24 0%, #7a5c3d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @keyframes fadeInDownTitle {
    from {
      opacity: 0;
      transform: translateY(-25px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 14px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Description = styled.div`
  min-width: 0;
  overflow-wrap: anywhere;
  color: #5a4a3a;
  font-size: 16px;
  line-height: 1.9;
  margin-bottom: 35px;
  animation: fadeInUpDesc 0.6s ease 0.2s both;
  flex-grow: 1;
  text-align: left;

  @keyframes fadeInUpDesc {
    from {
      opacity: 0;
      transform: translateY(25px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  & > div {
    margin-bottom: 16px;
    padding-left: 28px; /* reserve space for checkmark inside padding */
    position: relative;
    font-weight: 500;
    transition: all 0.25s ease;
    text-align: left;

    &:hover {
      transform: translateX(4px);
      color: #3d2f24;
    }

    &:before {
      content: "✓";
      position: absolute;
      left: 8px; /* place checkmark inside left padding to avoid overflow */
      top: 0;
      color: #d4a15e;
      font-weight: bold;
      font-size: 18px;
      line-height: 1.1;
      animation: checkmark 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes checkmark {
      0% {
        opacity: 0;
        transform: scale(0) rotate(-45deg);
      }
      50% {
        transform: scale(1.15);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
    }
  }

  & > div:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 25px;
    line-height: 1.8;

    & > div {
      padding-left: 24px;
      margin-bottom: 14px;

      &:before {
        left: 6px;
      }
    }
  }

  @media (max-width: 480px) {
    font-size: 14px;

    & > div {
      padding-left: 22px;
      margin-bottom: 12px;

      &:before {
        left: 6px;
        font-size: 16px;
      }
    }
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 20px 0;
  animation: fadeInUpNav 0.6s ease 0.3s both;
  border-top: 1px solid rgba(212, 161, 94, 0.15);
  border-bottom: 1px solid rgba(212, 161, 94, 0.15);
  width: 100%;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 20px;

  @keyframes fadeInUpNav {
    from {
      opacity: 0;
      transform: translateY(25px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    gap: 14px;
    padding: 15px 0;
  }

  @media (max-width: 480px) {
    gap: 10px;
    padding: 12px 0;
  }
`;

export const DotIndicator = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2.5px solid #d4a15e;
  background: ${(props) => (props.active ? "#d4a15e" : "rgba(212, 161, 94, 0.15)")};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  padding: 0;
  box-shadow: ${(props) =>
    props.active
      ? "0 0 12px rgba(212, 161, 94, 0.5)"
      : "none"};

  &:hover {
    background: #d4a15e;
    transform: scale(1.35);
    box-shadow: 0 0 15px rgba(212, 161, 94, 0.6);
  }

  &:active {
    transform: scale(1.15);
  }

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
    border-width: 2px;
  }

  @media (max-width: 480px) {
    width: 11px;
    height: 11px;
  }
`;

export const ArrowButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2.5px solid #d4a15e;
  background: linear-gradient(135deg, rgba(212, 161, 94, 0.1) 0%, rgba(212, 161, 94, 0.05) 100%);
  color: #7a5c3d;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(212, 161, 94, 0.1);

  &:hover {
    background: linear-gradient(135deg, rgba(212, 161, 94, 0.25) 0%, rgba(212, 161, 94, 0.15) 100%);
    transform: scale(1.15) translateY(-2px);
    box-shadow: 0 8px 20px rgba(212, 161, 94, 0.25);
    border-color: #d4a15e;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
    border-width: 2px;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
`;

export const ImageCounter = styled.span`
  font-size: 14px;
  color: #7a5c3d;
  font-weight: 700;
  padding: 8px 14px;
  min-width: 50px;
  text-align: center;
  background: rgba(212, 161, 94, 0.08);
  border-radius: 20px;
  border: 1px solid rgba(212, 161, 94, 0.2);
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 161, 94, 0.15);
    border-color: rgba(212, 161, 94, 0.4);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 7px 12px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`;

export const GetQuoteButton = styled.button`
  background: linear-gradient(135deg, #d4a15e 0%, #c08d4a 100%);
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 20px rgba(212, 161, 94, 0.3);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  animation: fadeInUpButton 0.6s ease 0.4s both;
  align-self: flex-start;

  @keyframes fadeInUpButton {
    from {
      opacity: 0;
      transform: translateY(25px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    background: linear-gradient(135deg, #c08d4a 0%, #a87c3a 100%);
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(212, 161, 94, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 15px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 11px 24px;
    font-size: 14px;
    width: 100%;
  }
`;
