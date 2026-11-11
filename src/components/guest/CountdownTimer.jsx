import React, { useState, useEffect } from "react";
import { Calendar, Bell } from "lucide-react";

export default function CountdownTimer() {
  const targetDate = new Date("2027-04-25T17:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const toKhmerNum = (num) => {
    const khmerNumbers = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
    const strNum = num < 10 ? `0${num}` : num.toString();
    return strNum.split("").map((digit) => khmerNumbers[digit] || digit).join("");
  };
  const handleGoogleCalendar = () => {
    const title = "ពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍ យ៉េង វណ្ណដេត & រ៉ុន រ៉ាឌី";
    const details = "សូមគោរពអញ្ជើញលោកអ្នក និងក្រុមគ្រួសារចូលរួមក្នុងពិធីអបអរសាទរដ៏វិសេសវិសាលរបស់យើងខ្ញុំ!";
    const location = "ភ្នំពេញ, ប្រទេសកម្ពុជា";
    const eventDate = "20270425/20270425";

    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${eventDate}&details=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent(location)}`;
    
    window.open(googleUrl, "_blank");
  };
  const handleDownloadICS = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "SUMMARY:ពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍ យ៉េង វណ្ណដេត & រ៉ុន រ៉ាឌី",
      "DESCRIPTION:សូមគោរពអញ្ជើញលោកអ្នក និងក្រុមគ្រួសារចូលរួមក្នុងពិធីអបអរសាទរដ៏វិសេសវិសាលរបស់យើងខ្ញុំ!",
      "LOCATION:ភ្នំពេញ, ប្រទេសកម្ពុជា",
      "DTSTART;VALUE=DATE:20270425",
      "DTEND;VALUE=DATE:20270426",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "wedding-vandeth-radi.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full">
      <div className="relative z-10 w-full px-6 py-20 flex flex-col items-center justify-center">

        <div className="items-center text-center pb-10">
          <h3 className="text-3xl font-serif font-bold inline-block text-transparent bg-clip-text bg-winver-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-2">មេសា​២០២៧</h3>
          <p className="text-xs text-amber-100 mb-4">ផល្គុន​ - ចេត្រ ឆ្នាំមមែ ព.ស.២៥៧០</p>
          
          <div className="grid grid-cols-7 gap-2 text-xs font-semibold text-transparent bg-clip-text bg-winver-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-2">
            <span>អាទិត្យ</span>
            <span>ចន្ទ័</span>
            <span>អង្គារ</span>
            <span>ពុធ</span>
            <span>ព្រហ</span>
            <span>សុក្រ</span>
            <span>សោរ៍</span>
          </div>

          <div className="grid grid-cols-7 gap-2 text-sm text-amber-100 mb-6 font-medium">
            <span className="text-stone-300">28</span>
            <span className="text-stone-300">29</span>
            <span className="text-stone-300">30</span>
            <span className="text-stone-300">31</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>

            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>

            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>

            <span>18</span>
            <span>19</span>
            <span>20</span>
            <span>21</span>
            <span>22</span>
            <span>23</span>
            <span>24</span>

            <span className="bg-white text-black font-bold rounded-full w-7 h-6 flex items-center justify-center mx-auto">25</span>
            <span>26</span>
            <span>27</span>
            <span>28</span>
            <span>29</span>
            <span>30</span>
            <span className="text-stone-300">1</span>
          </div>
          <div className="w-full flex justify-center">
            <button 
              onClick={handleGoogleCalendar}
              className="w-auto px-4 bg-white/20 mb-4 items-center text-amber-100 hover:bg-white/30 font-bold py-2.5 rounded-full transition-all flex justify-center gap-2 cursor-pointer border border-amber-400/40"
            >
              <Bell size={18} className="text-amber-300" />
              <span className="font-serif font-bold">រំលឹកខ្ញុំ</span>
            </button>
          </div>
          <button 
            onClick={handleDownloadICS}
            className="w-full bg-white/90 hover:bg-white text-stone-900 font-bold py-3 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Calendar size={18} />
            <span className="font-serif font-bold">រក្សាទុកក្នុងប្រតិទិន</span>
          </button>
        </div>

        {/* Countdown */}
        <div className="p-6 w-full flex flex-col items-center">
          <h3 className="text-amber-100 text-sm font-semibold mb-2 drop-shadow-md">
            see you soon
          </h3>
          
          <h2 className="text-3xl font-serif font-bold inline-block text-transparent bg-clip-text bg-winver-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-5">
            រាប់ថយក្រោយ
          </h2>

          <div className="flex gap-2 w-full justify-between mb-6">
            <div className="bg-white/90 rounded-2xl w-full py-3 flex flex-col items-center shadow-lg">
              <span className="text-xl font-bold text-stone-800">{toKhmerNum(timeLeft.days)}</span>
              <span className="text-[11px] font-bold text-stone-600 mt-1">ថ្ងៃ</span>
            </div>

            <div className="bg-white/90 rounded-2xl w-full py-3 flex flex-col items-center shadow-lg">
              <span className="text-2xl font-bold text-stone-800">{toKhmerNum(timeLeft.hours)}</span>
              <span className="text-[11px] font-bold text-stone-600 mt-1">ម៉ោង</span>
            </div>

            <div className="bg-white/90 rounded-2xl w-full py-3 flex flex-col items-center shadow-lg">
              <span className="text-2xl font-bold text-stone-800">{toKhmerNum(timeLeft.minutes)}</span>
              <span className="text-[11px] font-bold text-stone-600 mt-1">នាទី</span>
            </div>

            <div className="bg-white/90 rounded-2xl w-full py-3 flex flex-col items-center shadow-lg">
              <span className="text-2xl font-bold text-stone-800">{toKhmerNum(timeLeft.seconds)}</span>
              <span className="text-[11px] font-bold text-stone-600 mt-1">វិនាទី</span>
            </div>
          </div>

          <p className="text-amber-100 font-bold drop-shadow-md text-sm mt-2">
            ថ្ងៃទី២៥ ខែមេសា ឆ្នាំ២០២៧
          </p>
        </div>

      </div>
    </div>
  );
}