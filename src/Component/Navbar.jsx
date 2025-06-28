import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="flex justify-between items-center py-4 px-4 border-b relative">
      {/* Logo */}
      <Logo></Logo>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-4 items-center">
        <a href="#about" className="hover:text-blue-600">
          About
        </a>
        <a href="#skills" className="hover:text-blue-600">
          Skills
        </a>
        <a href="#education" className="hover:text-blue-600">
          Education
        </a>
        <a href="#projects" className="hover:text-blue-600">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-600">
          Contact
        </a>
      </div>
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hidden md:block">
          Download Resume
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 z-50">
          <a href="#about" onClick={closeMenu} className="hover:text-blue-600">
            About
          </a>
          <a href="#skills" onClick={closeMenu} className="hover:text-blue-600">
            Skills
          </a>
          <a
            href="#education"
            onClick={closeMenu}
            className="hover:text-blue-600"
          >
            Education
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="hover:text-blue-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="hover:text-blue-600"
          >
            Contact
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Download Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
