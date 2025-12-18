import React, { useState } from "react";
import Wrapper from "./style";
import ImageDetailsModal from "../modal/ImageDetailsModal";

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const optimize = (url) => {
    return url.replace("/upload/", "/upload/f_auto,q_auto/");
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
      id: 'elephant-1',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581497/3_yf2dvc.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581478/2_vfbdpu.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581487/1_qjcjy0.png")
      ],
      title: "Marble Elephant Pair",
      desc: [
        "Handcrafted marble",
        "Traditional Indian style",
        "Glossy rich finish"
      ]
    },
    {
      id: 'elephant-2',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581502/4_ehsue4.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581486/5_mk6ysf.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581502/6_epbv7l.png")
      ],
      title: "Decor Elephant",
      desc: [
        "Colorful marble art",
        "Hand-painted details",
        "Royal Indian theme"
      ]
    },
    {
      id: 'elephant-3',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581511/8_mij93r.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581507/7_idiiif.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581511/9_nrvdrd.png")
      ],
      title: "Black Elephant Pair",
      desc: [
        "Matte black finish",
        "Carved royal details",
        "Indian heritage look"
      ]
    },
    {
      id: 'elephant-4',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581505/10_kfr4dl.png")
      ],
      title: "Black Elephant Idol",
      desc: [
        "Matte stone texture",
        "Smooth round base",
        "Modern Indian decor"
      ]
    },
    {
      id: 'elephant-5',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581514/11_gc3rko.png")
      ],
      title: "Royal Elephant Pair",
      desc: [
        "Hand-painted marble",
        "Gold and pink accents",
        "Indian festive style"
      ]
    },
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    setSelectedImages(card.images);
    setCurrentIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setSelectedImages([]);
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
      <h1 className="gallery-title">Timeless Elephant Artistry</h1>
      <p className="gallery-subtitle">
        Discover hand-carved masterpieces reflecting heritage and power
      </p>

      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card" onClick={() => openModal(card)}>
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
