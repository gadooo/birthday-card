import React, { useState, useMemo } from "react";
import BirthdayCard from "./components/BirthdayCard";
import "./HeartsBackground.css";

function App() {
  const messages = [
    "🎉 Happy Birthday, my love! 🎂",
    "💖 You make my life so beautiful 💖",
    "✨ Wishing you joy, laughter, and love ✨",
    "🎁 I’m so lucky to have you in my life 🎁",
    "🌹 Every moment with you feels like a dream 🌹",
    "❤️ You are my heart, my soul, my everything ❤️",
    "💫 May your day be as magical as your smile 💫",
    "🌸 You are the sweetest gift I’ve ever received 🌸",
    "💕 Forever grateful to have you by my side 💕",
    "✨ My love for you grows stronger every day ✨",
    "💌 You are the melody that fills my life with happiness 💌",
    "🌟 I hope all your wishes come true today and always 🌟",
    "💖 You are the most beautiful part of my life 💖",
    "🎶 With you, every day is a song of love 🎶",
    "🎵 You light up the night, like the stars in the sky 🎵",
    "🎶 My world is brighter every time you’re near 🎶",
    "🌠 Every step with you feels like a dream come true 🌠",
    "🎧 Your smile is the rhythm I never want to stop 🎧",
    "✨ Life feels like a perfect melody with you ✨",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () =>
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  const prevCard = () =>
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);

  // توليد القلوب مرة واحدة فقط
  const hearts = useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      size: `${0.8 + Math.random() * 2}rem`,
      duration: `${5 + Math.random() * 5}s`,
    }));
  }, []); // [] => يعني تولد مرة واحدة عند التحميل فقط

  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background hearts */}
      <div className="hearts-container">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart"
            style={{
              left: heart.left,
              fontSize: heart.size,
              animationDuration: heart.duration,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Card */}
      <BirthdayCard
        message={messages[currentIndex]}
        currentIndex={currentIndex}
        totalMessages={messages.length}
      />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row mt-6 space-y-2 sm:space-y-0 sm:space-x-4">
        <button
          onClick={nextCard}
          className="px-4 py-2 bg-pink-500 text-white rounded-xl shadow hover:bg-pink-600 w-40 sm:w-auto"
        >
          Next ➡
        </button>
        <button
          onClick={prevCard}
          className="px-4 py-2 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600 w-40 sm:w-auto"
        >
          ⬅ Prev
        </button>
      </div>
    </div>
  );
}

export default App;
