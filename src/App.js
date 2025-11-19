import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Footer from "./components/footer";
import OurStory from "./components/our-story";
import LionCollecton from "./components/lion-collection";
import HorseCollection from "./components/horse-collection";
import CowCollection from './components/cow-collection'
import GodStatueCollection from './components/God-statues-collection'
import ElephantCollection from './components/elephant-collection'
import CreativeCollection from './components/creative-collection'
import DogCollection from './components/dog-collection'
import PanelCollection from './components/panel-collection'
import TortoiseCollection from './components/tortoise-collection'
import MordernArtCollection from './components/mordern-art-collection'
import MasterPeicesCollection from './components/master-peices-collection'
import ScrollToTop from "./components/scrolltotop";
import WhatsAppButton from "./components/whatsapp";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/lion-collection" element={<LionCollecton />} />
        <Route path="/horse-collection" element={<HorseCollection />} />
        <Route path="/cow-collection" element={<CowCollection />} />
        <Route path="/god-collection" element={<GodStatueCollection />} />
        <Route path="/elephant-collection" element={<ElephantCollection />} />
        <Route path="/panel-collection" element={<PanelCollection />} />
        <Route path="/dog-collection" element={<DogCollection />} />
        <Route path="/modern-art-collection" element={<MordernArtCollection />} />
        <Route path="/tortoise-collection" element={<TortoiseCollection />} />
        <Route path="/master-collection" element={<MasterPeicesCollection />} />
        <Route path="/creative-collection" element={<CreativeCollection />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
