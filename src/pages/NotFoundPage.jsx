import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NotFoundPage.css';

function NotFoundPage() {
  return (
    <main className="container notfound-page">
      <h2>Page not found</h2>
      <p>The page you’re looking for doesn&apos;t exist.</p>
      <Link className="btn btn-outfitly" to="/">
        Back to Home
      </Link>
    </main>
  );
}

export default NotFoundPage;