import styled from "styled-components";

const Wrapper = styled.section`
  padding: 100px 0px;
  background: linear-gradient(180deg, #F8F8F8, #efefefff);
  color: #333;
  text-align: center;
  width: 100%;
  overflow-x: hidden;

  .gallery-title {
    font-size: 3rem;
    font-family: "Georgia", serif;
    margin-bottom: 15px;
    letter-spacing: 2px;
    color: #7a5c3d;
    position: relative;
    display: inline-block;
  }

  .gallery-title::before,
  .gallery-title::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #d4a15e, transparent);
  }

  .gallery-title::before { left: -80px; }
  .gallery-title::after {
    right: -80px;
    background: linear-gradient(90deg, transparent, #d4a15e);
  }

  .gallery-subtitle {
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto 50px;
    color: #6b5a5a;
    line-height: 1.6;
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10px;
  }

  .card {
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
  }

  .card-image-container {
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    overflow: hidden;
  }

  .card-image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain; /* show full image */
    transition: transform 0.6s ease;
    background-color: #f8f8f8;
  }

  .card:hover img {
    transform: scale(1.05);
  }

  /* ✅ Bottom Hover Overlay */
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 15px 20px;
    text-align: left;
    opacity: 0;
    transform: translateY(100%);
    transition: transform 0.4s ease, opacity 0.4s ease;
  }

  .card:hover .overlay {
    opacity: 1;
    transform: translateY(0);
  }

  .overlay h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: #d4a15e;
  }

  .card-points {
    list-style: disc;
    padding-left: 20px;
    margin: 0;
  }

  .card-points li {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 5px;
  }

  .image-count {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: bold;
    z-index: 2;
  }

  /* Modal Styles (no change) */
  .modal {
    position: fixed;
    top: 20px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    flex-direction: column;
    animation: fadeIn 0.4s ease-in-out;
  }

  .modal-content {
    max-width: 90%;
    max-height: 80%;
    border-radius: 10px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    animation: zoomIn 0.3s ease-in-out;
  }

  .modal-info {
    position: absolute;
    bottom: 20px;
    left: 20px;
    max-width: 350px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: left;
    backdrop-filter: blur(5px);
    animation: fadeIn 0.5s ease-in-out;
    z-index: 1001;
  }

  .modal-info h3 {
    margin-top: 0;
    font-size: 1.5rem;
    border-bottom: 2px solid #d4a15e;
    padding-bottom: 8px;
  }

  .modal-info ul {
    list-style: none;
    padding: 0;
    margin-top: 10px;
  }

  .modal-info ul li {
    margin-bottom: 5px;
    font-size: 1rem;
    line-height: 1.5;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 35px;
    color: white;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1000;
    transition: transform 0.3s ease;
  }

  .close:hover {
    transform: rotate(90deg);
    color: #d4a15e;
  }

  .prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 2.5rem;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    z-index: 1000;
    border-radius: 50%;
    transition: background 0.3s ease, transform 0.3s ease;
    font-family: sans-serif;
  }

  .prev:hover, .next:hover {
    background: rgba(212, 161, 94, 0.9);
    transform: translateY(-50%) scale(1.1);
  }

  .prev { left: 30px; }
  .next { right: 30px; }

  .dot-container {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 1000;
  }

  .dot {
    height: 10px;
    width: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .dot:hover { transform: scale(1.2); }
  .dot.active { background-color: #d4a15e; transform: scale(1.2); }

  @keyframes zoomIn {
    from { transform: scale(0.6); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  @media (max-width: 768px) {
    .overlay h3 { font-size: 1rem; }
    .card-points li { font-size: 0.8rem; }
  }

  
`;

export default Wrapper;
