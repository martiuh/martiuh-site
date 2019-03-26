import React from 'react';
import { Link } from 'gatsby';

import './Navbar.css';

const NavLink = props => (
  <Link
    {...props}
    activeClassName="navbar-item--active"
  />
)

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__top">
        <Link to="/">martiuh.com</Link>
      </div>
      <div className="navbar__bottom">      
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}