/* eslint-disable react-hooks/purity */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ActionPage() {
  const router = useRouter();
  const [phase, setPhase] = useState(0);
  const [confetti, setConfetti] = useState<{ id: number; left: string; color: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const generatedConfetti = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: ["#38bdf8", "#fbbf24", "#a78bfa", "#34d399", "#f472b6", "#fb923c", "#818cf8", "#22d3ee"][Math.floor(Math.random() * 8)],
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    }));
    setConfetti(generatedConfetti);

    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2200);
    const t3 = setTimeout(() => setPhase(3), 3800);
    const t4 = setTimeout(() => setPhase(4), 5500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, #1a0a3e 0%, #0d0020 50%, #000000 100%)",
      }}
    >
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute top-0"
          style={{
            left: c.left,
            width: "12px",
            height: "12px",
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            backgroundColor: c.color,
            animationName: "confettiFall",
            animationDuration: c.duration,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: c.delay,
          }}
        />
      ))}

      {/* Animated Glow Orbs */}
      <div
        className="absolute"
        style={{
          top: "5rem",
          left: "5rem",
          width: "12rem",
          height: "12rem",
          borderRadius: "50%",
          opacity: 0.2,
          background: "radial-gradient(circle, #38bdf8, transparent)",
          animationName: "pulse",
          animationDuration: "2s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "5rem",
          right: "5rem",
          width: "18rem",
          height: "18rem",
          borderRadius: "50%",
          opacity: 0.15,
          background: "radial-gradient(circle, #a78bfa, transparent)",
          animationName: "pulse",
          animationDuration: "2s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "25rem",
          height: "25rem",
          borderRadius: "50%",
          opacity: 0.08,
          background: "radial-gradient(circle, #fbbf24, transparent)",
          filter: "blur(40px)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {/* Camera Emoji */}
        {phase >= 0 && (
          <div style={{
            fontSize: "4.5rem",
            animationName: "bounceIn",
            animationDuration: "1s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          }}>
            🎥
          </div>
        )}

        {/* CAMERA Text */}
        {phase >= 1 && (
          <h1
            style={{
              animationName: "fadeInScale",
              animationDuration: "0.8s",
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "0.1em",
              background: "linear-gradient(135deg, #38bdf8, #818cf8, #38bdf8)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(56,189,248,0.5))",
              margin: 0,
            }}
          >
            CAMERA
          </h1>
        )}

        {/* Three dots building suspense */}
        {phase >= 2 && (
          <div style={{
            display: "flex",
            gap: "1rem",
            animationName: "fadeIn",
            animationDuration: "1s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  fontSize: "3rem",
                  color: "#a78bfa",
                  animationName: "bounceIn",
                  animationDuration: "1s",
                  animationTimingFunction: "ease-out",
                  animationFillMode: "forwards",
                  animationDelay: `${i * 0.3}s`,
                  opacity: 0,
                }}
              >
                .
              </span>
            ))}
          </div>
        )}

        {/* ACTION Text */}
        {phase >= 3 && (
          <div style={{
            animationName: "bounceIn",
            animationDuration: "1s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          }}>
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(4rem, 10vw, 8rem)",
                fontWeight: 900,
                letterSpacing: "0.1em",
                background: "linear-gradient(135deg, #fbbf24, #f97316, #ef4444, #fbbf24)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animationName: "rainbowBg",
                animationDuration: "2s",
                animationTimingFunction: "ease",
                animationIterationCount: "infinite",
                filter: "drop-shadow(0 0 40px rgba(251,191,36,0.6))",
                margin: 0,
              }}
            >
              ACTION! 🎬
            </h1>
          </div>
        )}

        {/* Continue Button */}
        {phase >= 4 && (
          <button
            onClick={() => router.push("/cake")}
            style={{
              animationName: "bounceIn",
              animationDuration: "1s",
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
              marginTop: "1.5rem",
              overflow: "hidden",
              borderRadius: "9999px",
              padding: "1.25rem 3.5rem",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "white",
              border: "2px solid rgba(251,191,36,0.3)",
              cursor: "pointer",
              background: "linear-gradient(135deg, #f59e0b, #f97316, #ef4444)",
              boxShadow: "0 0 40px rgba(245,158,11,0.4), 0 0 80px rgba(249,115,22,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
              transition: "all 0.3s ease",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <span style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", gap: "0.75rem" }}>
              🎂 The Surprise Awaits! 🎂
            </span>
          </button>
        )}
      </div>

      {/* Side Decorations */}
      <div className="absolute" style={{ left: "1.5rem", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "1.875rem", opacity: 0.6 }}>
        {["🎭", "🎪", "🎭"].map((emoji, i) => (
          <span key={i} style={{
            animationName: "float",
            animationDuration: "3s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${i * 0.7}s`,
          }}>{emoji}</span>
        ))}
      </div>
      <div className="absolute" style={{ right: "1.5rem", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "1.875rem", opacity: 0.6 }}>
        {["⚡", "💫", "⚡"].map((emoji, i) => (
          <span key={i} style={{
            animationName: "float",
            animationDuration: "3s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${i * 0.7 + 0.3}s`,
          }}>{emoji}</span>
        ))}
      </div>
    </div>
  );
}
