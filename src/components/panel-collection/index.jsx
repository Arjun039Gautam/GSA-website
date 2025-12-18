import React, { useState } from "react";
import Wrapper from "./style";
import ImageDetailsModal from "../modal/ImageDetailsModal";

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Cloudinary optimization function
  const optimize = (url) =>
    url.replace("/upload/", "/upload/f_auto,q_auto/");

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
      id: 'panel-1',
      images: [optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581979/13_ni9uku.png')],
      title: "Lion Panel",
      desc: ["White marble panel", "Bold lion relief", "Size customizable"]
    },
    {
      id: 'panel-2',
      images: [optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581750/3_ijkt1e.png')],
      title: "Horse Panel",
      desc: ["Polished white marble", "Three horse relief", "Custom size ready"]
    },
    {
      id: 'panel-3',
      images: [optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581760/4_itny4y.png')],
      title: "Equine Elegance",
      desc: ["Smooth marble relief", "Refined horse profile", "Size made to order"]
    },
    {
      id: 'panel-4',
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581314/4_l2hqok.png'),
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581314/5_exq7ib.png')
      ],
      title: "Marble Cow Head Wall Fountain",
      desc: [
        "Handcrafted white marble cow head panel",
        "Functional design for water flow and wall décor",
        "Elegant finish, suitable for indoor or outdoor use"
      ]
    },
    {
      id: 'panel-5',
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
    }
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    setSelectedImages(card.images);
    setCurrentIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImages([]);
    setSelectedCard(null);
    setCurrentIndex(0);
    setModalOpen(false);
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
            onClick={() => openModal(card)}
          >
            <div className="card-image-container">
              <img loading="lazy" src={card.images[0]} alt={card.title} />

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

      <ImageDetailsModal
        isOpen={modalOpen}
        card={selectedCard}
        onClose={closeModal}
        currentImageIndex={currentIndex}
        setCurrentImageIndex={setCurrentIndex}
      />
    </Wrapper>
  );
};

export default HorseCollection;
