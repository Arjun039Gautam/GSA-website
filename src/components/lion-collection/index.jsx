import React, { useState } from "react";
import Wrapper from "./style";
import ImageDetailsModal from "../modal/ImageDetailsModal";

// Cloudinary auto optimization helper
const optimize = (url) => {
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
};

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
      id: 'lion-1',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581862/1_jnoyic.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581855/2_lwfgzh.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581939/3_kyyilw.png"),
      ],
      title: "Lion Pair",
      desc: ["White marble finish", "Majestic roaring pose", "Custom size ready"],
    },
    {
      id: 'lion-2',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581943/4_yezbue.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581984/5_be6arv.png"),
      ],
      title: "Grey Lions",
      desc: ["Textured grey marble", "Detailed mane design", "Any size option"],
    },
    {
      id: 'lion-3',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581976/6_fogrfv.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581982/8_w4hibk.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581960/7_nmcdzk.png"),
      ],
      title: "Lion Statue",
      desc: ["White marble finish", "Realistic mane detail", "Size on request"],
    },
    {
      id: 'lion-4',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581969/9_y6uz92.png"),
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581971/10_ge8hsq.png"),
      ],
      title: "Roaring Lion",
      desc: ["White marble finish", "Dynamic roaring pose", "Any size ready"],
    },
    {
      id: 'lion-5',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581976/11_znlxtn.png"),
      ],
      title: "Lion Pair",
      desc: ["Polished marble finish", "Graceful sitting pose", "Size as needed"],
    },
    {
      id: 'lion-6',
      images: [
        optimize("https://res.cloudinary.com/dancodp27/image/upload/v1764581986/12_eyo6fg.png"),
      ],
      title: "Lion Guard",
      desc: ["Textured black stone", "Regal sitting pose", "Any size custom"],
    },
    {
      id: 'lion-7',
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
