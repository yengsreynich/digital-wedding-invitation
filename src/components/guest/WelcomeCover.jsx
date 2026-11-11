import React from "react";
import { useSearchParams } from "react-router-dom";
import { Volume2, Play } from "lucide-react";

export default function WelcomeCover({ onOpen }) {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to") ? decodeURIComponent(searchParams.get("to")) : "ភ្ញៀវកិត្តិយស";

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-between select-none">
      <div className="absolute inset-0">
        <div className="h-screen">
          <img
            src="https://i.pinimg.com/736x/8f/7c/69/8f7c698c97d8b60d064f303827414f75.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

      {/* Button play music */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button className="w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center text-white shadow-lg">
          <Volume2 size={16} />
        </button>
      </div>

      <div className="pt-28 z-10 text-center">
        <h1 className="text-3xl font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-1">
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h1>
        
        {/* Names */}
        <div className="mt-6 flex flex-col items-center justify-center">
          <span className="text-xl font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mt-4">
            ​យ៉េង វណ្ណដេត
          </span>

          <span className="text-xl font-serif font-bold bg-linear-to-r from-amber-700 via-yellow-400 to-amber-500 inline-block text-transparent bg-clip-text drop-shadow-md mt-4">
            &amp;
          </span>

          <span className="text-xl font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mt-4">
            រ៉ុន រ៉ាឌី
          </span>
        </div>
      </div>

      {/* Guest name and button */}
      <div className="relative z-10 pb-12 flex flex-col items-center w-full px-6">
        <p className="text-xl font-serif font-bold inline-block text-transparent bg-clip-text bg-lineart-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-3">
          សូមគោរពអញ្ជើញ
        </p>

        <div className="w-80 bg-white/90 backdrop-blur-md rounded-2xl py-3 px-4 shadow-[0_5px_20px_rgba(0,0,0,0.5)] text-center relative mb-6 border border-amber-500/30">
          <h2 className="text-stone-900 text-lg md:text-xl font-bold font-serif">
            {guestName}
          </h2>
        </div>

        {/* Play Button */}
        <button onClick={onOpen} className="flex flex-col items-center gap-2 group cursor-pointer">
          <div className="w-14 h-14 rounded-full border-2 border-amber-400 bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-400 group-hover:scale-105 group-active:scale-95 transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)]">
            <Play size={24} className="ml-1 fill-amber-400" />
          </div>
          <span className="text-xl font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mt-2">
            បើកសំបុត្រ
          </span>
        </button>
      </div>
    </div>
  );
}