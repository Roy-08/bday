/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function CSSCake() {
  return (
    <div style={{
      animationName: "cakeFloat",
      animationDuration: "4s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
      filter: "drop-shadow(0 20px 40px rgba(99,102,241,0.4))",
    }}>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Candles with Flames */}
        <div style={{ display: "flex", gap: "40px", marginBottom: "4px", position: "relative", zIndex: 10 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {/* Flame outer glow */}
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(255,200,50,0.6), transparent)",
                  filter: "blur(8px)",
                  animationName: "candleGlow",
                  animationDuration: "1.5s",
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                  animationDelay: `${i * 0.3}s`,
                  marginBottom: "-8px",
                }}
              />
              {/* Flame */}
              <div
                style={{
                  width: "14px",
                  height: "22px",
                  background: "linear-gradient(to top, #ff6b00, #ffcc00, #fff7a1)",
                  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                  boxShadow: "0 0 12px 4px rgba(255,200,50,0.5), 0 0 24px 8px rgba(255,150,50,0.3)",
                  animationName: "flicker",
                  animationDuration: "0.8s",
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                  animationDelay: `${i * 0.2}s`,
                }}
              />
              {/* Candle stick */}
              <div
                style={{
                  width: "8px",
                  height: "40px",
                  background: `linear-gradient(to bottom, ${["#38bdf8", "#a78bfa", "#fbbf24"][i]}, ${["#0284c7", "#7c3aed", "#d97706"][i]})`,
                  borderRadius: "2px",
                  boxShadow: "inset -2px 0 4px rgba(0,0,0,0.2)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Top Tier - Small */}
        <div style={{ position: "relative", zIndex: 5 }}>
          <div
            style={{
              width: "140px",
              height: "60px",
              background: "linear-gradient(180deg, #93c5fd 0%, #6366f1 50%, #4f46e5 100%)",
              borderRadius: "12px 12px 4px 4px",
              border: "2px solid rgba(255,255,255,0.2)",
              boxShadow: "inset 0 -8px 16px rgba(0,0,0,0.15), inset 0 4px 8px rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.3)",
              position: "relative",
            }}
          >
            {/* Frosting drips */}
            <div style={{ position: "absolute", bottom: "-8px", left: 0, right: 0, display: "flex", justifyContent: "space-around", padding: "0 8px" }}>
              {[12, 18, 10, 16, 14, 12].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: "10px",
                    height: `${h}px`,
                    background: "linear-gradient(to bottom, #e0e7ff, #a5b4fc)",
                    borderRadius: "0 0 50% 50%",
                    opacity: 0.9,
                  }}
                />
              ))}
            </div>
            {/* Decorative dots */}
            <div style={{ position: "absolute", top: "12px", left: 0, right: 0, display: "flex", justifyContent: "center", gap: "12px" }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: ["#fbbf24", "#38bdf8", "#a78bfa", "#fbbf24", "#34d399"][i],
                    boxShadow: `0 0 4px ${["#fbbf24", "#38bdf8", "#a78bfa", "#fbbf24", "#34d399"][i]}`,
                  }}
                />
              ))}
            </div>
            <div style={{ position: "absolute", bottom: "16px", left: 0, right: 0, display: "flex", justifyContent: "center" }}>
              <div style={{
                width: "80px",
                height: "12px",
                borderBottom: "2px dashed rgba(255,255,255,0.4)",
                borderRadius: "0 0 40px 40px",
              }} />
            </div>
          </div>
        </div>

        {/* Middle Tier */}
        <div style={{ position: "relative", zIndex: 4, marginTop: "-2px" }}>
          <div
            style={{
              width: "200px",
              height: "70px",
              background: "linear-gradient(180deg, #c4b5fd 0%, #8b5cf6 50%, #7c3aed 100%)",
              borderRadius: "8px 8px 4px 4px",
              border: "2px solid rgba(255,255,255,0.15)",
              boxShadow: "inset 0 -8px 16px rgba(0,0,0,0.15), inset 0 4px 8px rgba(255,255,255,0.2), 0 4px 12px rgba(0,0,0,0.3)",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", bottom: "-8px", left: 0, right: 0, display: "flex", justifyContent: "space-around", padding: "0 12px" }}>
              {[14, 20, 12, 18, 16, 14, 20, 12].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: "10px",
                    height: `${h}px`,
                    background: "linear-gradient(to bottom, #e8d5ff, #c9a0ff)",
                    borderRadius: "0 0 50% 50%",
                    opacity: 0.9,
                  }}
                />
              ))}
            </div>
            <div style={{ position: "absolute", top: "16px", left: 0, right: 0, display: "flex", justifyContent: "center", gap: "24px" }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ color: "#fbbf24", fontSize: "14px", textShadow: "0 0 6px rgba(251,191,36,0.6)" }}>
                  ★
                </div>
              ))}
            </div>
            <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px", display: "flex", justifyContent: "center" }}>
              <svg width="160" height="10" viewBox="0 0 160 10">
                <path d="M0,5 L10,0 L20,5 L30,0 L40,5 L50,0 L60,5 L70,0 L80,5 L90,0 L100,5 L110,0 L120,5 L130,0 L140,5 L150,0 L160,5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Tier - Large */}
        <div style={{ position: "relative", zIndex: 3, marginTop: "-2px" }}>
          <div
            style={{
              width: "260px",
              height: "80px",
              background: "linear-gradient(180deg, #fde68a 0%, #f59e0b 50%, #d97706 100%)",
              borderRadius: "8px 8px 12px 12px",
              border: "2px solid rgba(255,255,255,0.15)",
              boxShadow: "inset 0 -10px 20px rgba(0,0,0,0.2), inset 0 4px 8px rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.4)",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", bottom: "-8px", left: 0, right: 0, display: "flex", justifyContent: "space-around", padding: "0 16px" }}>
              {[16, 22, 14, 20, 18, 16, 22, 14, 18, 20].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: "10px",
                    height: `${h}px`,
                    background: "linear-gradient(to bottom, #fef3c7, #fde68a)",
                    borderRadius: "0 0 50% 50%",
                    opacity: 0.9,
                  }}
                />
              ))}
            </div>
            <div style={{ position: "absolute", top: "16px", left: 0, right: 0, display: "flex", justifyContent: "center", gap: "20px" }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} style={{
                  color: "#6366f1",
                  fontSize: "12px",
                  textShadow: "0 0 6px rgba(99,102,241,0.6)",
                  animationName: "sparkle",
                  animationDuration: "2s",
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                  animationDelay: `${i * 0.4}s`,
                }}>
                  ★
                </div>
              ))}
            </div>
            <div style={{ position: "absolute", bottom: "20px", left: "24px", right: "24px" }}>
              <div style={{
                height: "8px",
                background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(255,255,255,0.3), rgba(99,102,241,0.5), transparent)",
                borderRadius: "4px",
              }} />
            </div>
          </div>
        </div>

        {/* Cake Board / Plate */}
        <div style={{ position: "relative", zIndex: 2, marginTop: "-2px" }}>
          <div
            style={{
              width: "300px",
              height: "20px",
              background: "linear-gradient(180deg, #a78bfa 0%, #7c3aed 50%, #6d28d9 100%)",
              borderRadius: "0 0 50% 50% / 0 0 100% 100%",
              boxShadow: "0 4px 16px rgba(124,58,237,0.4), 0 8px 32px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.2)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "200px",
                height: "6px",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>

        {/* Shadow under plate */}
        <div
          style={{
            width: "280px",
            height: "16px",
            background: "radial-gradient(ellipse, rgba(0,0,0,0.4), transparent)",
            borderRadius: "50%",
            marginTop: "4px",
          }}
        />
      </div>
    </div>
  );
}

