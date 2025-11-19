import React, { useState } from "react";
import Wrapper from "./style";

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // New state for selected card

  const cards = [
    {
      id: 1,
      images: ['/web-dog/8.png'],
      title: "Marble Dog Sculpture",
      desc: [
        "Detailed stone carving",
        "Strong sitting pose",
        "Classic marble finish"
      ]
    },
    {
      id: 2,
      images: ['/web-dog/4.png', '/web-dog/3.png'],
      title: "Marble Dog Pair",
      desc: [
        "White marble finish",
        "Resting dog pose",
        "Elegant home decor"
      ]
    },
    {
      id: 3,
      images: ['/web-dog/5.png', '/web-dog/6.png'],
      title: "German Shepherd Bust",
      desc: [
        "White marble dog head",
        "Suitable for wall décor",
        "Can be placed anywhere"
      ]
    },
    {
      id: 4,
      images: ['/web-dog/7.png'],
      title: "Black Marble Dog",
      desc: [
        "Lifelike seated posture",
        "Elegant decor accent",
        "Durable craftsmanship"
      ]
    },
    {
      id: 5,
      images: ['/web-dog/2.png', '/web-dog/1.png'],
      title: "Seated Dog Pair",
      desc: [
        "White marble pair",
        "Elegant sitting pose",
        "Classic decorative look"
      ]
    },
    {
      id: 6,
      images: ['/web-dog/9.png'],
      title: "Bulldog with Jersey",
      desc: [
        "Custom marble dog",
        "Hand-painted jersey",
        "Client order piece"
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
      <h1 className="gallery-title">The Loyal Companion Gallery</h1>
      <p className="gallery-subtitle">
        Discover craftsmanship that celebrates the spirit of loyalty
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