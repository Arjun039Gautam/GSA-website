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
      id: 'mordern-1',
      images: [optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581171/1_jyi1ax.png')],
      title: "Sculpted Minimal Tower",
      desc: ["Modern marble abstract", "Smooth geometric lines", "Perfect for statement decor"]
    },
    {
      id: 'mordern-2',
      images: [optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581171/2_jcj07e.png')],
      title: "Flowing Motion Sculpture",
      desc: ["Abstract marble form", "Dynamic flowing curves", "Modern artistic centerpiece"]
    },
    {
      id: 'mordern-3',
      images: [optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581173/3_ii8pwr.png')],
      title: "Embrace Figurine",
      desc: ["Abstract couple design", "Minimalist marble form", "Modern love theme"]
    },
    {
      id: 'mordern-4',
      images: [optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581193/4_v1sqmd.png')],
      title: "Marble Flame Abstract",
      desc: ["Fluid modern art piece", "Soft textured surface", "Inspired by rising flame"]
    },
    {
      id: 'mordern-5',
      images: [optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581192/5_ixlv7u.png')],
      title: "Spiral Modern Accent",
      desc: ["Abstract spiral design", "Smooth marble sculpture", "Contemporary statement piece"]
    },
    {
      id: 'mordern-6',
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581189/6_an500f.png'),
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581178/7_zzsh3f.png')
      ],
      title: "Curved Modern Form",
      desc: ["Textured grey finish", "Open abstract design", "Contemporary table piece"]
    },
    {
      id: 'mordern-7',
      images: [optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581189/8_ipltzu.png')],
      title: "Infinity Twist Sculpture",
      desc: ["Smooth marble curves", "Contemporary infinity shape", "Elegant modern decor"]
    },
    {
      id: 'mordern-8',
      images: [optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581189/9_y86wkx.png')],
      title: "Minimal Ganesha Idol",
      desc: ["Contemporary Ganesha form", "Smooth marble finish", "Calm spiritual accent"]
    },
    {
      id: 'mordern-9',
      images: [optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581206/10_n42nq8.png')],
      title: "Modern Ganesha Silhouette",
      desc: ["Stylized elephant head", "Marble abstract finish", "Spiritual and minimal"]
    },
    {
      id: 'mordern-10',
      images: [
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581205/11_gnakub.png'),
        optimize('https://res.cloudinary.com/dancodp27/image/upload/v1764581208/12_dfibaw.png'),
      ],
      title: "Contemporary Ganesh Idol",
      desc: ["Modern marble Ganesha", "Smooth minimal lines", "Sculptural divine touch"]
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
    setCurrentIndex((prev) => (prev === selectedImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <Wrapper>
      <h1 className="gallery-title">The Modern Artistry Collection</h1>
      <p className="gallery-subtitle">
        Explore innovative craftsmanship where tradition meets modern design
      </p>

      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id} onClick={() => openModal(card)}>
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
