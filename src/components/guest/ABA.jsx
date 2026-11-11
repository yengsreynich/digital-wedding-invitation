import React, { useState } from "react";
import { Wallet, Copy, Check } from "lucide-react";
import qrImage from "../../assets/ABA.jpg"; 

export default function ABA() {
  const [isCopied, setIsCopied] = useState(false);
  const bankAccount = "000 123 456"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(bankAccount);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); 
  };

  return (
    <div className="relative w-full">
      <div className="relative z-10 w-full px-6 pb-24 flex flex-col items-center ">

        <div className="flex items-center justify-center text-amber-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <h2 className="text-2xl text-center font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-7 ">ចំណងដៃតាមរយះ <br /> ABA'QR​​</h2>
        </div>
          <div className=" mb-7 w-75 h-auto  flex items-center justify-center">
            <span className="text-stone-400 text-sm font-bold text-center">
              <img src={qrImage} alt="ACLEDA QR" className="w-full h-full object-contain" />
            </span>
          </div>
          
          <div className="w-full bg-white/10 rounded-full p-2 flex items-center justify-between border border-white/20">
            <span className="text-white font-mono text-lg tracking-widest pl-9 whitespace-nowrap  ">
              {bankAccount}
            </span>
            <button 
              onClick={handleCopy}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                isCopied 
                  ? "bg-green-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.5)]" 
                  : "bg-amber-500 text-stone-900 hover:bg-amber-400"
              }`}
            >
              {isCopied ? (
                <>
                  <Check size={16} strokeWidth={3} />
                  <span>Copy</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <p className="text-center text-white text-xs mt-6 leading-relaxed">
            សូមអរគុណយ៉ាងជ្រាលជ្រៅចំពោះ<br/>ចំណងដៃ និងសេចក្ដីស្រលាញ់របស់លោកអ្នក។
          </p>

      </div>
    </div>
  );
}