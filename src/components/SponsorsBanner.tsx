import React from "react";
import Dsyc from "../assets/dsyc.png";
import Ewer from "../assets/ewer.png";
import Pandor1 from "../assets/pandor.png";
import Chilbiz from "../assets/chilbiz.png";
import Pandor2 from "../assets/pandor-2.png";
import TechSpayc from "../assets/tech-spayc.png";

const logos = [
  { src: Dsyc, alt: "Partner Logo 1" },
  { src: Ewer, alt: "Partner Logo 2" },
  { src: Pandor1, alt: "Partner Logo 3" },
  { src: Chilbiz, alt: "Partner Logo 4" },
  { src: Pandor2, alt: "Partner Logo 5" },
  { src: TechSpayc, alt: "Partner Logo 6" },
];

export default function SponsorsBanner() {
  return (
    <section className="w-full rounded-2xl overflow-hidden bg-[#EFEFEF] px-6 py-8">
      {/* Animated scrolling container */}
      <div className="animate-scroll flex w-max">
        {/* Original logos */}
        {logos.map((logo, idx) => (
          <div
            key={`logo-1-${idx}`}
            className="mx-8 flex min-w-[100px] items-center justify-center md:min-w-[150px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto object-contain opacity-80 transition-all hover:opacity-100 md:h-12"
            />
          </div>
        ))}
        
        {/* Duplicate for seamless looping */}
        {logos.map((logo, idx) => (
          <div
            key={`logo-2-${idx}`}
            className="mx-8 flex min-w-[100px] items-center justify-center md:min-w-[150px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto object-contain opacity-80 transition-all hover:opacity-100 md:h-12"
            />
          </div>
        ))}
      </div>

      {/* Add this CSS to your global styles or CSS module */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}