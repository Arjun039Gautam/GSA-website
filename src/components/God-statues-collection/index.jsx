import React, { useState } from "react";
import Wrapper from "./style";

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // New state for selected card

  const cards = [
    {
      id: 1,
      images: ['/web-god/1.png'],
      title: "Ganesh Ji Idol",
      desc: [
        "Black marble finish",
        "Intricate fine carving",
        "Available in any size on demand"
      ]
    },
    {
      id: 2,
      images: ['/web-god/2.png'],
      title: "Ram Darbar",
      desc: [
        "White marble finish",
        "Elegant gold detailing",
        "Any size on demand"
      ]
    },
    {
      id: 3,
      images: ['/web-god/3.png'],
      title: "Seated Ram Darbar",
      desc: [
        "Polished white marble",
        "Elegant gold accents",
        "Made in any size"
      ]
    },
    {
      id: 4,
      images: ['/web-god/4.png'],
      title: "Shiv Parivar",
      desc: [
        "Pure white marble",
        "Detailed family carving",
        "Size made on demand"
      ]
    },
    {
      id: 5,
      images: ['/web-god/5.png'],
      title: "Shiv Parvati Ji",
      desc: [
        "White marble finish",
        "Golden hand details",
        "On-demand sizing"
      ]
    },
    {
      id: 6,
      images: ['/web-god/6.png'],
      title: "Radha Krishna Ji",
      desc: [
        "White marble finish",
        "Gold pink accents",
        "Size on request"
      ]
    },
    {
      id: 7,
      images: ['/web-god/7.png'],
      title: "Krishna Radha Ji",
      desc: [
        "Smooth white marble",
        "Cow and flute detail",
        "Custom size option"
      ]
    },
    {
      id: 8,
      images: ['/web-god/8.png'],
      title: "Ganesh Ji Idol",
      desc: [
        "White marble finish",
        "Hand-painted details",
        "On-demand sizing"
      ]
    },
    {
      id: 9,
      images: ['/web-god/9.png'],
      title: "White Ganesh Ji",
      desc: [
        "Polished white marble",
        "Classic sitting pose",
        "Custom size available"
      ]
    },
    {
      id: 10,
      images: ['/web-god/10.png'],
      title: "Ganesh Ji Idol",
      desc: [
        "Glossy black marble",
        "Ornate throne design",
        "Size on demand"
      ]
    },
    {
      id: 11,
      images: ['/web-god/11.png'],
      title: "Classic Ganesh Ji",
      desc: [
        "Pure white marble",
        "Royal sitting pose",
        "Any size on order"
      ]
    },
    {
      id: 12,
      images: ['/web-god/12.png'],
      title: "Maa Durga",
      desc: [
        "Premium marble finish",
        "Rich golden accents",
        "Custom size option"
      ]
    },
    {
      id: 13,
      images: ['/web-god/13.png'],
      title: "Black Lakshmi Ji",
      desc: [
        "Premium black marble",
        "Intricate hand carving",
        "Custom size ready"
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
      <h1 className="gallery-title">Vaishnav Moorti Showcase</h1>
      <p className="gallery-subtitle">
        Experience Timeless Craftsmanship & Sacred Beauty in Every Statue
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