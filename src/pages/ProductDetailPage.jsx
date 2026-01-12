import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCurrency } from '../context/CurrencyContext';
import { formatPrice } from '../utils/formatPrice';
import './styles/ProductDetailPage.css';
import Button from '../components/Buttons/Button.jsx';
import ProductRate from '../components/ProductRates/ProductRate.jsx';
import WishlistButton from '../components/WishlistButtons/WishlistButton.jsx';
import LikeButton from '../components/LikeButtons/LikeButton.jsx';

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { convert, currency } = useCurrency();

  const submitRate = () => {
    alert('Thank you for your rating!');
  }

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
          <div className="row">
            <div className="col-12 col-sm-6">
              <WishlistButton></WishlistButton>
            </div>
            <div className="col-12 col-sm-6">
              <LikeButton></LikeButton>
            </div>
          </div>
          <div className="product-actions">
            <button className="btn btn-outfitly w-100" type="button">
              Add to Cart
            </button>˝
          </div>
          <p className="product-note">
            Prices converted from IDR using latest cached rates.
          </p>
          <ProductRate onChange={submitRate}></ProductRate>
          <label htmlFor="feedback">Feedback</label>
          <textarea name="feedback" id="feedback"></textarea>
          <Button text='Submit'></Button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailPage;