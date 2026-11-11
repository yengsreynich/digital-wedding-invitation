import React from "react";
import { INITIAL_WEDDING_DATA } from "../../assets/weddingData.js";
import { ChevronDown } from "lucide-react";

export default function HeroCover() {
  return (
    <div className="relative w-full h-screen  bg-stone-900 overflow-hidden flex flex-col items-center select-none shadow-2xl">

<div className="absolute inset-0 z-0 overflow-hidden">
  <div className="sticky top-0 left-0 w-full h-screen">
    <img 
      src="https://i.pinimg.com/1200x/93/98/56/9398569018cecce02bf3d8e64fd71d1e.jpg" 
      alt="Background" 
      className="w-full h-full object-cover" 
    />
    <div className="absolute inset-0 bg-black/10 "></div>
  </div>
</div>


      <div className="relative z-10 pt-16 flex flex-col items-center w-full px-4 text-center">
        <h1 className="text-3xl font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-1">
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h1>
        
        <p className="mt-3 text-sm text-amber-200/90 font-serif tracking-widest drop-shadow-md">
          {INITIAL_WEDDING_DATA.displayDate}
        </p>
        
        <div className="mt-6   flex items-center justify-center">
          <span className="text-3xl font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-1">
            ដ<span className="text-sm px-1">&amp;</span>ឌ
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 z-10 flex flex-col items-center animate-bounce opacity-80">
        <span className="font-semibold text-transparent bg-clip-text  bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          អូសចុះក្រោម</span>
        <ChevronDown size={24} className="text-amber-400" />
      </div>

    </div>
  );
}