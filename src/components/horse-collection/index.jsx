import React, { useState } from "react";
import Wrapper from "./style";

const optimize = (url) => {
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
};

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

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
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581750/3_ijkt1e.png")
      ],
      title: "Horse Panel",
      desc: ["Polished white marble", "Three horse relief", "Custom size ready"]
    },
    {
      id: 2,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581766/7_pqy5ei.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581777/6_pkks77.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581774/5_ojnhry.png")
      ],
      title: "Horse Pair",
      desc: ["Glossy black stone", "Flowing mane style", "Size on order"]
    },
    {
      id: 3,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581777/9_egjhxj.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581796/10_s2ub2h.png")
      ],
      title: "Horse Idol",
      desc: ["White marble polish", "Elegant standing pose", "Any size custom"]
    },
    {
      id: 4,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581731/1_kdbdjz.png")
      ],
      title: "Horse Statue",
      desc: ["White marble finish", "Dynamic standing pose", "Custom size ready"]
    },
    {
      id: 5,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581806/8_pkwkaw.png")
      ],
      title: "Golden Horse",
      desc: ["Polished brown marble", "Unique natural veins", "Size on request"]
    },
    {
      id: 6,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581801/14_w1kuvt.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581809/15_sxv6ny.png")
      ],
      title: "Ivory Trail",
      desc: ["Smooth marble finish", "Graceful walking pose", "Custom size ready"]
    },
    {
      id: 7,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581801/12_eadvgs.png")
      ],
      title: "Silent Grace",
      desc: ["Minimal marble finish", "Abstract horse profile", "Custom sizing"]
    },
    {
      id: 8,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581744/2_twgxdb.png")
      ],
      title: "Bonded Bliss",
      desc: ["White marble sculpture", "Mother & foal design", "Size made to order"]
    },
    {
      id: 9,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581801/13_h0onhv.png")
      ],
      title: "Momentum",
      desc: ["Glossy marble finish", "Dynamic jumping form", "Custom size available"]
    },
    {
      id: 10,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581804/11_tv1bux.png")
      ],
      title: "Serene Spirit",
      desc: ["White marble polish", "Elegant horse bust", "Size on request"]
    },
    {
      id: 11,
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581760/4_itny4y.png")
      ],
      title: "Equine Elegance",
      desc: ["Smooth marble relief", "Refined horse profile", "Size made to order"]
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
      <h1 className="gallery-title">Majestic Horse Sculptures</h1>
      <p className="gallery-subtitle">Experience elegance, strength, and artistry in every piece</p>

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
            loading="lazy"
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
