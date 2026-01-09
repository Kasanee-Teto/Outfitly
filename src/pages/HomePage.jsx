import React, { useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './styles/HomePage.css';

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function HomePage() {
  const trending = useMemo(() => shuffle(products).slice(0, 4), []);

  return (
    <div className="home-page">
      <section className="hero hero-fashion">
        <div className="hero-content container">
          <h2>Express Your Unique Style</h2>
          <p>Discover curated fashion from Goth to Vintage, Cosplay to Streetwear</p>
          <a href="*" className="btn btn-outfitly">
            Explore Collections
          </a>
        </div>
      </section>

      <main className="container outfitly-main">
        <section className="categories">
          <h3>Featured Categories</h3>
          <div className="flex-row">
            {['Goth', 'Cosplay', 'Vintage', 'Streetwear'].map((category) => {
              const sample = products.find((p) => p.category === category);
              return (
                <div className="box category-card" key={category}>
                  <img
                    src={sample?.image}
                    alt={sample?.imageAlt || `${category} fashion`}
                    loading="lazy"
                    decoding="async"
                    width="320"
                    height="260"
                  />
                  <h4>{category}</h4>
                </div>
              );
            })}
          </div>
        </section>

        <section className="trending">
          <h3>Trending Products</h3>
          <div className="flex-row" style={{ gap: '16px', flexWrap: 'wrap' }}>
            {trending.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;