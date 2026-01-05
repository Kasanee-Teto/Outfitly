import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './outfitly.css';
import { CurrencyProvider } from './context/CurrencyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </BrowserRouter>a
  </React.StrictMode>
);