import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