export default function CakePage() {
  const router = useRouter();
  const [showCake, setShowCake] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showCandles, setShowCandles] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [sparkles, setSparkles] = useState<{ id: number; left: string; top: string; delay: string; fontSize: number }[]>([]);

  useEffect(() => {
    const generatedSparkles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      fontSize: 10 + Math.random() * 16,
    }));
    setSparkles(generatedSparkles);

    const t1 = setTimeout(() => setShowCake(true), 800);
    const t2 = setTimeout(() => setShowText(true), 2000);
    const t3 = setTimeout(() => setShowCandles(true), 3000);
    const t4 = setTimeout(() => setShowButton(true), 4500);
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
        background: "radial-gradient(ellipse at 50% 30%, #1e1b4b 0%, #0f0a2e 40%, #000000 100%)",
      }}
    >
      {/* Sparkles */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute"
          style={{
            left: s.left,
            top: s.top,
            color: "#fbbf24",
            animationName: "sparkle",
            animationDuration: "2s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: s.delay,
            fontSize: `${s.fontSize}px`,
          }}
        >
          ✦
        </div>
      ))}

      {/* Background glow orbs */}
      <div
        className="absolute"
        style={{
          top: "25%",
          left: "25%",
          width: "20rem",
          height: "20rem",
          borderRadius: "50%",
          opacity: 0.1,
          background: "radial-gradient(circle, #6366f1, transparent)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "25%",
          right: "25%",
          width: "15rem",
          height: "15rem",
          borderRadius: "50%",
          opacity: 0.1,
          background: "radial-gradient(circle, #fbbf24, transparent)",
          filter: "blur(40px)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {/* CSS Cake */}
        {showCake && (
          <div style={{
            animationName: "bounceIn",
            animationDuration: "1s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          }}>
            <CSSCake />
          </div>
        )}

        {/* Candle Emojis */}
        {showCandles && (
          <div style={{
            display: "flex",
            gap: "12px",
            animationName: "fadeIn",
            animationDuration: "1s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          }}>
            {["🕯️", "🕯️", "🕯️", "🕯️", "🕯️"].map((candle, i) => (
              <span
                key={i}
                style={{
                  fontSize: "1.875rem",
                  animationName: "float",
                  animationDuration: "3s",
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                {candle}
              </span>
            ))}
          </div>
        )}

        {/* Birthday Text */}
        {showText && (
          <div style={{
            animationName: "fadeInScale",
            animationDuration: "0.8s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          }}>
            <h1
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(3rem, 8vw, 5rem)",
                fontWeight: 900,
                background: "linear-gradient(135deg, #fbbf24, #f97316, #ef4444, #fbbf24)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animationName: "rainbowBg",
                animationDuration: "3s",
                animationTimingFunction: "ease",
                animationIterationCount: "infinite",
                filter: "drop-shadow(0 0 20px rgba(251,191,36,0.5))",
                margin: 0,
              }}
            >
              Happy Birthday
            </h1>
            <h2
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(3.5rem, 9vw, 6rem)",
                fontWeight: 900,
                color: "#a78bfa",
                animationName: "glow",
                animationDuration: "2s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                margin: "0.5rem 0 0 0",
              }}
            >
              Jaanu! 🎀
            </h2>
          </div>
        )}

        {/* Wish Text */}
        {showText && (
          <p
            style={{
              animationName: "fadeIn",
              animationDuration: "1s",
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
              animationDelay: "0.5s",
              opacity: 0,
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "#c4b5fd",
              fontWeight: 300,
              maxWidth: "28rem",
              marginTop: "0.5rem",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            🎂 Make a wish and blow the candles, buddy! 🎂
          </p>
        )}

        {/* Continue Button */}
        {showButton && (
          <button
            onClick={() => router.push("/surprise")}
            style={{
              animationName: "bounceIn",
              animationDuration: "1s",
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
              marginTop: "1rem",
              overflow: "hidden",
              borderRadius: "9999px",
              padding: "1.25rem 3.5rem",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "white",
              border: "2px solid rgba(251,191,36,0.3)",
              cursor: "pointer",
              background: "linear-gradient(135deg, #fbbf24, #f97316, #ef4444)",
              boxShadow: "0 0 40px rgba(251,191,36,0.4), 0 0 80px rgba(249,115,22,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
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
              🎁 Open Your Surprise! 🎁
            </span>
          </button>
        )}
      </div>

      {/* Floating Balloons */}
      <div className="absolute bottom-0 left-0 right-0" style={{ display: "flex", justifyContent: "space-around", fontSize: "3rem", pointerEvents: "none" }}>
        {["🎈", "🎈", "🎈", "🎈", "🎈", "🎈"].map((b, i) => (
          <span
            key={i}
            style={{
              animationName: "float",
              animationDuration: `${3 + i * 0.3}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: `${i * 0.4}s`,
              opacity: 0.7,
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
