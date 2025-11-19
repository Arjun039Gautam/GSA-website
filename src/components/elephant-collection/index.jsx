import React, { useState } from "react";
import Wrapper from "./style";

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // New state for selected card

  const cards = [
    {
      id: 1,
      images: ['/web-elephant/3.png', '/web-elephant/2.png', '/web-elephant/1.png' ],
      title: "Marble Elephant Pair",
      desc: [
        "Handcrafted marble",
        "Traditional Indian style",
        "Glossy rich finish"
      ]
    },
    {
      id: 2,
      images: ['/web-elephant/4.png', '/web-elephant/5.png','/web-elephant/6.png'],
      title: "Decor Elephant",
      desc: [
        "Colorful marble art",
        "Hand-painted details",
        "Royal Indian theme"
      ]
    },
    {
      id: 3,
      images: ['/web-elephant/8.png', '/web-elephant/7.png', '/web-elephant/9.png'],
      title: "Black Elephant Pair",
      desc: [
        "Matte black finish",
        "Carved royal details",
        "Indian heritage look"
      ]
    },
    {
      id: 4,
      images: ['/web-elephant/10.png'],
      title: "Black Elephant Idol",
      desc: [
        "Matte stone texture",
        "Smooth round base",
        "Modern Indian decor"
      ]
    },
    {
      id: 5,
      images: ['/web-elephant/11.png'],
      title: "Royal Elephant Pair",
      desc: [
        "Hand-painted marble",
        "Gold and pink accents",
        "Indian festive style"
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
      <h1 className="gallery-title">Timeless Elephant Artistry</h1>
      <p className="gallery-subtitle">
        Discover hand-carved masterpieces reflecting heritage and power
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