import React from "react";
import AnimatedSection from "./AnimatedSection";

const About: React.FC = () => {
  return (
    // <section
    //   id="about"
    //   className="about-section scroll-mt-[310px] md:scroll-mt-0 py-16 md:py-20 px-4 md:px-[10%] bg-gradient-to-r from-[#F5E6D3] to-[#D3D3D3]"
    // >
    <section
      id="about"
      className="about-section scroll-mt-[310px] md:scroll-mt-0 py-16 md:py-20 px-4 md:px-[10%] bg-gradient-to-r from-[#F5E6D3] to-[#D3D3D3] h-screen"
    >
      {/* Section Title */}
      <AnimatedSection direction="up">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-center tracking-wide text-[#1B1B1B] transform transition-transform duration-500 ease-in-out hover:scale-105">
          About Me
        </h2>
        <p className="text-center text-[#E9552E] text-sm md:text-base font-medium mb-10">
          Innovation • Excellence • Results
        </p>
      </AnimatedSection>

      <div className="space-y-10 max-w-3xl mx-auto text-justify">
        {/* Paragraph 1 – Minimal, sharp intro with strong border and no background */}
        <AnimatedSection direction="left" delay={0.1}>
          <p className="text-sm md:text-base leading-relaxed border-l-[6px] border-[#E9552E] pl-6 text-[#1B1B1B] font-medium">
            I’m a{" "}
            <span className="font-extrabold text-[#E9552E]">
              Full-Stack Team Lead
            </span>{" "}
            with a passion for crafting{" "}
            <span className="italic">scalable, high-impact solutions</span>. My
            core stack includes{" "}
            <span className="underline text-[#E9552E]">
              C++, Java, JavaScript, React, and Node.js
            </span>
            , enabling me to turn complex business challenges into intuitive
            digital experiences.
          </p>
        </AnimatedSection>

        {/* Paragraph 2 – Soft UX-focused storytelling style */}
        <AnimatedSection direction="right" delay={0.2}>
          <p className="text-sm md:text-base leading-relaxed text-[#3A3A3A] bg-[#FAF8F5] border-r-4 border-[#E9552E] pr-4 py-3 px-4 rounded-md shadow-sm">
            My approach blends{" "}
            <span className="font-semibold text-[#1B1B1B]">
              technical excellence
            </span>{" "}
            with{" "}
            <span className="font-semibold text-[#1B1B1B] italic">
              strategic thinking
            </span>{" "}
            to build applications that perform, scale, and feel great to use.
            Every project is driven by{" "}
            <span className="font-bold text-[#1B1B1B]">
              attention to detail
            </span>{" "}
            — from{" "}
            <span className="underline text-[#E9552E]">optimization</span> and{" "}
            <span className="font-semibold text-[#1B1B1B]">security</span> to{" "}
            <span className="italic text-[#E9552E]">user experience</span>.
          </p>
        </AnimatedSection>

        {/* Paragraph 3 – Visionary quote-style with a warm, elegant gradient */}
        <AnimatedSection direction="up" delay={0.3}>
          <p className="text-sm md:text-base leading-relaxed bg-gradient-to-br from-[#F5E6D3] to-[#FAF8F5] border border-[#E9552E]/10 p-5 rounded-xl text-[#1B1B1B] shadow-lg italic">
            I actively{" "}
            <span className="not-italic font-semibold text-[#E9552E]">
              mentor developers
            </span>{" "}
            and contribute to{" "}
            <span className="not-italic font-semibold text-[#E9552E]">
              tech communities
            </span>
            . Always open to{" "}
            <span className="not-italic font-bold underline decoration-[#E9552E] underline-offset-2">
              collaborations that demand innovation
            </span>{" "}
            and push boundaries beyond the ordinary.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
