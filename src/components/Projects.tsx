interface Project {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const projects: Project[] = [
  {
    title: "Vidyank (Freelance Project)",
    description: "An online platform empowering students to prepare for competitive exams like JEE, NEET, and MHT-CET with mock tests, performance analysis, and expert guidance.",
    link: "https://vidyank.com/",
    linkText: "Visit Vidyank"
  },
  {
    title: "CareerQuest (Personal Project)",
    description: "An advanced job portal offering job listings, company profiles, and user profiles with robust search capabilities.",
    link: "https://github.com/TheBMPatil/CareerQuest",
    linkText: "View on GitHub"
  },
  {
    title: "Sinhgad UniGuide (College Project)",
    description: "An Android app (React Native, Firebase, REST API) enhancing student engagement by streamlining access to essential campus services and optimizing the college experience.",
    link: "https://github.com/TheBMPatil2/Sinhgad-uniguide",
    linkText: "View on GitHub"
  },
  {
    title: "COVID Vaccination Center Locator (College Project)",
    description: "An Android app (Kotlin, Volley) enabling real-time discovery of vaccination centers based on user PIN, improving public access to critical healthcare information.",
    link: "https://github.com/TheBMPatil/covid_Vaccination_by_pin",
    linkText: "View on GitHub"
  },
  {
    title: "News App (Android) (Personal Project)",
    description: "An Android news application built with Kotlin and Jetpack Compose, offering user interest-based news curation.",
    link: "https://github.com/TheBMPatil/News_Application_Android_Kotlin",
    linkText: "View on GitHub"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-16 md:py-20 px-4 md:px-[10%]">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center md:text-left">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">{project.title}</h3>
            <p className="text-sm md:text-base mb-6 text-gray-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-primary text-secondary font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              {project.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;