import React, { useState } from "react";
import Wrapper from "./style";
import ImageDetailsModal from "../modal/ImageDetailsModal";

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // New state for selected card
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
      id: 'master-1',
      images: ['/web-horse/3.png'],
      title: "Marble Lions",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 'master-2',
      images: ['/web-horse/5.png', '/web-horse/6.png', '/web-horse/7.png'],
      title: "Elegant Canine Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 'master-3',
      images: ['/web-horse/9.png', '/web-horse/10.png'],
      title: "Pastoral Cow Figurines",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 'master-4',
      images: ['/web-horse/1.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 'master-5',
      images: ['/web-horse/8.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 'master-6',
      images: ['/web-horse/14.png', '/web-horse/15.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 'master-7',
      images: ['/web-horse/12.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 'master-8',
      images: ['/web-horse/2.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 'master-9',
      images: ['/web-horse/13.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 'master-10',
      images: ['/web-horse/11.png'],
      title: "Dynamic Horse Sculptures",
      desc: [
        "Natural stone polish",
        "Perfect for outdoor decor",
        "Durable craftsmanship"
      ]
    },
    {
      id: 'master-11',
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
      <h1 className="gallery-title">Our Masterpiece Collection</h1>
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