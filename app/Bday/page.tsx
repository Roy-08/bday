/* eslint-disable react-hooks/purity */
"use client";

import { useEffect, useState } from "react";

const birthdayCards = [
  {
    image: "/img1.png",
    message: "From playground fights to late-night talks — you've been my ride or die since day one, Jaanu! Never change, buddy! ✨",
    color: "from-blue-500 to-indigo-600",
    bgGlow: "rgba(99,102,241,0.3)",
    emoji: "🤝",
    gradientBg: "linear-gradient(135deg, #6366f1, #4f46e5)",
  },
  {
    image: "/img2.png",
    message: "I know you're gonna do big things in life, Jaanu. Sky's the limit for you, and I'll always be cheering the loudest! 🚀",
    color: "from-amber-500 to-orange-600",
    bgGlow: "rgba(251,191,36,0.3)",
    emoji: "⚡",
    gradientBg: "linear-gradient(135deg, #f59e0b, #ea580c)",
  },
  {
    image: "/img3.png",
    message: "Here's to more adventures, more inside jokes, and more unforgettable memories together. Best buddies forever! 🔥",
    color: "from-violet-500 to-purple-600",
    bgGlow: "rgba(167,139,250,0.3)",
    emoji: "💫",
    gradientBg: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
  },
  {
    image: "/img4.png",
    message: "Here's to more adventures, more inside jokes, and more unforgettable memories together. Best buddies forever! 🔥",
    color: "from-violet-500 to-purple-600",
    bgGlow: "rgba(167,139,250,0.3)",
    emoji: "💫",
    gradientBg: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
  },
];

