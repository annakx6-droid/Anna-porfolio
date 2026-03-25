import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ padding: '20px', background: '#1a1a1a', color: 'white' }}>
      <div className="logo">ANNA PORTFOLIO</div>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;