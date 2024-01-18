"use client";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.menu-container') && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
      <nav className="font-bold text-xl bg-gray-400 bg-opacity-75 text-black p-4 sticky top-0 z-50">
          <div className="flex justify-between items-center container mx-auto">
            <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
              <a href="#home" className="hover:text-gray-300">Home</a>
              <a href="#aboutme" className="hover:text-gray-300">About Me</a>
              <a href="#skills" className="hover:text-gray-300">Skills</a>
              <a href="#projects" className="hover:text-gray-300">Projects</a>
              <a href="#education" className="hover:text-gray-300">Education</a>
              <a href="#experience" className="hover:text-gray-300">Experience</a>
              <a href="#contact" className="hover:text-gray-300">Contact</a>
            </div>
            <button
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`menu-container transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden flex flex-col items-center justify-center fixed inset-y-0 left-0 w-full bg-gray-400 p-4`}>
            <button
              onClick={closeMenu}
              className="absolute top-0 right-0 m-4 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="#home" className="hover:text-gray-300 mb-3" onClick={closeMenu}>Home</a>
            <a href="#aboutme" className="hover:text-gray-300 mb-3" onClick={closeMenu}>About Me</a>
            <a href="#skills" className="hover:text-gray-300 mb-3" onClick={closeMenu}>Skills</a>
            <a href="#projects" className="hover:text-gray-300 mb-3" onClick={closeMenu}>Projects</a>
            <a href="#education" className="hover:text-gray-300 mb-3" onClick={closeMenu}>Education</a>
            <a href="#experience" className="hover:text-gray-300 mb-3" onClick={closeMenu}>Experience</a>
            <a href="#contact" className="hover:text-gray-300 mb-3" onClick={closeMenu}>Contact</a>
          </div>

        </nav>
  );
};

export default Navbar;