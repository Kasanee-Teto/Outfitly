import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="header-inner container">
        <h1 className="logo">Outfitly</h1>

        {/* React-controlled toggle to mimic CSS-only checkbox */}
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>

        <nav
          className="nav-links"
          style={open ? { display: 'flex' } : undefined}
          role="navigation"
          aria-label="Main navigation"
        >
          <form
            className="search-form"
            action="#"
            method="get"
            role="search"
            aria-label="Site search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="search"
              name="q"
              className="search-input"
              placeholder="Search fashion..."
              aria-label="Search"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>

          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <a href="*">Blog</a>
          <a href="*" id="loginButton">
            Login
          </a>
          <a href="*" className="profile-link">
            Profile
          </a>
          <a href="*">Cart</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;