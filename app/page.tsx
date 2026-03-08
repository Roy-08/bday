/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [showText, setShowText] = useState(false);
  const [showSubText, setShowSubText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [stars, setStars] = useState<{ id: number; left: string; top: string; delay: string; size: string; duration: number }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      size: `${Math.random() * 3 + 1}px`,
      duration: 2 + Math.random() * 3,
    }));
    setStars(generatedStars);

    const t1 = setTimeout(() => setShowText(true), 500);
    const t2 = setTimeout(() => setShowSubText(true), 1500);
    const t3 = setTimeout(() => setShowButton(true), 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, #1a0a2e 0%, #0d0015 50%, #000000 100%)",
      }}
    >
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationName: "starTwinkle",
            animationDuration: `${star.duration}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* Spotlight Effect */}
      <div
        className="absolute top-0 left-1/2 w-[600px] h-[600px]"
        style={{
          transform: "translateX(-50%)",
          background: "conic-gradient(from 0deg, transparent, rgba(255,105,180,0.3), transparent, rgba(147,51,234,0.3), transparent)",
          filter: "blur(60px)",
          opacity: 0.2,
          animationName: "pulse",
          animationDuration: "4s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Spotlight Icon */}
        <div
          style={{
            fontSize: "6rem",
            opacity: showText ? 1 : 0,
            animationName: showText ? "bounceIn" : "none",
            animationDuration: "1s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          }}
        >
          🎬
        </div>

        {/* LIGHTS Text */}
        {showText && (
          <div style={{ animationName: "fadeInScale", animationDuration: "0.8s", animationTimingFunction: "ease-out", animationFillMode: "forwards" }}>
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(4rem, 10vw, 8rem)",
                fontWeight: 900,
                letterSpacing: "0.1em",
                background: "linear-gradient(135deg, #ffd700, #ffec8b, #ffd700, #ff8c00)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animationName: "rainbowBg",
                animationDuration: "3s",
                animationTimingFunction: "ease",
                animationIterationCount: "infinite",
                filter: "drop-shadow(0 0 30px rgba(255,215,0,0.5))",
                margin: 0,
              }}
            >
              LIGHTS
            </h1>
            <div
              style={{
                marginTop: "8px",
                height: "4px",
                width: "100%",
                borderRadius: "9999px",
                background: "linear-gradient(90deg, transparent, #ffd700, transparent)",
              }}
            />
          </div>
        )}

        {/* Sub Text */}
        {showSubText && (
          <p
            style={{
              animationName: "fadeIn",
              animationDuration: "1s",
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "#d1d5db",
              fontWeight: 300,
              letterSpacing: "0.05em",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Something special is about to happen...
          </p>
        )}

        {/* Continue Button */}
        {showButton && (
          <button
            onClick={() => router.push("/action")}
            style={{
              animationName: "bounceIn",
              animationDuration: "1s",
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
              marginTop: "2rem",
              overflow: "hidden",
              borderRadius: "9999px",
              padding: "1rem 3rem",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "white",
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              boxShadow: "0 0 30px rgba(102,126,234,0.4), 0 0 60px rgba(118,75,162,0.2)",
              transition: "all 0.3s ease",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 0 50px rgba(102,126,234,0.6), 0 0 100px rgba(118,75,162,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(102,126,234,0.4), 0 0 60px rgba(118,75,162,0.2)";
            }}
          >
            <span style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", gap: "0.75rem" }}>
              Ready? Let&apos;s Go! ✨
            </span>
          </button>
        )}
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-10 flex gap-4 text-4xl" style={{ opacity: 0.5 }}>
        {["🌟", "💫", "⭐", "✨", "🌟"].map((emoji, i) => (
          <span
            key={i}
            style={{
              animationName: "float",
              animationDuration: "3s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}