/* eslint-disable react-hooks/purity */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SurprisePage() {
  const router = useRouter();
  const [phase, setPhase] = useState(0);
  const [confetti, setConfetti] = useState<{ id: number; left: string; color: string; delay: string; size: string; duration: number }[]>([]);
  const [hearts, setHearts] = useState<{ id: number; left: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const generatedConfetti = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: ["#38bdf8", "#fbbf24", "#a78bfa", "#34d399", "#f472b6", "#fb923c", "#818cf8", "#22d3ee", "#f87171"][Math.floor(Math.random() * 9)],
      delay: `${Math.random() * 3}s`,
      size: `${6 + Math.random() * 10}px`,
      duration: 3 + Math.random() * 3,
    }));
    setConfetti(generatedConfetti);

    const generatedHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${4 + Math.random() * 4}s`,
    }));
    setHearts(generatedHearts);

    const t1 = setTimeout(() => setPhase(1), 500);
    const t2 = setTimeout(() => setPhase(2), 1500);
    const t3 = setTimeout(() => setPhase(3), 3000);
    const t4 = setTimeout(() => setPhase(4), 4500);
    const t5 = setTimeout(() => setPhase(5), 6000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, #1e1b4b 0%, #0f0a2e 40%, #000000 100%)",
      }}
    >
      {/* Confetti Rain */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute top-0"
          style={{
            left: c.left,
            width: c.size,
            height: c.size,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            backgroundColor: c.color,
            animationName: "confettiFall",
            animationDuration: `${c.duration}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: c.delay,
          }}
        />
      ))}

      {/* Floating Stars */}
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute bottom-0"
          style={{
            left: h.left,
            fontSize: "1.5rem",
            animationName: "confettiFall",
            animationDuration: h.duration,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: "reverse",
            animationDelay: h.delay,
            opacity: 0.6,
          }}
        >
          ⭐
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">
        {/* SURPRISE! */}
        {phase >= 1 && (
          <div style={{
            animationName: "bounceIn",
            animationDuration: "1s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          }}>
            <span style={{ fontSize: "5rem" }}>🎉</span>
          </div>
        )}

        {phase >= 2 && (
          <h1
            style={{
              animationName: "bounceIn",
              animationDuration: "1s",
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "0.05em",
              background: "linear-gradient(135deg, #38bdf8, #a78bfa, #fbbf24, #f472b6, #38bdf8)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              
              animationIterationCount: "infinite",
              filter: "drop-shadow(0 0 40px rgba(56,189,248,0.6))",
              margin: 0,
            }}
          >
            SURPRISE!
          </h1>
        )}

        {/* Jaanu's Name */}
        {phase >= 3 && (
          <div style={{
            animationName: "fadeInScale",
            animationDuration: "0.8s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          }}>
            <p style={{ fontSize: "1.5rem", color: "#c4b5fd", fontWeight: 300, fontFamily: "'Poppins', sans-serif", margin: "0 0 0.5rem 0" }}>
              This is all for you, buddy!
            </p>
            <h2
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(4rem, 10vw, 7rem)",
                fontWeight: 900,
                color: "#a78bfa",
                filter: "drop-shadow(0 0 30px rgba(167,139,250,0.6))",
                animationName: "glow",
                animationDuration: "2s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                margin: 0,
              }}
            >
              Jaanu ✨
            </h2>
          </div>
        )}

        {/* Birthday Message */}
        {phase >= 4 && (
          <div
            style={{
              animationName: "slideUp",
              animationDuration: "1s",
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(167,139,250,0.2)",
              borderRadius: "20px",
              padding: "2rem",
              maxWidth: "32rem",
              marginTop: "1rem",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                color: "#e0e7ff",
                lineHeight: 1.7,
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              🌟 Wishing you the most epic birthday ever, Jaanu! From our childhood days to now being the best buddies — you&apos;re the realest one out there! Here&apos;s to more crazy adventures together! 🌟
            </p>
            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "0.5rem", fontSize: "1.875rem" }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    animationName: "heartbeat",
                    animationDuration: "1.5s",
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  {["🤜", "💥", "🤛"][i]}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Continue to Cards */}
        {phase >= 5 && (
          <button
            onClick={() => router.push("/Bday")}
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
              border: "2px solid rgba(167,139,250,0.3)",
              cursor: "pointer",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
              boxShadow: "0 0 40px rgba(99,102,241,0.5), 0 0 80px rgba(139,92,246,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
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
              💌 See Your Special Cards! 💌
            </span>
          </button>
        )}
      </div>

      {/* Corner Decorations */}
      <div className="absolute" style={{
        top: "1.5rem", left: "1.5rem", fontSize: "3rem",
        animationName: "float", animationDuration: "3s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite",
      }}>🎊</div>
      <div className="absolute" style={{
        top: "1.5rem", right: "1.5rem", fontSize: "3rem",
        animationName: "float", animationDuration: "3s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: "1s",
      }}>🎊</div>
      <div className="absolute" style={{
        bottom: "1.5rem", left: "1.5rem", fontSize: "3rem",
        animationName: "float", animationDuration: "3s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: "0.5s",
      }}>🎁</div>
      <div className="absolute" style={{
        bottom: "1.5rem", right: "1.5rem", fontSize: "3rem",
        animationName: "float", animationDuration: "3s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: "1.5s",
      }}>🎁</div>
    </div>
  );
}
