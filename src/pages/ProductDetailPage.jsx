import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';
import { formatPrice } from '../utils/formatPrice';
import './styles/ProductDetailPage.css';

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { convert, currency } = useCurrency();

  if (!product) {
    return (
      <main className="container notfound-page">
        <h2>Product not found</h2>
        <Link className="btn btn-outfitly" to="/">
          Back to Home
        </Link>
      </main>
    );
  }

  const converted = convert(product.priceIdr);

  return (
    <main className="container product-detail-page">
      <div className="product-detail">
        <div>
          <img
            className="product-image"
            src={product.image}
            alt={product.imageAlt || product.name}
            width="700"
            height="900"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="product-meta">
          <p className="product-category">{product.category}</p>
          <h2>{product.name}</h2>
          <p className="product-price">{formatPrice(converted, currency)}</p>
          <p>{product.description}</p>
          <div className="product-actions">
            <button className="btn btn-outfitly" type="button">
              Add to Cart
            </button>
            <button className="btn" type="button">
              Save to Wishlist
            </button>
          </div>
          <p className="product-note">
            Prices converted from IDR using latest cached rates.
          </p>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailPage;