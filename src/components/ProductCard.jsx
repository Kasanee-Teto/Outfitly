import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import { formatPrice } from '../utils/formatPrice';
import './ProductCard.css';

function ProductCard({ product }) {
  const { convert, currency } = useCurrency();
  const converted = convert(product.priceIdr);

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
        <div className="image-wrap">
          <img
            src={product.image}
            alt={product.imageAlt || product.name}
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