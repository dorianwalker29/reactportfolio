import React from 'react';

const Header = () => {
  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto', // 'auto' for instant scroll
    });
  };

  return (
    <header className="bg-gray-700 text-white py-4 px-8 flex justify-between items-center fixed top-0 w-full">
      <div className="text-xl font-bold">DW</div>
      <nav className="space-x-4">
        <a href="#home" onClick={handleHomeClick}>
          Home
        </a>
        <a href="#about">About Me</a>
        <a href="#work">My Work</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
