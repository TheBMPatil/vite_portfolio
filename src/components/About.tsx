import AnimatedSection from "./AnimatedSection"; // adjust the path if needed

const About = () => {
  return (
    // <section
    //   id="about"
    //   className="about-section py-16 md:py-20 px-4 md:px-[10%]"
    // >
    // <section
    //   id="about"
    //   className="about-section scroll-mt-[350px] py-16 md:py-20 px-4 md:px-[10%]"
    // >
    <section
      id="about"
      className="about-section scroll-mt-[350px] md:scroll-mt-0 py-16 md:py-20 px-4 md:px-[10%]"
    >
      <AnimatedSection>
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          About Me{" "}
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <p className="mb-4 text-sm md:text-base">
          I'm a dedicated full-stack developer specializing in transforming
          complex ideas into intuitive, user-friendly applications. With
          expertise in web and mobile development, I prioritize user experience
          and performance. Beyond coding, I am passionate about teaching
          programming and empowering others through knowledge sharing.
        </p>
      </AnimatedSection>

      {/* <AnimatedSection>
        <p className="mb-4 text-sm md:text-base">
          My technical journey spans across diverse domains, from crafting
          advanced job portals to building secure VPN systems and attendance
          management solutions. I believe in the power of technology to solve
          real-world problems and consistently strive to deliver robust and
          scalable software solutions.
        </p>
      </AnimatedSection> */}

      <AnimatedSection>
        <p className="mb-4 text-sm md:text-base">
          Driven by innovation, I recently embarked on a mission to establish a
          tech firm offering custom software solutions and technical
          consultation for both small businesses and large enterprises. My goal
          is to bridge the gap between technology and business needs through
          strategic development and collaboration.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <p className="text-sm md:text-base">
          When I'm not coding, I enjoy mentoring aspiring developers, sharing my
          insights on software architecture, and exploring new technological
          trends to stay ahead in the ever-evolving digital landscape.
        </p>
      </AnimatedSection>
    </section>
  );
};

export default About;
