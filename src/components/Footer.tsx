import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import logo from "../images/logo.png"; // Make sure this path is correct

const Footer = () => {
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

  return (
    <motion.footer
      className="bg-[#F5E6D3] text-center py-8 px-4 text-sm text-[#3A3A3A] rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-[#E3D6C8]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex justify-center items-center gap-2 mb-4">
        <img src={logo} alt="BMP Logo" className="h-20 w-auto drop-shadow-md" />
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            className="relative group text-[#1B1B1B] hover:text-[#E9552E] transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            {link.icon}
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#1B1B1B] text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>

      <p className="text-sm text-[#000000]">
        Crafted with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/thebmpatil"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-[#E9552E] transition-colors relative group"
        >
          Bhagvat Mutthe
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#1B1B1B] text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            LinkedIn
          </span>
        </a>
      </p>

      <p className="text-xs mt-2 text-[#1b1b1b]">
        &copy; {new Date().getFullYear()} The BM Patil. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
