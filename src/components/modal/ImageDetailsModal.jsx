import React, { useRef } from "react";
import {
  ModalOverlay,
  ModalContainer,
  ImageSection,
  ImageWrapper,
  StyledImage,
  DetailsSection,
  CloseButton,
  Title,
  Description,
  NavigationContainer,
  DotIndicator,
  ArrowButton,
  ImageCounter,
  GetQuoteButton,
} from "./style";
import {
  useImageNavigation,
  useModalClose,
  useClickOutside,
} from "../../utils/modalHooks";

const ImageDetailsModal = ({
  isOpen,
  card,
  onClose,
  currentImageIndex,
  setCurrentImageIndex,
}) => {
  const modalRef = useRef(null);

  useImageNavigation(card?.images || [], currentImageIndex, setCurrentImageIndex);
  useModalClose(onClose, isOpen);
  useClickOutside(modalRef, onClose, isOpen);

  if (!isOpen || !card) return null;

  const images = card.images || [];
  const currentImage = images[currentImageIndex];
  const descriptions = card.desc || [];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageJump = (index) => {
    setCurrentImageIndex(index);
  };

  const handleGetQuote = () => {
    // Scroll to get-quote section or open quote modal
    const quoteSection = document.getElementById("get-quote");
    if (quoteSection) {
      onClose();
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <ImageSection>
          <ImageWrapper>
            <StyledImage
              src={currentImage}
              alt={`${card.title} - Image ${currentImageIndex + 1}`}
              key={currentImageIndex}
              loading="lazy"
            />
          </ImageWrapper>

          {card.images.length > 1 && (
            <NavigationContainer>
              <ArrowButton 
                onClick={handlePrevImage}
                title="Previous image"
                aria-label="Previous image"
              >
                &#8249;
              </ArrowButton>

              <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
                {card.images.map((_, idx) => (
                  <DotIndicator
                    key={idx}
                    active={idx === currentImageIndex}
                    onClick={() => handleImageJump(idx)}
                    title={`Go to image ${idx + 1}`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>

              <ImageCounter>
                {currentImageIndex + 1}/{card.images.length}
              </ImageCounter>

              <ArrowButton 
                onClick={handleNextImage}
                title="Next image"
                aria-label="Next image"
              >
                &#8250;
              </ArrowButton>
            </NavigationContainer>
          )}
        </ImageSection>

        <DetailsSection>
          <CloseButton onClick={onClose} title="Close modal" aria-label="Close">&times;</CloseButton>

          <div>
            <Title>{card.title}</Title>

            <Description>
              {descriptions.map((desc, idx) => (
                <div key={idx}>{desc}</div>
              ))}
            </Description>

            <GetQuoteButton onClick={handleGetQuote}>
              Get Quote
            </GetQuoteButton>
          </div>
        </DetailsSection>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ImageDetailsModal;
