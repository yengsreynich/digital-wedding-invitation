import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react"; // 1 import icon for music
import bgMusic from "../assets/ពន្លឺច័ន្ទថ្លា - Noly Record.mp3"; // 2 import file song

import WelcomeCover from "../components/guest/WelcomeCover.jsx";
import HeroCover from "../components/guest/HeroCover.jsx";
import InvitationInfo from "../components/guest/InvitationInfo.jsx";
import WeddingTimeline from "../components/guest/WeddingTimeLine.jsx";
import LocationMap from "../components/guest/LocationMap.jsx";
import PhotoGallery from "../components/guest/photoGallery.jsx";
import CountdownTimer from "../components/guest/CountdownTimer.jsx";
import RsvpForm from "../components/guest/RsvoForm.jsx";
import WishMessages from "../components/guest/wishMessages.jsx";
import DigitalGift from "../components/guest/DigitalGift.jsx";

export default function GuestPage({ rsvps, onAddRsvp }) {
  const [isOpened, setIsOpened] = useState(false);
  
  // add State and Ref សម្រាប់គ្រប់គ្រងសំឡេង
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  //  open song / close song fumction
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // open sombot
  const handleOpenInvitation = () => {
    setIsOpened(true); 
    setIsPlaying(true); 
    if (audioRef.current) {
      audioRef.current.play(); 
    }
  };

  return (
    <div className="min-h-screen bg-[#1a0508] text-amber-100 font-sans relative">

      <audio ref={audioRef} loop>
        <source src={bgMusic} type="audio/mpeg" />
      </audio>
      <button 
        onClick={toggleMusic} 
        className="fixed top-4 right-4 z-60 w-10 h-10 bg-black/40 backdrop-blur-md border border-amber-500/50 rounded-full flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all hover:scale-105 cursor-pointer"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      {!isOpened ? (
        <WelcomeCover 
          onOpen={handleOpenInvitation} 
          guestName="លោកស្រី  និង ស្វាមី" 
        />
      ) : (
        <div className="w-full animate-fade-in transition-opacity duration-1000">
          <HeroCover />
          <WeddingTimeline/>
        </div>
      )}
    </div>
  );
}