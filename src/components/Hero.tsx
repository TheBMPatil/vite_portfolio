import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import { Button } from "./ui/button";
import AnimatedSection from "./AnimatedSection";
import "./styles/Hero.css";

const socialLinks = [
  {
    icon: <Instagram size={20} />,
    href: "https://www.instagram.com/the_bhagvat_mutthe_/",
    label: "Instagram",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/thebmpatil",
    label: "LinkedIn",
  },
  {
    icon: <MessageCircle size={20} />,
    href: "https://wa.me/+918408921072",
    label: "WhatsApp",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/TheBMPatil",
    label: "GitHub",
  },
  {
    icon: <Twitter size={20} />,
    href: "https://x.com/BhagvatMutthe",
    label: "Twitter",
  },
  {
    icon: <Facebook size={20} />,
    href: "https://www.facebook.com/bhagvat.mutthe/",
    label: "Facebook",
  },
];

const Hero = () => {
  const [splashes, setSplashes] = useState<
    { x: number; y: number; id: number }[]
  >([]);
  const lastMoveTime = useRef<number>(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastMoveTime.current > 150) {
      setSplashes((prev) => [...prev, { x: e.clientX, y: e.clientY, id: now }]);
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
      className="hero-section flex flex-col justify-center items-center min-h-screen text-center px-12 md:px-12 text-[#1B1B1B] relative overflow-hidden animated-gradient-bg"
    >
      {splashes.map((splash) => (
        <span
          key={splash.id}
          className="click-splash"
          style={{ top: splash.y + "px", left: splash.x + "px" }}
        ></span>
      ))}

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 items-center">
        <motion.div
          className="space-y-4 sm:space-y-6 md:space-y-8 text-center max-w-2xl sm:max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span
              className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#E9552E]/10 text-[#E9552E] font-medium text-[1rem] sm:text-sm tracking-wide"
              style={{ fontFamily: "Trade Winds" }}
            >
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            className="text-[3.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-6 text-[#1B1B1B] relative z-10"
            style={{ fontFamily: "Lavishly Yours" }}
          >
            <span className="block mb-2 sm:mb-3">
              <span className="text-[#E9552E]">" </span>Building Smarter
            </span>
            <span className="text-[#E9552E]">Delivering Better.</span>
            <span> "</span>
          </motion.h1>

          <motion.p
            className="text-[1rem] sm:text-lg md:text-xl text-[#3A3A3A]/90 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ fontFamily: "Offside" }}
          >
            I'm{" "}
            <span
              className="text-[#1B1B1B] font-bold"
              style={{ fontFamily: "Fugaz One" }}
            >
              Bhagvat Mutthe
            </span>{" "}
            — a full-stack developer who transforms ideas into powerful,
            user-focused digital solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#E9552E] hover:bg-[#d34721] px-6 sm:px-8"
            >
              <a
                href="#projects"
                className="group"
                style={{ fontFamily: "Offside" }}
              >
                🚀 View My Work
                <ArrowDown
                  size={18}
                  className="ml-2 group-hover:translate-y-0.5 transition-transform"
                />
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8"
            >
              <a
                href="#about"
                className="group"
                style={{ fontFamily: "Offside" }}
              >
                About Me
                <ArrowDown
                  size={18}
                  className="ml-2 group-hover:translate-y-0.5 transition-transform"
                />
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-2 sm:p-2.5 rounded-full bg-[#f5f5f5]/50 hover:bg-[#e0e0e0]/50 text-[#1B1B1B] transition-all duration-300"
                aria-label={link.label}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#E9552E] text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  {link.label}
                </span>
              </motion.a>
            ))}
            <motion.a
              href="mailto:bmpatil.dev@gmail.com"
              className="relative group p-2 sm:p-2.5 rounded-full bg-[#f5f5f5]/50 hover:bg-[#e0e0e0]/50 text-[#1B1B1B] transition-all duration-300"
              aria-label="Email"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#E9552E] text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                Email
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <span className="text-sm text-[#3A3A3A] mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} className="text-[#3A3A3A]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
