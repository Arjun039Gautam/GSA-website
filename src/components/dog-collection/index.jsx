import React, { useState } from "react";
import Wrapper from "./style";

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  // Inject Cloudinary optimization params f_auto,q_auto
  const optimize = (url) => {
    if (url.includes("upload/")) {
      return url.replace("upload/", "upload/f_auto,q_auto/");
    }
    return url;
  };

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
      images: [optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581409/8_ty4dxm.png')],
      title: "Marble Dog Sculpture",
      desc: [
        "Detailed stone carving",
        "Strong sitting pose",
        "Classic marble finish"
      ]
    },
    {
      id: 2,
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581392/4_dmyctd.png'),
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581398/3_wnct3p.png')
      ],
      title: "Marble Dog Pair",
      desc: [
        "White marble finish",
        "Resting dog pose",
        "Elegant home decor"
      ]
    },
    {
      id: 3,
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581400/5_jlj0p6.png'),
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581409/6_cbkgox.png')
      ],
      title: "German Shepherd Bust",
      desc: [
        "White marble dog head",
        "Suitable for wall décor",
        "Can be placed anywhere"
      ]
    },
    {
      id: 4,
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581389/7_btkvwf.png')
      ],
      title: "Black Marble Dog",
      desc: [
        "Lifelike seated posture",
        "Elegant decor accent",
        "Durable craftsmanship"
      ]
    },
    {
      id: 5,
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581389/2_rq6gw1.png'),
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581367/1_nc1rwd.png')
      ],
      title: "Seated Dog Pair",
      desc: [
        "White marble pair",
        "Elegant sitting pose",
        "Classic decorative look"
      ]
    },
    {
      id: 6,
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581404/9_kutuqm.png')
      ],
      title: "Bulldog with Jersey",
      desc: [
        "Custom marble dog",
        "Hand-painted jersey",
        "Client order piece"
      ]
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
            onClick={() => openModal(card)}
          >
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
