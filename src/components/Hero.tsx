import React, { useState, useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import "./styles/Hero.css";

const Hero = () => {
  const [splashes, setSplashes] = useState<
    { x: number; y: number; id: number }[]
  >([]);
  const lastMoveTime = useRef<number>(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const now = Date.now();
    // Throttle to 1 splash every 120ms
    if (now - lastMoveTime.current > 150) {
      const newSplash = {
        x: e.clientX,
        y: e.clientY,
        id: now,
      };
      setSplashes((prev) => [...prev, newSplash]);
      lastMoveTime.current = now;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSplashes((prev) => prev.filter((s) => Date.now() - s.id < 700));
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="hero-section flex flex-col justify-center items-center min-h-screen text-center px-6 md:px-12 text-[#1B1B1B] relative overflow-hidden animated-gradient-bg"
    >
      {splashes.map((splash) => (
        <span
          key={splash.id}
          className="click-splash"
          style={{ top: splash.y + "px", left: splash.x + "px" }}
        ></span>
      ))}

      <AnimatedSection>
        <h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8 text-[#1B1B1B] relative z-10"
          style={{ fontFamily: "Lavishly Yours", fontSize: "5rem" }}
        >
          <span className="block mb-4">
            <span className="text-[#E9552E]">“ </span>Building Smarter
          </span>
          <span className="text-[#E9552E]">Delivering Better.</span>
          <span> ”</span>
        </h1>
      </AnimatedSection>

      <AnimatedSection>
        <p
          className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-[#3A3A3A] relative z-10"
          style={{ fontFamily: "Trade Winds" }}
        >
          I’m{" "}
          <span
            className="font-bold text-[#E9552E] inline-block"
            style={{
              fontFamily: "Passions Conflict",
              fontSize: "48px",
              lineHeight: "1.2",
            }}
          >
            Bhagvat Mutthe
          </span>{" "}
          — a full-stack developer who transforms ideas into powerful,
          user-focused digital solutions.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <a
          href="#projects"
          className="inline-block bg-[#E9552E] text-white text-lg md:text-xl font-semibold px-10 py-5 rounded-2xl shadow-xl hover:scale-110 transition-all duration-300 hover:bg-[#d34721] hover:shadow-2xl z-10"
          style={{ fontFamily: "Trade Winds", letterSpacing: "1px" }}
        >
          🚀 View My Work
        </a>
      </AnimatedSection>
    </section>
  );
};

export default Hero;
