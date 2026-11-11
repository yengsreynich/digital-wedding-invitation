import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center ">
      
      <div className="w-full  text-amber-100 p-4  mb-10">

        <h3 className="text-xl  font-serif text-center  mb-4 p-4 font-semibold text-transparent bg-clip-text  bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          សេចក្ដីថ្លែងអំណរគុណ និងសូមអភ័យទោស
        </h3>

        <p className="font-serif text-md leading-normal text-justify indent-5">
          យើងខ្ញុំ សូមគោរពថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះវត្តមានដ៏ឧត្តុង្គឧត្តមរបស់ សម្តេច 
          ឯកឧត្តម លោកជំទាវ លោកោកស្រី អ្នកនាង កញ្ញា ក្នុងសិរីមង្គលអាពាហ៍ពិពាហ៍ កូនប្រុស
           កូនស្រី រួបយើងខ្ញុំានពេលខាងមុខនេះ។ យើងខ្ញុំសុំការអភ័យទោសផងដែរ ករណីដែលយើងខ្ញុំ
           ពុំបានជូនលិខិតអញ្ជើញនេះដោយផ្ទាល់ ឬចំពោះកំហុសឆ្គងក្នុងការសរសេរឈ្មោះ។ សូមមេត្តា
           ទទួលស្វាគមន៍នូវសេចក្តីគោរពដ៏ខ្ពង់ខ្ពស់ពីយើងខ្ញុំ។
        </p>
      </div>

      <div className="flex items-center gap-3 font-semibold text-transparent bg-clip-text  bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] text-sm mb-3">
        <span>✦</span>
        <span>❀</span>
        <span>✦</span>
      </div>

      <div className="font-serif text-center">
        <p className="text-xl font-semibold text-transparent bg-clip-text  bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]d">
          យ៉េង វណ្ណ​ដេត & រ៉ុន រ៉ាឌី
        </p>
        <p className="text-xs text-amber-100 mt-1">
          ថ្ងៃមេសា ទី២៥ ខែមេសា ឆ្នាំ២០២៧
        </p>
      </div>

      <div className="flex items-center gap-1.5 text-xs tracking-wider text-amber-100/60 mt-4 font-sans">
        <span>Made with</span>
        <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
        <span>by Next</span>
      </div>

    </footer>
  );
}