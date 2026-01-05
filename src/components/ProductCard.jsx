import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import './ProductCard.css';

const SYMBOLS = {
  IDR: 'Rp',
  USD: '$',
  GBP: '£',
  EUR: '€',
  JPY: '¥',
  INR: '₹',
};

function formatPrice(value, currency) {
  if (Number.isNaN(value)) return '-';
  const symbol = SYMBOLS[currency] || currency;
  return `${symbol}${value.toLocaleString(undefined, {
    maximumFractionDigits: currency === 'IDR' ? 0 : 2,
    minimumFractionDigits: currency === 'IDR' ? 0 : 2,
  })}`;
}

function ProductCard({ product }) {
  const { convert, currency } = useCurrency();
  const converted = convert(product.priceIdr);

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
        <div className="image-wrap">
          <img
            src={product.image}
            alt={product.imageAlt}
            width="400"
            height="500"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="card-body">
          <div className="category">{product.category}</div>
          <div className="name">{product.name}</div>
          <div className="price">{formatPrice(converted, currency)}</div>
        </div>
      </Link>
    </article>
  );
}

export default React.memo(ProductCard);