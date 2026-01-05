import React, { useMemo, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { categories as categoryList } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';

function Header() {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState('');
  const [category, setCategory] = useState('all');
  const navigate = useNavigate();
  const { location, setLocation, currency } = useCurrency();

  const categories = useMemo(() => ['all', ...categoryList], []);

  const onSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (term) params.set('q', term);
    if (category && category !== 'all') params.set('category', category);
    navigate(`/search?${params.toString()}`);
    setOpen(false);
  };

  return (
    <header>
      <div className="header-inner container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <h1 className="logo">Outfitly</h1>
          <label className="visually-hidden" htmlFor="location-select">
            Select location
          </label>
          <select
            id="location-select"
            className="location-select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="ID">ID (IDR)</option>
            <option value="US">US (USD)</option>
            <option value="UK">UK (GBP)</option>
            <option value="EU">EU (EUR)</option>
            <option value="JP">JP (JPY)</option>
            <option value="IN">IN (INR)</option>
          </select>
          <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>{currency}</span>
        </div>

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
          <form className="search-form" role="search" aria-label="Site search" onSubmit={onSubmit}>
            <input
              type="search"
              name="q"
              className="search-input"
              placeholder="Search fashion..."
              aria-label="Search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <select
              className="search-select"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Filter by category"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All categories' : cat}
                </option>
              ))}
            </select>
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