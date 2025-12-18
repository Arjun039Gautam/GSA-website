import React, { useState } from "react";
import Wrapper from "./style";
import ImageDetailsModal from "../modal/ImageDetailsModal";

const HorseCollection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const optimize = (url) => {
    // inject f_auto,q_auto if not included
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
      id: 'cow-1',
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581313/1_ybxogm.png')
      ],
      title: "Marble Cow and Calf Statue",
      desc: ["Polished marble finish", "Cow and calf motif", "Custom size available"]
    },
    {
      id: 'cow-2',
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581299/2_apdxpf.png'),
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581300/3_qzfgjl.png')
      ],
      title: "Marble Cow Head Sculpture",
      desc: [
        "Hand-carved white marble",
        "Smooth polish with lifelike details",
        "Ideal for table decor or cultural display"
      ]
    },
    {
      id: 'cow-3',
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
      id: 'cow-4',
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581308/6_jmiqwi.png'),
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581313/7_p3phwz.png')
      ],
      title: "Cow & Calf",
      desc: ["Polished marble", "Hand-painted accent"]
    },
    {
      id: 'cow-5',
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581316/8_z99ubf.png')
      ],
      title: "Harmony Bond",
      desc: ["Premium marble carve", "Mother-calf intimacy", "Smooth classic finish"]
    },
    {
      id: 'cow-6',
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581322/9_gco6xc.png')
      ],
      title: "Cow with Calf",
      desc: ["Classic marble craft", "Mother-calf in unity", "Timeless natural shine"]
    },
    {
      id: 'cow-7',
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581320/10_r3qbdt.png')
      ],
      title: "Cow & Calf Idol",
      desc: ["White marble work", "Mother-child scene", "Polished for shine"]
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
      <h1 className="gallery-title">Cow Sculptures Showcase</h1>
      <p className="gallery-subtitle">
        Explore the charm and craftsmanship of pastoral life
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
