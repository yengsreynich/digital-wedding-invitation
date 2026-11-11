import React from "react";
import {Landmark, Flower, Wheat, Utensils, UtensilsCrossed , UserGroup, Theater, HandHeart,Scissors, Flame, Wine,Gift, WheatIcon } from "lucide-react";
import bgImage from "../../assets/bg (2).jpg";
import PhotoGallery from "./photoGallery";
import CountdownTimer from "./CountdownTimer";
import RsvpForm from "./RsvoForm";
import DigitalGift from "./DigitalGift";
import WishMessages from "./wishMessages";
import LocationMap from "./LocationMap";
import InvitationInfo from "./InvitationInfo";
import ABA from "./ABA";
import Footer from "./Footer";


export default function WeddingTimeline() {
  const day1 = [
    { time: "២:០០ រសៀល", title: "ពិធីសែនក្រុងពាលី", icon: Landmark },
    { time: "៣:០០ រសៀល", title: "ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត", icon: Theater },
    { time: "៤:០០ រសៀល", title: "ពិធីចងខាន់ស្លា", icon:WheatIcon },
    { time: "៥:០០ ល្ងាច", title: "អញ្ជើញភ្ញៀវកិត្តិយសពិសារអាហារ", icon:UtensilsCrossed 

    },
  ];

  const day2 = [
    { time: "៦:៣០ ព្រឹក", title: "ជួបជុំភ្ញៀវកិត្តិយស", icon: UserGroup},
    { time: "៧:០០ ព្រឹក", title: "ពិធីហែរជំនូន ", icon: Gift},
    { time: "៨:៣០ ព្រឹក", title: "ពិធីបំពាក់ចិញ្ចៀន", icon: HandHeart},
    { time: "៩:៣០ ព្រឹក", title: "ពិធីកាត់សក់បង្កក់សិរី",icon: Scissors},
    { time: "១០:៣០ ព្រឹក", title: "ពិធីបង្វិលពពិល សំពះផ្ទឹម ចងដៃ", icon: Flame },
    { time: "១១:៣០ ថ្ងៃត្រង់", title: "អញ្ជើញភ្ញៀវកិត្តិយសពិសារភោជនាហារ", icon:UtensilsCrossed  },
    { time: "០៥:០០ ល្ងាច", title: "អញ្ជើញភ្ញៀវកិត្តិយសពិសារភោជនាហារ", icon: Wine },
  ];

  const renderTimeline = (schedule) => (
    <div className="relative mt-10 mb-12 w-full max-w-md mx-auto">

      <div className="absolute left-1/2 top-0 bottom-0 w-2px bg-amber-100/20 transform -translate-x-1/2"></div>

      {schedule.map((item, index) => {
        const isLeft = index % 2 === 0;
        const IconComponent = item.icon;

        return (
          <div key={index} className={`flex w-full mb-10 relative items-center ${isLeft ? "justify-start" : "justify-end"}`}>

            <div className={`w-1/2 relative ${isLeft ? "pr-6 text-right" : "pl-6 text-left"} flex flex-col items-center`}>
              
              <div className="flex flex-col items-center text-center">

                {IconComponent && <IconComponent className="w-6 h-6 text-amber-200 mb-1" />}
                <p className="font-bold font-serif text-lg text-amber-200 drop-shadow-md">{item.time}</p>

                <p className="text-sm mt-1 text-amber-50 leading-relaxed text-center">{item.title}</p>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );

  return (

    <div className="relative w-full  min-h-screen">
      
      <div className="absolute inset-0 z-0">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
          <img
            src={bgImage}
            alt="Timeline Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[px]"></div>
        </div>
      </div>
      <InvitationInfo/>
      <CountdownTimer/>
      <div className="relative z-10 w-full px-4 pt-12 pb-32 flex flex-col items-center">
        
        <h2 className="text-3xl font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-7">
          របៀបវារៈកម្មវិធី
        </h2>

        <div className="w-full">
          <h3 className="text-center font-bold text-amber-100 text-lg drop-shadow-md">
            ថ្ងៃសៅរ៏ ទី២៤ ខែកុម្ភៈ ឆ្នាំ២០២៧
          </h3>
          {renderTimeline(day1)}
        </div>

        <div className="w-full mt-8">
          <h3 className="text-center font-bold text-amber-100 text-lg drop-shadow-md">
            ថ្ងៃអាទិត្យ ទី២៥ ខែកុម្ភៈ ឆ្នាំ២០២៧
          </h3>
          {renderTimeline(day2)}
        </div>
        <PhotoGallery/>
        <RsvpForm/>
        <LocationMap/>
        <DigitalGift/>
        <ABA/>
        <WishMessages/>
        <Footer/>
        
      </div>
    </div>
  );
}
