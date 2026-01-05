import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';
import { formatPrice } from '../utils/formatPrice';

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { convert, currency } = useCurrency();

  if (!product) {
    return (
      <main className="container" style={{ padding: '40px 0' }}>
        <h2>Product not found</h2>
        <Link className="btn btn-outfitly" to="/">
          Back to Home
        </Link>
      </main>
    );
  }

  const converted = convert(product.priceIdr);

  return (
    <main className="container" style={{ padding: '24px 0' }}>
      <div
        className="product-detail"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}
      >
        <div>
          <img
            src={product.image}
            alt={product.imageAlt || product.name}
            width="700"
            height="900"
            loading="lazy"
            decoding="async"
            style={{ width: '100%', borderRadius: '16px', objectFit: 'cover' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p style={{ color: '#6b7280' }}>{product.category}</p>
          <h2>{product.name}</h2>
          <p style={{ fontSize: '1.4rem', fontWeight: 700 }}>
            {formatPrice(converted, currency)}
          </p>
          <p>{product.description}</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className="btn btn-outfitly" type="button">
              Add to Cart
            </button>
            <button className="btn" type="button">
              Save to Wishlist
            </button>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>
            Prices converted from IDR using latest cached rates.
          </p>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailPage;