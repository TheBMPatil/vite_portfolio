import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Services", path: "#services" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F5E6D3] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-2 hover:scale-105 transition-transform"
          >
            <img src={logo} alt="Logo" className="h-12 w-auto" />
            <span
              className="text-3xl  text-[#E9552E]"
              style={{ fontFamily: "Rubik Iso" }}
            >
              TheBMPatil
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-[#1B1B1B] font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="hover:text-[#E9552E] font-bold transition-colors duration-200 hover:scale-105 transform"
                style={{ fontFamily: "Offside", fontSize: "1rem" }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-[#1B1B1B] hover:text-[#E9552E] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 pb-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="text-[#1B1B1B] font-bold hover:text-[#E9552E] transition-colors duration-200"
                    style={{ fontFamily: "Offside", fontSize: "1.1rem" }}
                    onClick={() => setIsOpen(false)} // Close on click
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
