import React from 'react';
import AnimatedSection from './AnimatedSection'; // adjust the path as necessary

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-section flex flex-col justify-center items-center min-h-screen text-center px-12 md:px-12 bg-[#F5E6D3] text-[#1B1B1B]"
    >
      <AnimatedSection>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8 text-[#1B1B1B]">
          <span className="block mb-4">
            <span className="text-[#E9552E]">“ </span>Building Smarter
          </span>
          <span className="text-[#E9552E]">Delivering Better.</span>
          <span> ”</span>
        </h1>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 text-[#3A3A3A]">
          I’m <span className="font-semibold text-[#E9552E]">Bhagvat Mutthe</span> — a full-stack developer who transforms ideas into powerful, user-focused digital solutions.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <a
          href="#projects"
          className="inline-block bg-[#E9552E] text-white text-lg md:text-xl font-medium px-8 py-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
        >
          View My Work
        </a>
      </AnimatedSection>
    </section>
  );
};

export default Hero;
