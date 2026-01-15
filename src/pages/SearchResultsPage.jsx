import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './styles/SearchResultsPage.css';

function filterProducts(list, term, category) {
  const lowerTerm = term?.toLowerCase() || '';
  return list.filter((p) => {
    const matchesTerm =
      !lowerTerm ||
      p.name.toLowerCase().includes(lowerTerm) ||
      p.description.toLowerCase().includes(lowerTerm) ||
      p.category.toLowerCase().includes(lowerTerm);
    const matchesCategory = !category || category === 'all' || p.category === category;
    return matchesTerm && matchesCategory;
  });
}

function SearchResultsPage() {
  const [params] = useSearchParams();
  const term = params.get('q') || '';
  const category = params.get('category') || 'all';

  const filtered = useMemo(() => filterProducts(products, term, category), [term, category]);

  return (
    <main className="container search-page">
      <header className="search-header">
        <h2>Search Results</h2>
        <p>
          Showing {filtered.length} item{filtered.length === 1 ? '' : 's'} for "
          {term || 'all'}" {category !== 'all' && `(Category: ${category})`}
        </p>
      </header>
      {filtered.length === 0 ? (
        <p>No results found. Try another keyword or category.</p>
      ) : (
        <div className="results-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}

export default SearchResultsPage;