export default function BdayPage() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [showHeader, setShowHeader] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [confetti, setConfetti] = useState<{ id: number; left: string; color: string; delay: string }[]>([]);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const generatedConfetti = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: ["#38bdf8", "#fbbf24", "#a78bfa", "#34d399", "#f472b6", "#818cf8"][Math.floor(Math.random() * 6)],
      delay: `${Math.random() * 5}s`,
    }));
    setConfetti(generatedConfetti);

    const t0 = setTimeout(() => setShowHeader(true), 300);
    const timers = birthdayCards.map((_, i) =>
      setTimeout(() => setVisibleCards((prev) => [...prev, i]), 1000 + i * 800)
    );
    const tFooter = setTimeout(() => setShowFooter(true), 1000 + birthdayCards.length * 800 + 500);
    return () => {
      clearTimeout(t0);
      timers.forEach(clearTimeout);
      clearTimeout(tFooter);
    };
  }, []);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #0f0a2e 20%, #1e1b4b 40%, #1e1b4b 60%, #0f0a2e 80%, #000000 100%)",
        paddingBottom: "5rem",
      }}
    >
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute top-0"
          style={{
            left: c.left,
            width: "8px",
            height: "8px",
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            backgroundColor: c.color,
            animation: `confettiFall ${3 + Math.random() * 3}s linear infinite`,
            animationDelay: c.delay,
          }}
        />
      ))}

      {/* Header */}
      {showHeader && (
        <div className="relative z-10 text-center" style={{ paddingTop: "3rem", paddingBottom: "2rem", animation: "slideDown 1s ease-out forwards" }}>
          <h1
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(3rem, 7vw, 5rem)",
              fontWeight: 900,
              marginBottom: "0.75rem",
              background: "linear-gradient(135deg, #38bdf8, #a78bfa, #fbbf24, #38bdf8)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "rainbowBg 3s ease infinite",
              filter: "drop-shadow(0 0 20px rgba(56,189,248,0.4))",
            }}
          >
            Special Cards for Jaanu
          </h1>
          <p style={{ color: "#c4b5fd", fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 300, fontFamily: "'Poppins', sans-serif" }}>
            🤜 Each card is a piece of our epic friendship 🤛
          </p>
          <div
            style={{
              marginTop: "1rem",
              marginLeft: "auto",
              marginRight: "auto",
              height: "2px",
              width: "10rem",
              borderRadius: "9999px",
              background: "linear-gradient(90deg, transparent, #6366f1, #a78bfa, #6366f1, transparent)",
            }}
          />
        </div>
      )}

      {/* Cards Grid */}
      <div
        className="relative z-10"
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "2rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
          gap: "2.5rem",
        }}
      >
        {birthdayCards.map((card, index) => (
          <div
            key={index}
            style={{
              transition: "all 0.7s ease",
              opacity: visibleCards.includes(index) ? 1 : 0,
              transform: visibleCards.includes(index) ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "1.5rem",
                overflow: "hidden",
                transition: "all 0.5s ease",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(167,139,250,0.15)",
                boxShadow: `0 20px 60px ${card.bgGlow}, 0 0 0 1px rgba(255,255,255,0.05)`,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03) translateY(-8px)";
                e.currentTarget.style.boxShadow = `0 30px 80px ${card.bgGlow}, 0 0 0 1px rgba(255,255,255,0.1)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) translateY(0)";
                e.currentTarget.style.boxShadow = `0 20px 60px ${card.bgGlow}, 0 0 0 1px rgba(255,255,255,0.05)`;
              }}
            >
              {/* Card Number Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  zIndex: 20,
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  background: card.gradientBg,
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {index + 1}
              </div>

              {/* Emoji Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  zIndex: 20,
                  fontSize: "1.875rem",
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                {card.emoji}
              </div>

              {/* Image */}
              <div style={{ position: "relative", width: "100%", height: "20rem", overflow: "hidden" }}>
                {!imageErrors[index] ? (
                  <img
                    src={card.image}
                    alt={`Special moment ${index + 1}`}
                    onError={() => handleImageError(index)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.7s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                ) : (
                  /* Fallback gradient when image fails to load */
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: card.gradientBg,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "5rem" }}>{card.emoji}</span>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", fontFamily: "'Poppins', sans-serif" }}>
                      Memory #{index + 1}
                    </span>
                  </div>
                )}
                {/* Gradient Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Message */}
              <div style={{ padding: "1.5rem" }}>
                <p
                  style={{
                    fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                    color: "#e0e7ff",
                    lineHeight: 1.7,
                    fontFamily: "'Dancing Script', cursive",
                  }}
                >
                  &ldquo;{card.message}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.75rem" }}>
                  <div style={{ height: "1px", flex: 1, background: "linear-gradient(to right, transparent, #6366f1, transparent)", opacity: 0.3 }} />
                  <span style={{ color: "#a78bfa", fontSize: "0.875rem", fontWeight: 300 }}>best buddies</span>
                  <div style={{ height: "1px", flex: 1, background: "linear-gradient(to right, transparent, #6366f1, transparent)", opacity: 0.3 }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Message */}
      {showFooter && (
        <div className="relative z-10 text-center" style={{ padding: "3rem 1.5rem", animation: "fadeIn 1s ease-out forwards" }}>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(167,139,250,0.2)",
              borderRadius: "20px",
              maxWidth: "42rem",
              margin: "0 auto",
              padding: "2.5rem",
            }}
          >
            <div style={{ fontSize: "3.75rem", animation: "heartbeat 1.5s ease-in-out infinite" }}>🎂</div>
            <h2
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                color: "#a78bfa",
                filter: "drop-shadow(0 0 15px rgba(167,139,250,0.4))",
                margin: "1rem 0",
              }}
            >
              Happy Birthday, Jaanu!
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#c4b5fd",
                lineHeight: 1.7,
                maxWidth: "32rem",
                margin: "0 auto",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              You&apos;re the most amazing and wonderfully clumsy best buddy anyone could ask for!
              From our childhood days running around like maniacs to now being the ultimate duo —
              I&apos;m so grateful to have you in my life, Jaanu.
              May this year bring you endless joy, success, and all the epic things you deserve!
              Here&apos;s to our legendary friendship! 🥂
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", fontSize: "2.25rem", paddingTop: "0.5rem", marginTop: "1rem" }}>
              {["⚡", "🤜", "💥", "🤛", "⚡"].map((emoji, i) => (
                <span key={i} style={{ animation: "float 3s ease-in-out infinite", animationDelay: `${i * 0.3}s` }}>{emoji}</span>
              ))}
            </div>
            <p
              style={{
                color: "#a78bfa",
                fontSize: "1.125rem",
                fontWeight: 500,
                paddingTop: "1rem",
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              — Your Best Buddy Forever 🔥
            </p>
          </div>
        </div>
      )}

      {/* Bottom Floating Elements */}
      <div className="absolute bottom-4 left-0 right-0" style={{ display: "flex", justifyContent: "center", gap: "1.5rem", fontSize: "1.875rem", opacity: 0.4, pointerEvents: "none" }}>
        {["🎈", "🎂", "🎈", "🎁", "🎈"].map((emoji, i) => (
          <span key={i} style={{ animation: "float 3s ease-in-out infinite", animationDelay: `${i * 0.5}s` }}>{emoji}</span>
        ))}
      </div>
    </div>
  );
}
