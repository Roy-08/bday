/* eslint-disable react-hooks/purity */
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
  const [shootingStars, setShootingStars] = useState<{ id: number; left: string; top: string; delay: number }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      size: `${Math.random() * 3 + 1}px`,
      duration: 2 + Math.random() * 3,
    }));
    setStars(generatedStars);

    const generatedShootingStars = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 60 + 10}%`,
      top: `${Math.random() * 40}%`,
      delay: i * 3 + Math.random() * 2,
    }));
    setShootingStars(generatedShootingStars);

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
        background: "radial-gradient(ellipse at 50% 0%, #0f1b3d 0%, #0a0e2a 30%, #050816 60%, #000000 100%)",
      }}
    >
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            background: Math.random() > 0.7 ? "#ffd700" : "#ffffff",
            animationName: "starTwinkle",
            animationDuration: `${star.duration}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((ss) => (
        <div
          key={ss.id}
          className="absolute"
          style={{
            left: ss.left,
            top: ss.top,
            width: "80px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #fff, #ffd700)",
            borderRadius: "999px",
            transform: "rotate(-35deg)",
            animationName: "fadeIn",
            animationDuration: "0.8s",
            animationTimingFunction: "ease-out",
            animationIterationCount: "infinite",
            animationDelay: `${ss.delay}s`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Aurora-like Glow */}
      <div
        className="absolute top-0 left-1/2 w-[800px] h-[800px]"
        style={{
          transform: "translateX(-50%)",
          background: "conic-gradient(from 0deg, transparent, rgba(56,189,248,0.2), transparent, rgba(168,85,247,0.2), transparent, rgba(251,191,36,0.15), transparent)",
          filter: "blur(80px)",
          opacity: 0.25,
          animationName: "pulse",
          animationDuration: "5s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute" style={{
        top: "20%", left: "15%", width: "200px", height: "200px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56,189,248,0.15), transparent)",
        filter: "blur(40px)",
        animationName: "float", animationDuration: "6s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite",
      }} />
      <div className="absolute" style={{
        bottom: "20%", right: "15%", width: "250px", height: "250px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.15), transparent)",
        filter: "blur(50px)",
        animationName: "float", animationDuration: "7s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: "2s",
      }} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Spotlight Icon */}
        <div
          style={{
            fontSize: "5rem",
            opacity: showText ? 1 : 0,
            animationName: showText ? "bounceIn" : "none",
            animationDuration: "1s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          }}
        >
          🤜🤛
        </div>

        {/* LIGHTS Text */}
        {showText && (
          <div style={{ animationName: "fadeInScale", animationDuration: "0.8s", animationTimingFunction: "ease-out", animationFillMode: "forwards" }}>
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(3.5rem, 10vw, 7rem)",
                fontWeight: 900,
                letterSpacing: "0.12em",
                background: "linear-gradient(135deg, #38bdf8, #a78bfa, #fbbf24, #38bdf8)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animationName: "rainbowBg",
                animationDuration: "4s",
                animationTimingFunction: "ease",
                animationIterationCount: "infinite",
                filter: "drop-shadow(0 0 30px rgba(56,189,248,0.5))",
                margin: 0,
              }}
            >
              LIGHTS
            </h1>
            <div
              style={{
                marginTop: "8px",
                height: "3px",
                width: "100%",
                borderRadius: "9999px",
                background: "linear-gradient(90deg, transparent, #38bdf8, #a78bfa, #fbbf24, transparent)",
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
              color: "#c4b5fd",
              fontWeight: 300,
              letterSpacing: "0.05em",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Hey buddy... something epic is coming your way! 🚀
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
              border: "2px solid rgba(168,85,247,0.4)",
              cursor: "pointer",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
              boxShadow: "0 0 30px rgba(99,102,241,0.4), 0 0 60px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              transition: "all 0.3s ease",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 0 50px rgba(99,102,241,0.6), 0 0 100px rgba(139,92,246,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(99,102,241,0.4), 0 0 60px rgba(139,92,246,0.2)";
            }}
          >
            <span style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", gap: "0.75rem" }}>
              Ready? Let&apos;s Go! 🔥
            </span>
          </button>
        )}
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-10 flex gap-4 text-4xl" style={{ opacity: 0.5 }}>
        {["⚡", "💫", "🌟", "✨", "⚡"].map((emoji, i) => (
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
