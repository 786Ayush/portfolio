import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white border-t border-t-gray-700 z-10">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img
            src="/logo1.png"
            alt="Logo"
            className="h-16 md:h-24 lg:h-28 transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text */}
        <p className="text-gray-400 text-sm md:text-base">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
