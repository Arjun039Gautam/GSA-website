import React, { useState } from "react";
import Wrapper from "./style";

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // New state for selected card

  const cards = [
    {
      id: 1,
      images: ['https://res.cloudinary.com/dancodp27/image/upload/v1764581979/13_ni9uku.png'],
      title: "Lion Panel",
      desc: [
        "White marble panel",
        "Bold lion relief",
        "Size customizable"
      ]
    },
    {
      id: 2,
      images: ['https://res.cloudinary.com/dancodp27/image/upload/v1764581750/3_ijkt1e.png'],
      title: "Horse Panel",
      desc: [
        "Polished white marble",
        "Three horse relief",
        "Custom size ready"
      ]
    },
    {
      id: 3,
      images: ['https://res.cloudinary.com/dancodp27/image/upload/v1764581760/4_itny4y.png'],
      title: "Equine Elegance",
      desc: [
        "Smooth marble relief",
        "Refined horse profile",
        "Size made to order"  
      ]
    },
    {
      id: 4,
      images: ['https://res.cloudinary.com/dancodp27/image/upload/v1764581314/4_l2hqok.png', 'https://res.cloudinary.com/dancodp27/image/upload/v1764581314/5_exq7ib.png',],
      title: "Marble Cow Head Wall Fountain",
      desc: [
        "Handcrafted white marble cow head panel",
        "Functional design for water flow and wall décor",
        "Elegant finish, suitable for indoor or outdoor use"
      ]
    },
    {
      id: 5,
      images: ['https://res.cloudinary.com/dancodp27/image/upload/v1764581400/5_jlj0p6.png', 'https://res.cloudinary.com/dancodp27/image/upload/v1764581409/6_cbkgox.png'],
      title: "German Shepherd Bust",
      desc: [
        "White marble dog head",
        "Suitable for wall décor",
        "Can be placed anywhere"
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
      <h1 className="gallery-title">Wall Panel Collection</h1>
      <p className="gallery-subtitle">
        Discover a world of timeless craftsmanship, where each piece is a work of art.
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