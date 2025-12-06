import React, { useState } from "react";
import Wrapper from "./style";

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // New state for selected card

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedCard) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage(e);
      if (e.key === "ArrowRight") nextImage(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCard, currentIndex, selectedImages]);

  const cards = [
    {
      id: 1,
      images: ['/web-horse/3.png'],
      title: "Marble Lions",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 2,
      images: ['/web-horse/5.png', '/web-horse/6.png', '/web-horse/7.png'],
      title: "Elegant Canine Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 3,
      images: ['/web-horse/9.png', '/web-horse/10.png'],
      title: "Pastoral Cow Figurines",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 4,
      images: ['/web-horse/1.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 5,
      images: ['/web-horse/8.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 6,
      images: ['/web-horse/14.png', '/web-horse/15.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 7,
      images: ['/web-horse/12.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 8,
      images: ['/web-horse/2.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 9,
      images: ['/web-horse/13.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 10,
      images: ['/web-horse/11.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 11,
      images: ['/web-horse/4.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
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
      <h1 className="gallery-title">Tortoise Collection</h1>
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