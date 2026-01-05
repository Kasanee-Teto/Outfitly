import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="container" style={{ padding: '40px 0', textAlign: 'center' }}>
      <h2>Page not found</h2>
      <p>The page you’re looking for doesn&apos;t exist.</p>
      <Link className="btn btn-outfitly" to="/">
        Back to Home
      </Link>
    </main>
  );
}

export default NotFoundPage;