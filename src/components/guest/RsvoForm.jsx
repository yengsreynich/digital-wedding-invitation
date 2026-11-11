import React, { useState } from "react";
import { Heart, Users, Plus, Minus, User } from "lucide-react";

export default function RsvpForm({ onRefresh }) {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const guestData = {
      name: name,
      attendance: attending,
      guests_count: guestCount,
      message: message
    };

    try {
      const response = await fetch('http://localhost:5000/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(guestData),
      });

      const data = await response.json();

      if (data.success) {
        alert("🎉 សូមអរគុណសម្រាប់ការបញ្ជាក់ការចូលរួម! ទិន្នន័យរក្សាទុកជោគជ័យ។");
        setName("");
        setAttending("");
        setGuestCount(1);
        setMessage("");

        if (onRefresh) {
          onRefresh();
        }
      } else {
        alert("មានបញ្ហាក្នុងការរក្សាទុកទិន្នន័យ សូមព្យាយាមម្ដងទៀត។");
      }
    } catch (error) {
      console.error("Error connection:", error);
      alert("មិនអាចភ្ជាប់ទៅកាន់ Server បានទេ។ សូមប្រាកដថាអូនបានបើក Backend រួចរាល់។");
    }
  };

  return (
    <div className="relative w-full ">
      <div className="relative z-10 w-full px-6 pt-16 pb-32 flex flex-col items-center min-h-screen">
        
        <h2 className="text-3xl font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-7">
          សូមបញ្ជាក់ការចូលរួម
        </h2>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          
          <div>
            <div className="flex items-center gap-2 text-amber-100 mb-2 drop-shadow-md">
              <User size={18} />
              <label className="font-semibold">ឈ្មោះរបស់អ្នក</label>
            </div>
            <input
              type="text"
              required
              placeholder="បញ្ចូលឈ្មោះរបស់អ្នក..."
              className="w-full bg-white/95 text-stone-800 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400 shadow-lg font-medium placeholder:text-stone-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <div className="flex items-center gap-2 text-amber-100 mb-2 drop-shadow-md">
              <Heart size={18} />
              <label className="font-semibold">នឹងចូលរួម</label>
            </div>
            <select
              required
              className="w-full bg-white/95 text-stone-800 rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400 shadow-lg appearance-none font-medium"
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
            >
              <option value="" disabled>សូមជ្រើសរើសការឆ្លើយតប</option>
              <option value="នឹងចូលរួម">ចូលរួម</option>
              <option value="មិនអាចចូលរួមបានទេ">មិនបានចូលរួម</option>
            </select>
          </div>

          <div>
            <div className="flex items-center gap-2 text-amber-100 mb-2 drop-shadow-md">
              <Users size={18} />
              <label className="font-semibold">ចំនួនភ្ញៀវ</label>
            </div>
            <div className="flex items-center justify-between bg-white/95 rounded-full px-2 py-2 shadow-lg">
              <button 
                type="button" 
                onClick={() => setGuestCount(Math.max(1, guestCount - 1))} 
                className="p-3 bg-stone-100 rounded-full text-stone-600 hover:bg-stone-200 active:scale-90 transition-transform"
              >
                <Minus size={18} />
              </button>
              
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-stone-800">{guestCount}</span>
                <span className="text-[10px] text-stone-500 font-bold -mt-0.5">ចំនួនភ្ញៀវ</span>
              </div>
              
              <button 
                type="button" 
                onClick={() => setGuestCount(guestCount + 1)} 
                className="p-3 bg-stone-100 rounded-full text-stone-600 hover:bg-stone-200 active:scale-90 transition-transform"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-amber-100 mb-2 drop-shadow-md">
              <label className="font-semibold">សារជូនពរ</label>
            </div>
            <textarea
              rows="4"
              className="w-full bg-white/10 backdrop-blur-md border border-amber-200/50 rounded-3xl p-4 text-white placeholder:text-white/70 outline-none focus:border-amber-400 shadow-inner"
              placeholder="សារជូនពររបស់អ្នកសរសេរនៅទីនេះ........"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-white/95 text-stone-800 font-bold text-lg py-2 rounded-3xl shadow-[0_4px_15px_rgba(0,0,0,0.5)] mt-3 outline-none focus:ring-2 focus:ring-amber-400"
          >
            <span className="relative z-10">ផ្ញើរ</span>
          </button>

          <p className="text-center text-amber-100 text-sm mt-4 font-medium leading-relaxed drop-shadow-md px-4">
            វត្តមានរបស់លោកអ្នកជាកិត្តិយសដ៏ឧត្តុង្គឧត្តម <br /> របស់គ្រួសារយើងខ្ញុំ។
          </p>

        </form>
      </div>
    </div>
  );
}