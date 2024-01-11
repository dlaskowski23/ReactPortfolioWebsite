"use client";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <nav className="font-bold bg-gray-400 text-black p-4 sticky top-0 z-50">
          <div className="flex justify-between items-center container mx-auto">
            <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#about" className="hover:text-gray-300">About Me</a>
              <a href="#education" className="hover:text-gray-300">Education</a>
              <a href="#skills" className="hover:text-gray-300">Skills</a>
              <a href="#projects" className="hover:text-gray-300">Projects</a>
              <a href="#experience" className="hover:text-gray-300">Experience</a>
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
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <a href="#" className="block hover:text-gray-300">Home</a>
            <a href="#about" className="block hover:text-gray-300">About Me</a>
            <a href="#education" className="block hover:text-gray-300">Education</a>
            <a href="#skills" className="block hover:text-gray-300">Skills</a>
            <a href="#projects" className="block hover:text-gray-300">Projects</a>
            <a href="#experience" className="block hover:text-gray-300">Experience</a>
          </div>
        </nav>
  );
};

export default Navbar;