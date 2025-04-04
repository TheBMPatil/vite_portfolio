import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const closeSidebar = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('#sidebar') && !target.closest('#menuToggle')) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeSidebar);
    return () => document.removeEventListener('click', closeSidebar);
  }, []);

  return (
    <header className="navbar fixed top-0 left-0 w-full flex justify-between items-center p-4 z-50">
      <div className="logo text-2xl font-bold text-[var(--text-color)]">BM Patil</div>


      {/* Hamburger menu visible on small screens */}
      <button
        className="menu-toggle md:hidden relative text-2xl bg-transparent border-none cursor-pointer text-white z-[1001]"
        id="menuToggle"
        aria-label="Toggle Menu"
        onClick={toggleSidebar}
      >
        <Menu size={28} />
      </button>

      {/* Horizontal nav links - hidden on small screens */}
      <nav className="nav-links hidden md:flex gap-6">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Sidebar menu - shown on mobile when toggled */}
      <div
        id="sidebar"
        className={`fixed top-0 right-0 h-full w-64 p-6 transform transition-transform duration-300 z-[1000] ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
      >
        <ul className="flex flex-col gap-4 text-lg text-[var(--text-color)]">

          <li><a href="#about" onClick={() => setIsSidebarOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsSidebarOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsSidebarOpen(false)}>Projects</a></li>
          <li><a href="#services" onClick={() => setIsSidebarOpen(false)}>Services</a></li>
          <li><a href="#testimonials" onClick={() => setIsSidebarOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setIsSidebarOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;