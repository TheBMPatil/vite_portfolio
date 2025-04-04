import { Code2, Globe, Cloud, Database, Briefcase } from 'lucide-react';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Code2 className="w-8 h-8 text-[var(--primary-color)]" />,
    title: "Full-Stack Web and Mobile Development",
    description: "End-to-end development of web and mobile applications using modern technologies and best practices. Specializing in responsive, scalable solutions."
  },
  {
    icon: <Globe className="w-8 h-8 text-[var(--primary-color)]" />,
    title: "Custom Software Solutions",
    description: "Tailored software development for small businesses, focusing on efficiency, usability, and scalability to meet specific business requirements."
  },
  {
    icon: <Cloud className="w-8 h-8 text-[var(--primary-color)]" />,
    title: "Cloud Deployment and Management",
    description: "Expert cloud services including deployment, monitoring, and optimization across major platforms like AWS, ensuring reliable and scalable infrastructure."
  },
  {
    icon: <Database className="w-8 h-8 text-[var(--primary-color)]" />,
    title: "Database Design and Implementation",
    description: "Comprehensive database solutions including schema design, optimization, and maintenance for both SQL and NoSQL databases."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[var(--primary-color)]" />,
    title: "Tech Consulting and Project Outsourcing",
    description: "Strategic technology consulting and project management services for enterprises, helping businesses leverage technology effectively."
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section py-16 md:py-20 px-4 md:px-[10%]">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-[#1b1f27] rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:translateY(-5px)"
          >
            <div className="mb-4 p-3 bg-[#252a34] rounded-lg inline-block">
              {service.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[var(--primary-color)]">
              {service.title}
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;