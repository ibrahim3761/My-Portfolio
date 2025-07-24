import { useState, useEffect } from "react";
import { Menu, X, Eye } from "lucide-react";
import Logo from "./Logo/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/20"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-200"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 z-10">
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center ml-28 space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://drive.google.com/file/d/1ooovy33xBhFi0Josgh9uGe1-w1v32FpV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer relative group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  <Eye className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                  <span>View Resume</span>
                </span>
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-10 p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <Menu
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "opacity-0 rotate-180" : "opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "opacity-100" : "opacity-0 rotate-180"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transform ${
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <div
              className={`pt-4 border-t border-gray-200 transform transition-all duration-300 ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              <a
                href="https://drive.google.com/file/d/1_nzCVEfPgwMRL2jGewb2uzFsm3760Dda/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  onClick={closeMenu}
                  className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Eye className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                    <span>View Resume</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
