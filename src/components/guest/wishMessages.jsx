import React, { useState, useEffect } from "react";
import { User } from "lucide-react";

export default function WishMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/rsvp');
        const result = await response.json();
        
        if (result.success) {
          setMessages(result.data); 
        }
      } catch (error) {
        console.error("មានបញ្ហាក្នុងការទាញទិន្នន័យសារ:", error);
      }
    };

    fetchMessages();
  }, []); 

  return (
    <div className="relative w-full ">

      <div className="relative z-10 w-full px-6 pt-12 pb-32 flex flex-col items-center min-h-screen text-center">

        <div className="flex items-center justify-center gap-2 mb-10 text-amber-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <h2 className="text-3xl font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-1">ពាក្យជូនពរ</h2>
        </div>

        <div className="w-full flex flex-col gap-6">
          
          {messages.length > 0 ? (
            messages.map((msg) => (
              <div 
                key={msg.id} 
                className="bg-linear-to-b from-white/40 to-white/10 backdrop-blur-lg border border-white/50 rounded-3xl p-6 flex flex-col items-center shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
              > 
                <div className="flex items-center gap-2 mb-1">
                  <User size={20} className="text-stone-900" />
                  <h3 className="font-bold text-lg text-stone-900">
                    {msg.name} 
                  </h3>
                </div>
                
                <p className="text-[11px] text-stone-700 font-bold mb-4">
                  {new Date(msg.created_at).toLocaleString('km-KH', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit', 
                    minute: '2-digit'
                  })}
                </p>
                
                <p className="text-sm text-stone-900 font-semibold leading-relaxed text-center">
                  "{msg.message}"
                </p>

              </div>
            ))
          ) : (
            <p className="text-stone-700 text-sm italic">មិនទាន់មានសារជូនពរនៅឡើយទេ... អ្នកអាចជាភ្ញៀវដំបូងគេ!</p>
          )}

        </div>
      </div>
    </div>
  );
}