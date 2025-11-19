import React, { useState } from "react";
import Wrapper from "./style";

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // New state for selected card

  const cards = [
    {
      id: 1,
      images: ['/web-lion/1.png', '/web-lion/2.png', '/web-lion/3.png'],
      title: "Lion Pair",
      desc: [
        "White marble finish",
        "Majestic roaring pose",
        "Custom size ready"
      ]
    },
    {
      id: 2,
      images: ['/web-lion/4.png', '/web-lion/5.png'],
      title: "Grey Lions",
      desc: [
        "Textured grey marble",
        "Detailed mane design",
        "Any size option"
      ]
    },
    {
      id: 3,
      images: ['/web-lion/6.png', '/web-lion/8.png', '/web-lion/7.png'],
      title: "Lion Statue",
      desc: [
        "White marble finish",
        "Realistic mane detail",
        "Size on request"
      ]
    },
    {
      id: 4,
      images: ['/web-lion/9.png', '/web-lion/10.png'],
      title: "Roaring Lion",
      desc: [
        "White marble finish",
        "Dynamic roaring pose",
        "Any size ready"
      ]
    },
    {
      id: 5,
      images: ['/web-lion/11.png'],
      title: "Lion Pair",
      desc: [
        "Polished marble finish",
        "Graceful sitting pose",
        "Size as needed"
      ]
    },
    {
      id: 6,
      images: ['/web-lion/12.png'],
      title: "Lion Guard",
      desc: [
        "Textured black stone",
        "Regal sitting pose",
        "Any size custom"
      ]
    },
    {
      id: 7,
      images: ['/web-lion/13.png'],
      title: "Lion Panel",
      desc: [
        "White marble panel",
        "Bold lion relief",
        "Size customizable"
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
      <h1 className="gallery-title">The Royal Lion Gallery</h1>
      <p className="gallery-subtitle">
        Where heritage meets extraordinary craftsmanship
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