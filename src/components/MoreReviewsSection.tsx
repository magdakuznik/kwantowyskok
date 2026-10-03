import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import opinia9Img from './opinia9.jpeg';
import opinia10Img from './opinia10.jpeg';
import opinia11Img from './opinia11.jpeg';
import opinia12Img from './opinia12.jpeg';
import opinia13Img from './opinia13.jpeg';
import opinia14Img from './opinia14.jpeg';
import opinia15Img from './opinia15.jpeg';
import opinia16Img from './opinia16.jpeg';

export const MoreReviewsSection: React.FC = () => {
  const [activeReviewImg, setActiveReviewImg] = useState<string | null>(null);

  const reviews = [
    { src: opinia9Img, alt: "Opinia o warsztatach 9" },
    { src: opinia10Img, alt: "Opinia o warsztatach 10" },
    { src: opinia11Img, alt: "Opinia o warsztatach 11" },
    { src: opinia12Img, alt: "Opinia o warsztatach 12" },
    { src: opinia13Img, alt: "Opinia o warsztatach 13" },
    { src: opinia14Img, alt: "Opinia o warsztatach 14" },
    { src: opinia15Img, alt: "Opinia o warsztatach 15" },
    { src: opinia16Img, alt: "Opinia o warsztatach 16" },
  ];

  return (
    <section 
      id="wiecej-opinii" 
      className="bg-[#F5E5D6] py-20 sm:py-28 px-6 border-t border-[#9C1B33]/15 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#9C1B33] tracking-tight uppercase text-balance">
            WIĘCEJ OPINII
          </h2>
        </div>

        {/* Siatka 8 screenów opinii */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {reviews.map((opinia, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveReviewImg(opinia.src)}
              className="group relative bg-[#ebd9c7]/50 p-2 sm:p-3 rounded-2xl sm:rounded-3xl border border-[#9C1B33]/20 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden"
            >
              <img 
                src={opinia.src} 
                alt={opinia.alt} 
                className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xs group-hover:scale-[1.01] transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#9C1B33]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl sm:rounded-3xl">
                <span className="p-3 rounded-full bg-[#F5E5D6]/90 text-[#9C1B33] shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal podglądu powiększonej opinii */}
      {activeReviewImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveReviewImg(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[92vh] bg-[#F5E5D6] p-3 sm:p-5 rounded-3xl border border-[#9C1B33]/30 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveReviewImg(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#9C1B33] text-[#F5E5D6] flex items-center justify-center shadow-lg hover:bg-[#831429] transition-colors z-20 cursor-pointer"
              aria-label="Zamknij podgląd"
            >
              <X className="w-5 h-5 shrink-0" />
            </button>
            <img 
              src={activeReviewImg} 
              alt="Powiększona opinia" 
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-2xl shadow-sm"
            />
          </div>
        </div>
      )}
    </section>
  );
};
