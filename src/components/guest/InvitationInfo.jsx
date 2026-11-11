import React from "react";
import { Calendar, MapPin, Image as ImageIcon } from "lucide-react";

export default function InvitationInfo() {
  return (
    <div className="relative w-full min-h-screen pb-0 flex flex-col items-center text-center overflow-hidden">
      <div className="w-full px-6 pt-7 relative z-10 text-text-white-50">
        <h2 className="text-3xl font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-7">
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h2>
        <div className="grid grid-cols-2 gap-4 text-sm font-semibold tracking-wide drop">
          <div className="flex flex-col gap-2">
            <span>លោក ឡាញ់ ធី</span>
            <span>លោកស្រី ថូ ចាន់ណា</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>លោក យ៉ាន់ សារ៉ាត់</span>
            <span>លោកស្រី ភុំ សុខងន</span>
          </div>
        </div>

        <p className="mt-8 text-sm leading-relaxed drop-shadow-md px-2">
          យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ
          <br /><br />
          ឯកឧត្តម លោកជំទាវ លោកអ្នកឧកញ៉ា អ្នកឧកញ៉ា ឧកញ៉ា លោក លោកស្រី អ្នកនាង កញ្ញា និងប្រិយមិត្ត
          <br /><br />
          អញ្ជើញចូលរួមជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្ដី ក្នុងពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍កូនប្រុស កូនស្រី របស់យើងខ្ញុំ
        </p>
      </div>

      <div className="my-8 flex flex-col items-center justify-center">
        <span className="text-3xl font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-1">
          ដ <span className="text-3xl text-amber-300 font-light mx-3">❤️</span> ឌ
        </span>
      </div>

      <div className="w-full px-6 grid grid-cols-2 gap-4 text-center drop-shadow-md">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-transparent bg-clip-text  bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-2">កូនប្រុសនាម</span>
          <span className="text-xl font-semibold text-transparent bg-clip-text  bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">យ៉េង វណ្ណដេត</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-transparent bg-clip-text  bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-2">កូនស្រីនាម</span>
          <span className="text-xl font-semibold text-transparent bg-clip-text  bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">រ៉ុន រ៉ាឌី</span>
        </div>
      </div>

      <div className="w-full px-6 mt-10 text-sm leading-relaxed drop-shadow-md">
        <p>ដែលនឹងប្រព្រឹត្តទៅនៅថ្ងៃអាទីត្យ ៧ កើត ខែផល្គុន ឆ្នាំម្សាញ់ សប្តស័ក ព.ស.២៥៦៩</p>
        <p className="mt-7 font-semibold text-transparent bg-clip-text  bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          ត្រូវនឹងថ្ងៃទី២៥ ខែមេសា ឆ្នាំ២០២៧ វេលាម៉ោង ០៥:០០ នាទីល្ងាច
        </p>
        <p className="mt-7 text-xs text-amber-100/90">
          ស្ថិតនៅភូមិទ្រៀល ឃុំទ្រៀល ស្រុកតាំងគោក ខេត្តកំពង់ធំ ដោយមេត្រីភាព។ <br /> សូមអរគុណ!
        </p>
      </div>

    </div>
  );
}