const Skills = () => {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: "Java, OOP, SQL, ReactJS, Next.js, MongoDB, C++, HTML5, CSS3, JavaScript"
    },
    {
      title: "Frameworks & Tools",
      skills: "Node.js, MySQL, Jetpack Compose (Android), Java EE, React, Angular"
    },
    {
      title: "DevOps & Cloud",
      skills: "Docker, Kubernetes, AWS (EC2, S3, RDS), CI/CD, GitHub Actions"
    },
    {
      title: "Special Expertise",
      skills: "Web Development, Full-Stack Solutions, Cloud Deployment"
    }
  ];

  return (
    <section id="skills" className="skills-section py-16 md:py-20 px-4 md:px-[10%]">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center md:text-left">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-[#1a1a1a] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">{category.title}</h3>
            <p className="text-sm md:text-base text-gray-300">{category.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;