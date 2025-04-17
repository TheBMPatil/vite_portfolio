import AnimatedSection from "./AnimatedSection"; // Ensure this is the correct path

const testimonials = [
  {
    quote:
      "Bhagvat's innovative solutions and technical expertise transformed our business operations. Highly recommended! Efficient, reliable, and dedicated to delivering top-quality software—working with Bhagvat was a game-changer.",
    author: "Project : Vidyank - Intellisys IT Solutions Private Limited",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      // className="testimonials-section py-16 md:py-20 px-4 md:px-[10%]"
      className="testimonials-section scroll-mt-[320px] md:scroll-mt-0 py-16 md:py-20 px-4 md:px-[10%]"
    >
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          Testimonials
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection key={index}>
            <div className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <blockquote className="relative">
                <div className="text-4xl text-primary opacity-20 absolute top-0 left-0">
                  "
                </div>
                <p className="text-sm md:text-base mb-6 pl-8 text-gray-300">
                  {testimonial.quote}
                </p>
                <cite className="block text-sm md:text-base font-semibold text-primary pl-8">
                  - {testimonial.author}
                </cite>
              </blockquote>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
