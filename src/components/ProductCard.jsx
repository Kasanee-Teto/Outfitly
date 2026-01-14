import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import { formatPrice } from './utils/formatPrice';
import './styles/ProductCard.css';
import ProductRate from './ProductRates/ProductRate';

function ProductCard({ product }) {
  const { convert, currency } = useCurrency();
  const converted = convert(product.priceIdr);

  const submitRate = () => {
    alert('Thank you for your rating!');
  }

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
        <div className="product-card-body p-2">
          <div className="category">{product.category}</div>
          <div className="name">{product.name}</div>
          <div className="d-flex justify-content-between">
            <div className="price">{formatPrice(converted, currency)}</div>
            <div className="rate">
              <ProductRate onChange={submitRate}></ProductRate>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default React.memo(ProductCard);