import React, { useState } from "react";
import Wrapper from "./style";

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // New state for selected card

  const cards = [
    {
      id: 1,
      images: ['https://res.cloudinary.com/dancodp27/image/upload/v1764581313/1_ybxogm.png'],
      title: "Marble Cow and Calf Statue",
      desc: [
        "Polished marble finish",
        "Cow and calf motif",
        "Custom size available"
      ]
    },
    {
      id: 2,
      images: ['https://res.cloudinary.com/dancodp27/image/upload/v1764581299/2_apdxpf.png', 'https://res.cloudinary.com/dancodp27/image/upload/v1764581300/3_qzfgjl.png', ],
      title: "Marble Cow Head Sculpture",
      desc: [
        "Hand-carved white marble",
        "Smooth polish with lifelike details",
        "Ideal for table decor or cultural display"
      ]
    },
    {
      id: 3,
      images: ['https://res.cloudinary.com/dancodp27/image/upload/v1764581314/4_l2hqok.png', 'https://res.cloudinary.com/dancodp27/image/upload/v1764581314/5_exq7ib.png',],
      title: "Marble Cow Head Wall Fountain",
      desc: [
        "Handcrafted white marble cow head panel",
        "Functional design for water flow and wall décor",
        "Elegant finish, suitable for indoor or outdoor use"
      ]
    },
    {
      id: 4,
      images: [ 'https://res.cloudinary.com/dancodp27/image/upload/v1764581308/6_jmiqwi.png', 'https://res.cloudinary.com/dancodp27/image/upload/v1764581313/7_p3phwz.png'],
      title: "Cow & Calf",
      desc: [
        "Polished marble",
        "Hand-painted accent"
      ]
    },
    {
      id: 5,
      images: ['https://res.cloudinary.com/dancodp27/image/upload/v1764581316/8_z99ubf.png'],
      title: "Harmony Bond",
      desc: [
        "Premium marble carve",
        "Mother-calf intimacy",
        "Smooth classic finish"
      ]
    },
    {
      id: 6,
      images: ['https://res.cloudinary.com/dancodp27/image/upload/v1764581322/9_gco6xc.png'],
      title: "Cow with Calf",
      desc: [
        "Classic marble craft",
        "Mother-calf in unity",
        "Timeless natural shine"
      ]
    },
    {
      id: 7,
      images: ['https://res.cloudinary.com/dancodp27/image/upload/v1764581320/10_r3qbdt.png'],
      title: "Cow & Calf Idol",
      desc: [
        "White marble work",
        "Mother-child scene",
        "Polished for shine"
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
      <h1 className="gallery-title">Cow Sculptures Showcase</h1>
      <p className="gallery-subtitle">
        Explore the charm and craftsmanship of pastoral life
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