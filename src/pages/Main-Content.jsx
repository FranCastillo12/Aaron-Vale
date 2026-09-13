import { useState } from "react";
import "../css/MainContent.css";
import Hero from "../components/Hero";
import CountDown from "../components/CountDown";
import CouplePhoto from "../components/CouplePhoto";
import Itinerary from "../components/Itinerary";
import Details from "../components/Details";
import Activities from "../components/Activities";
import Lodging from "../components/Lodging";
import Gifts from "../components/Gifts";
import Attendance from "../components/Attendance";
import Footer from "../components/Footer";


import audio from "../audioManager";


export default function MainContent() {
   const [playing, setPlaying] = useState(!audio.paused);

    const toggleMusic = () => {
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };


  return (
    <>
      <button
  className="music-toggle"
  onClick={toggleMusic}
  aria-label={playing ? "Pausar música" : "Reproducir música"}
>
  {playing ? (
    // Pausa (||)
    <svg width="18" height="18" viewBox="0 0 24 24"  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="4" width="4" height="16" rx="1"/>
      <rect x="14" y="4" width="4" height="16" rx="1"/>
    </svg>
  ) : (
    // Play (flecha ▶)
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"  xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4v16l14-8L7 4z"/>
    </svg>
  )}
</button>


      <Hero />
      <CountDown fecha="2027-01-16T13:00:00" />
      <CouplePhoto />
      <Itinerary />
      <Details />
      <Activities />
      <Lodging />
      <Gifts />
      <Attendance />
      <Footer />
    </>
  );
}
