import React, { useMemo, useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import { categories as categoryList } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';

const NAV_ID = 'primary-nav';
const LOCATION_OPTIONS = [
  { code: 'ID', label: 'ID (IDR)' },
  { code: 'US', label: 'US (USD)' },
  { code: 'UK', label: 'UK (GBP)' },
  { code: 'EU', label: 'EU (EUR)' },
  { code: 'JP', label: 'JP (JPY)' },
  { code: 'IN', label: 'IN (INR)' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState('');
  const [category, setCategory] = useState('all');
  const navigate = useNavigate();
  const location = useLocation();
  const { location: userLocation, setLocation, currency } = useCurrency();

  const categories = useMemo(() => ['all', ...categoryList], []);

  useEffect(() => {
    // Close menu on any route change
    setOpen(false);
  }, [location]);

  const onSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (term) params.set('q', term);
    if (category && category !== 'all') params.set('category', category);
    navigate(`/search?${params.toString()}`);
  };

  const handleNavItemClick = () => {
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner container">
        <div className="header-left">
          <NavLink to="/" end onClick={handleNavItemClick} style={{ textDecoration: 'none' }} >
            <h1 className="logo">Outfitly</h1>
          </NavLink>
          <label className="visually-hidden" htmlFor="location-select">
            Select location
          </label>
          <select
            id="location-select"
            className="location-select"
            value={userLocation}
            onChange={(e) => setLocation(e.target.value)}
          >
            {LOCATION_OPTIONS.map((opt) => (
              <option key={opt.code} value={opt.code}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="currency-badge">{currency}</span>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls={NAV_ID}
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>

        <nav
          id={NAV_ID}
          className={`nav-links${open ? ' nav-links-open' : ''}`}
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

          <NavLink to="/about" onClick={handleNavItemClick}>
            About Us
          </NavLink>
          <NavLink to="/contact" onClick={handleNavItemClick}>
            Contact Us
          </NavLink>
          <NavLink to="/faq" onClick={handleNavItemClick}>
            FAQ
          </NavLink>
          <a href="*" aria-label="Blog" onClick={handleNavItemClick}>
            Blog
          </a>
          <a href="*" id="loginButton" onClick={handleNavItemClick}>
            Login
          </a>
          <NavLink to="/cart" onClick={handleNavItemClick}>
            Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;