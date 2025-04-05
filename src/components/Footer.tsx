import { motion } from 'framer-motion';
import { Github, Instagram, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/the_bhagvat_mutthe_/', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/thebmpatil', label: 'LinkedIn' },
    { icon: <MessageCircle size={20} />, href: 'https://wa.me/+918408921072', label: 'WhatsApp' },
    { icon: <Github size={20} />, href: 'https://github.com/TheBMPatil', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: 'https://x.com/BhagvatMutthe', label: 'Twitter' },
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/bhagvat.mutthe/', label: 'Facebook' },
  ];
  return (
    <footer className="bg-[#F5E6D3] text-[#3A3A3A] py-8 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        {/* <div className="text-2xl font-bold text-[#E9552E] mb-2">BMP</div> */}



        {/* <p className="text-sm mb-1">Made with ❤️ and endless cups of chai</p> */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className="text-[#1B1B1B] hover:text-[#E9552E] transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div> */}

        {/* Social Icons with Labels */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className="flex items-center gap-2 text-[#1B1B1B] hover:text-[#E9552E] transition-colors"
            >
              {link.icon}
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </div>

        <p className="text-sm  text-[#000000]  ">Crafted by <span className="font-semibold text-[#000000]  hover:text-[#E9552E] transition-colors">The BM Patil</span></p>

        <p className="text-xs mt-4 text-[#1b1b1b]">&copy; {new Date().getFullYear()} The BM Patil. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
