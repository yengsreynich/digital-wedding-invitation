import React from "react";

export default function PhotoGallery() {
  const photos = [
    { id: 1, src: "https://i.pinimg.com/736x/90/2b/d3/902bd39bf9b26f34a4212b8c021182fe.jpg", fullWidth: true }, 
    { id: 2, src: "https://i.pinimg.com/1200x/9d/91/c4/9d91c40e656cc22caa09e58516c30b7f.jpg", fullWidth: true }, 
    { id: 3, src: "https://i.pinimg.com/736x/02/9b/3f/029b3fa5669c22466c8dfcd2af45a5d0.jpg", fullWidth: false },
    { id: 4, src: "https://i.pinimg.com/736x/14/3c/8a/143c8a112e9350a2b3c357ac48fcdfae.jpg", fullWidth: false },
    { id: 5, src: "https://i.pinimg.com/736x/e8/37/92/e837927ed48378a0787d71e734660da2.jpg", fullWidth: false },
    { id: 6, src: "https://i.pinimg.com/736x/6e/02/5e/6e025e0a7c4ab5f0540a837b970b848f.jpg", fullWidth: false },
    { id: 7, src: "https://i.pinimg.com/736x/42/3c/d0/423cd07c160ae3decd53ff0616709267.jpg", fullWidth: false },
    { id: 8, src: "https://i.pinimg.com/736x/e3/b9/14/e3b914ca14c473427d5dcdc3b38b056c.jpg", fullWidth: false },
  ];

  return (
    <div className="relative w-full ">
      
      {/* <div className="absolute inset-0 z-0">
        <div className="sticky top-0 w-full h-screen">
          <img 
            src="https://i.pinimg.com/736x/8f/7c/69/8f7c698c97d8b60d064f303827414f75.jpg"
            alt="Gallery Background" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[px]"></div>
        </div>
      </div> */}
      <div className="relative z-10 w-full px-4 pt-12 pb-32 flex flex-col items-center min-h-screen">

        <h2  className="text-3xl font-serif font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-yellow-600 via-yellow-100 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-7">
          វិចិត្រសាល
        </h2>
        <div className="grid grid-cols-2 gap-3 w-full">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className={`relative overflow-hidden rounded-2xl shadow-lg border-2 border-white/10 ${
                photo.fullWidth ? "col-span-2 aspect-video" : "col-span-1 aspect-[0.8]"
              }`}
            >
              <img 
                src={photo.src} 
                alt="Wedding Gallery Item" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}