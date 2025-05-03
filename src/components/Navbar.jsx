import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">EduSpace</div>
      <ul className="nav-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Courses">Courses</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
}
