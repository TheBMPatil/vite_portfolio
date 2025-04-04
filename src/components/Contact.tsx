const Contact = () => {
  return (
    <section id="contact" className="contact-section text-center py-16 md:py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Contact Me</h2>
      <p className="mb-6 md:mb-8 text-sm md:text-base">
        Feel free to reach out for collaborations, consultations, or just a
        friendly hello!
      </p>
      <a href="mailto:bmpatil.dev@gmail.com" className="contact-button">
        Email Me
      </a>
      <div className="social-links mt-6 md:mt-8">
        <a href="https://github.com/TheBMPatil" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {' | '}
        <a href="https://www.linkedin.com/in/thebmpatil" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;