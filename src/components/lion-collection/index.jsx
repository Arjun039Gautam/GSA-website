import React, { useState } from "react";
import Wrapper from "./style";

// Cloudinary auto optimization helper
const optimize = (url) => {
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
};

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581862/1_jnoyic.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581855/2_lwfgzh.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581939/3_kyyilw.png"),
      ],
      title: "Lion Pair",
      desc: ["White marble finish", "Majestic roaring pose", "Custom size ready"],
    },
    {
      id: 2,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581943/4_yezbue.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581984/5_be6arv.png"),
      ],
      title: "Grey Lions",
      desc: ["Textured grey marble", "Detailed mane design", "Any size option"],
    },
    {
      id: 3,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581976/6_fogrfv.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581982/8_w4hibk.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581960/7_nmcdzk.png"),
      ],
      title: "Lion Statue",
      desc: ["White marble finish", "Realistic mane detail", "Size on request"],
    },
    {
      id: 4,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581969/9_y6uz92.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581971/10_ge8hsq.png"),
      ],
      title: "Roaring Lion",
      desc: ["White marble finish", "Dynamic roaring pose", "Any size ready"],
    },
    {
      id: 5,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581976/11_znlxtn.png"),
      ],
      title: "Lion Pair",
      desc: ["Polished marble finish", "Graceful sitting pose", "Size as needed"],
    },
    {
      id: 6,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581986/12_eyo6fg.png"),
      ],
      title: "Lion Guard",
      desc: ["Textured black stone", "Regal sitting pose", "Any size custom"],
    },
    {
      id: 7,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581979/13_ni9uku.png"),
      ],
      title: "Lion Panel",
      desc: ["White marble panel", "Bold lion relief", "Size customizable"],
    },
  ];

  const openModal = (card) => {
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
    setCurrentIndex((prev) => (prev === 0 ? selectedImages.length - 1 : prev - 1));
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
          <div className="card" key={card.id} onClick={() => openModal(card)}>
            <div className="card-image-container">
              <img
                src={card.images[0]}
                alt={card.title}
                loading="lazy"
              />

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
            loading="lazy"
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
                    className={`dot ${currentIndex === index ? "active" : ""}`}
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
