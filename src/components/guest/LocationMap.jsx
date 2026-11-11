import React from "react";
import { MapPin } from "lucide-react";

export default function LocationMap() {
  return (
    <div className="relative w-full ">
      {/* <div className="absolute inset-0 z-0">
        <div className="sticky top-0 w-full h-screen">
          <img 
            src="https://i.pinimg.com/736x/8f/7c/69/8f7c698c97d8b60d064f303827414f75.jpg"
            alt="Location Background" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[px]"></div>
        </div>
      </div> */}
      <div className="relative z-10 w-full px-6 pt-12 pb-32 flex flex-col items-center text-center text-white min-h-screen">
        
        <h2 className="text-3xl font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-1">
          ទីតាំងកម្មវិធី
        </h2>
        
        <p className="text-lg font-bold text-amber-200 mt-6 mb-2 drop-shadow-md">
          ពិធីមង្គលការ និង ពិសារភោជនាហារ
        </p>
        <p className="text-sm text-amber-50 mb-8 drop-shadow-md">
          ភូមិទ្រៀល ឃុំទ្រៀល ស្រុកតាំងគោក ខេត្តកំពង់ធំ
        </p>

        {/* Google Map */}
        <div className="w-full h-72 rounded-2xl overflow-hidden border-4 border-amber-300/40 shadow-[0_8px_30px_rgba(0,0,0,0.5)] mb-8 ">
          <iframe 
            title="Wedding Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995935.6231825214!2d104.96266535000001!3d12.819122449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310de21fe3d2c3ab%3A0x64bcff54ced9347c!2sKampong%20Thom%20Province!5e0!3m2!1sen!2skh!4v1790060922034!5m2!1sen!2skh" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin">
          </iframe>
        </div>

        <a 
          href="https://www.google.com/maps/place/Kampong+Thom+Province" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/95 text-stone-800 font-bold px-8 py-3 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.5)] active:scale-95 transition-transform relative z-10"
        >
          <MapPin size={20} className="text-amber-400/80" />
          មើលទីតាំង
        </a>

      </div>
    </div>
  );
}