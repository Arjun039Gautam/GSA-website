import React, { useState } from "react";
import Wrapper from "./style";
import firstimg from '../images/modern art web.png'

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // New state for selected card

  const cards = [
    {
      id: 1,
      images: ['/modern art web/1.png'],
      title: "Sculpted Minimal Tower",
      desc: [
        "Modern marble abstract",
        "Smooth geometric lines",
        "Perfect for statement decor"
      ]
    },
    {
      id: 2,
      images: ['/modern art web/2.png'],
      title: "Flowing Motion Sculpture",
      desc: [
        "Abstract marble form",
        "Dynamic flowing curves",
        "Modern artistic centerpiece"
      ]
    },
    {
      id: 3,
      images: ['/modern art web/3.png'],
      title: "Embrace Figurine",
      desc: [
        "Abstract couple design",
        "Minimalist marble form",
        "Modern love theme"
      ]
    },
    {
      id: 4,
      images: ['/modern art web/4.png'],
      title: "Marble Flame Abstract",
      desc: [
        "Fluid modern art piece",
        "Soft textured surface",
        "Inspired by rising flame"

      ]
    },
    {
      id: 5,
      images: ['/modern art web/5.png'],
      title: "Spiral Modern Accent",
      desc: [
        "Abstract spiral design",
        "Smooth marble sculpture",
        "Contemporary statement piece"
      ]
    },
    {
      id: 6,
      images: ['/modern art web/6.png', '/modern art web/7.png'],
      title: "Curved Modern Form",
      desc: [
        "Textured grey finish",
        "Open abstract design",
        "Contemporary table piece"
      ]
    },
    {
      id: 7,
      images: ['/modern art web/8.png'],
      title: "Infinity Twist Sculpture",
      desc: [
        "Smooth marble curves",
        "Contemporary infinity shape",
        "Elegant modern decor"
      ]
    },
    {
      id: 8,
      images: ['/modern art web/9.png'],
      title: "Minimal Ganesha Idol",
      desc: [
        "Contemporary Ganesha form",
        "Smooth marble finish",
        "Calm spiritual accent"
      ]
    },
    {
      id: 9,
      images: ['/modern art web/10.png'],
      title: "Modern Ganesha Silhouette",
      desc: [
        "Stylized elephant head",
        "Marble abstract finish",
        "Spiritual and minimal"
      ]
    },
    {
      id: 10,
      images: ['/modern art web/11.png', '/modern art web/12.png'],
      title: "Contemporary Ganesh Idol",
      desc: [
        "Modern marble Ganesha",
        "Smooth minimal lines",
        "Sculptural divine touch"
      ]
    },
  ];

  const openModal = (card) => { // Now passing the whole card object
    setSelectedCard(card);
    setSelectedImages(card.images);
    setCurrentIndex(0);
  };

  const closeModal = () => {
    setSelectedImages([]);
    setSelectedCard(null);
    setCurrentIndex(0);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === selectedImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Wrapper>
      <h1 className="gallery-title">The Modern Artistry Collection</h1>
      <p className="gallery-subtitle">
        Explore innovative craftsmanship where tradition meets modern design
      </p>

      <div className="card-grid">
        {cards.map((card) => (
          <div
            className="card"
            key={card.id}
            onClick={() => openModal(card)} // Pass the whole card here
          >
            <div className="card-image-container">
              <img src={card.images[0]} alt={card.title} />
              {card.images.length > 1 && (
                <span className="image-count">+{card.images.length - 1}</span>
              )}
              <div className="overlay">
                <h3>{card.title}</h3>
                <ul className="card-points">
                  {card.desc.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImages.length > 0 && selectedCard && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          
          <img
            className="modal-content"
            src={selectedImages[currentIndex]}
            alt="Large Preview"
            onClick={(e) => e.stopPropagation()}
          />
          
          {selectedImages.length > 1 && (
            <>
              <button className="prev" onClick={prevImage}>❮</button>
              <button className="next" onClick={nextImage}>❯</button>
              <div className="dot-container">
                {selectedImages.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${currentIndex === index ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                  ></span>
                ))}
              </div>
            </>
          )}
          
          <div className="modal-info">
            <h3>{selectedCard.title}</h3>
            <ul className="modal-points">
              {selectedCard.desc.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default HorseCollection;