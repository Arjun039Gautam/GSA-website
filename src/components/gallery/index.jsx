// Gallery.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Wrapper from "./style";
import { Link } from "react-router-dom";

const Gallery = () => {
  const cards = [
    { id: 1, img: 'https://res.cloudinary.com/dancodp27/image/upload/v1764581689/11_qkknjd.png', title: "Divine Gods", desc: "Tap for more", link: "/god-collection" },
    { id: 2, img: 'https://res.cloudinary.com/dancodp27/image/upload/v1764581862/1_jnoyic.png', title: "Lion Pride", desc: "Tap for more", link: "/lion-collection" },
    { id: 3, img: 'https://res.cloudinary.com/dancodp27/image/upload/v1764581731/1_kdbdjz.png', title: "Royal Horses", desc: "Tap for more", link: "/horse-collection" },
    { id: 4, img: 'https://res.cloudinary.com/dancodp27/image/upload/v1764581308/6_jmiqwi.png', title: "Sacred Cows", desc: "Tap for more", link: "/cow-collection" },
    { id: 5, img: 'https://res.cloudinary.com/dancodp27/image/upload/v1764581511/8_mij93r.png', title: "Majestic Elephants", desc: "Tap for more", link: "/elephant-collection" },
    { id: 6, img: 'https://res.cloudinary.com/dancodp27/image/upload/v1764581409/8_ty4dxm.png', title: "Faithful Dogs", desc: "Tap for more", link: "/dog-collection" },
    // { id: 7, img: horseImg, title: "Lucky Tortoise", desc: "Tap for more", link: "/tortoise-collection" },
    { id: 8, img: 'https://res.cloudinary.com/dancodp27/image/upload/v1764581171/1_jyi1ax.png', title: "Modern Creations", desc: "Tap for more", link: "/modern-art-collection" },
    { id: 9, img: 'https://res.cloudinary.com/dancodp27/image/upload/v1764581750/3_ijkt1e.png', title: "Wall Panels", desc: "Tap for more", link: "/panel-collection" },
    // { id: 10, img: horseImg, title: "Creative Touch", desc: "Tap for more", link: "/creative-collection" },
  ];

  return (
    <Wrapper>
      <h1 className="gallery-title">OUR MARBLE COLLECTION</h1>
      <p className="gallery-subtitle">
        Discover a world of timeless craftsmanship, where each piece is a work of art.
      </p>

      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}   // ✅ Show 3 cards on laptop
          loop={true}         // ✅ Infinite loop
          navigation={true}   // ✅ Prev/Next buttons
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },      // ✅ Mobile
            600: { slidesPerView: 2 },    // ✅ Tablet
            992: { slidesPerView: 3 },    // ✅ Laptop
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <Link to={card.link} style={{ textDecoration: "none" }}>
                <div className="card">
                  <div className="card-image-container">
                    <img src={card.img} alt={card.title} />
                  </div>
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Gallery;
