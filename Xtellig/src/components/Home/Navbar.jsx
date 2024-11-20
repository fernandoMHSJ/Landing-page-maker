import React, { useState } from 'react';

const Navbar = () => {
  // State to manage mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="py-4 px-4 sm:px-10 z-50 min-h-[70px]">
      <div className="relative flex flex-wrap items-center gap-4">
        
        {/* Logo with a link to homepage */}
        <a href="/" aria-label="Homepage">
          <img 
            src="https://avatars.githubusercontent.com/u/155215134?v=4" 
            alt="Logo"  // Describes the image for accessibility
            className="w-36"
          />
        </a>

        {/* Mobile Menu Toggle (Only visible on small screens) */}
        <div
          className={`max-lg:hidden lg:block ${isMenuOpen ? 'fixed bg-black opacity-50' : ''} z-50`}
        >
          {/* Button to toggle menu on small screens */}
          <button 
            onClick={toggleMenu}  // Toggle function triggered on click
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}  // Accessibility improvement
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
            </svg>
          </button>

          {/* Mobile Menu Items (Only shown when the menu is open) */}
          <ul className={`lg:ml-12 lg:flex gap-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
            {/* Removed ReadyMadeUI Logo for mobile */}
            {/* Navigation Links */}
            <li className="px-3 lg:border-b lg:py-3">
              <a href="/" className="block font-semibold text-blue-600 transition-all hover:text-blue-600">Home</a>
            </li>
            <li className="px-3 lg:border-b lg:py-3">
              <a href="/team" className="block font-semibold transition-all hover:text-blue-600">Team</a>
            </li>
            <li className="px-3 lg:border-b lg:py-3">
              <a href="/features" className="block font-semibold transition-all hover:text-blue-600">Features</a>
            </li>
            <li className="px-3 lg:border-b lg:py-3">
              <a href="/blog" className="block font-semibold transition-all hover:text-blue-600">Blog</a>
            </li>
            <li className="px-3 lg:border-b lg:py-3">
              <a href="/about" className="block font-semibold transition-all hover:text-blue-600">About</a>
            </li>
          </ul>
        </div>

        {/* Login Button and Mobile Menu Toggle (For large screens) */}
        <div className="flex ml-auto">
          {/* Login Button */}
          <button className="px-6 py-3 text-white transition-all rounded-xl bg-cyan-900 hover:bg-cyan-800">
            Login
          </button>

          {/* Mobile Menu Icon (Only visible on small screens) */}
          <button onClick={toggleMenu} aria-label="Toggle mobile menu" className="lg:hidden ml-7">
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
