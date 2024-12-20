import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Services', path: 'clients' },
    { link: 'Projects', path: 'projects' },
    { link: 'Contact', path: 'contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md flex justify-between items-center lg:px-16 px-6 py-4 sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-black md:text-4xl text-3xl font-bold font-rubik">
        IMS COATINGS & 
        <span className="text-yellow-500 italic"> ENGINEERING</span>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex justify-center items-center gap-6">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-black uppercase font-bold cursor-pointer 
          p-3 rounded-full hover:bg-yellow-500 hover:text-white text-[15px] transition duration-300"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul
          className="absolute top-[70px] left-0 w-full bg-yellow-500 shadow-lg flex flex-col 
        items-center gap-6 py-6 lg:hidden"
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-semibold cursor-pointer 
            p-2 w-full text-center hover:bg-black hover:text-white text-[18px] transition duration-300 rounded-lg"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Header;
