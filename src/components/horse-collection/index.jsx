import React, { useState } from "react";
import Wrapper from "./style";
import ImageDetailsModal from "../modal/ImageDetailsModal";

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
      id: 'horse-1',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581750/3_ijkt1e.png")
      ],
      title: "Horse Panel",
      desc: ["Polished white marble", "Three horse relief", "Custom size ready"]
    },
    {
      id: 'horse-2',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581766/7_pqy5ei.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581777/6_pkks77.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581774/5_ojnhry.png")
      ],
      title: "Horse Pair",
      desc: ["Glossy black stone", "Flowing mane style", "Size on order"]
    },
    {
      id: 'horse-3',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581777/9_egjhxj.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581796/10_s2ub2h.png")
      ],
      title: "Horse Idol",
      desc: ["White marble polish", "Elegant standing pose", "Any size custom"]
    },
    {
      id: 'horse-4',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581731/1_kdbdjz.png")
      ],
      title: "Horse Statue",
      desc: ["White marble finish", "Dynamic standing pose", "Custom size ready"]
    },
    {
      id: 'horse-5',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581806/8_pkwkaw.png")
      ],
      title: "Golden Horse",
      desc: ["Polished brown marble", "Unique natural veins", "Size on request"]
    },
    {
      id: 'horse-6',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581801/14_w1kuvt.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581809/15_sxv6ny.png")
      ],
      title: "Ivory Trail",
      desc: ["Smooth marble finish", "Graceful walking pose", "Custom size ready"]
    },
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
