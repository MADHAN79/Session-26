import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact activeClassName="active">All</NavLink></li>
        <li><NavLink to="/fullstack" activeClassName="active">Full Stack Development</NavLink></li>
        <li><NavLink to="/datascience" activeClassName="active">Data Science</NavLink></li>
        <li><NavLink to="/cybersecurity" activeClassName="active">Cyber Security</NavLink></li>
        <li><NavLink to="/career" activeClassName="active">Career</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
