import React from "react";
import { Heart } from "lucide-react"; // romantic heart icon

export default function BirthdayCard({ message, currentIndex, totalMessages }) {
  return (
    <div
      className="relative w-11/12 max-w-md h-[220px] sm:h-[250px] md:h-[280px] 
      bg-gradient-to-br from-pink-300 via-pink-200 to-purple-200 
      rounded-2xl shadow-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center 
      border-2 border-pink-400 animate-pulse"
    >
      {/* Floating hearts in corners */}
      <Heart
        className="absolute top-2 left-2 sm:top-3 sm:left-3 text-pink-500 animate-bounce"
        size={20}
      />
      <Heart
        className="absolute top-2 right-2 sm:top-3 sm:right-3 text-red-500 animate-ping"
        size={18}
      />
      <Heart
        className="absolute bottom-2 left-4 sm:bottom-3 sm:left-6 text-rose-500 animate-bounce"
        size={16}
      />
      <Heart
        className="absolute bottom-2 right-4 sm:bottom-3 sm:right-6 text-pink-600 animate-pulse"
        size={20}
      />

      {/* Counter */}
      <div className="absolute top-1 sm:top-2 text-xs sm:text-sm text-pink-700 font-semibold">
        Message {currentIndex + 1} of {totalMessages}
      </div>

      {/* Romantic message */}
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-pink-800 drop-shadow-md leading-relaxed">
        {message}
      </p>

      {/* Subtext */}
      <span className="mt-2 sm:mt-3 text-sm sm:text-lg italic text-pink-700">
        💕 With all my love 💕
      </span>
    </div>
  );
}
