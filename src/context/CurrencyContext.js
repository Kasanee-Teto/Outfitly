import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { convert, fetchRates } from '../utils/exchange';

const CurrencyContext = createContext(null);

const LOCATION_TO_CURRENCY = {
  ID: 'IDR',
  US: 'USD',
  UK: 'GBP',
  EU: 'EUR',
  JP: 'JPY',
  IN: 'INR',
};

export function CurrencyProvider({ children }) {
  const [location, setLocation] = useState(() => localStorage.getItem('location') || 'ID');
  const [currency, setCurrency] = useState(() => LOCATION_TO_CURRENCY[location] || 'IDR');
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mapped = LOCATION_TO_CURRENCY[location] || 'IDR';
    setCurrency(mapped);
    localStorage.setItem('location', location);
  }, [location]);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    fetchRates('IDR')
      .then((r) => {
        if (!active) return;
        setRates(r);
      })
      .catch((err) => active && setError(err.message || 'Rate fetch failed'))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  const value = useMemo(
    () => ({
      location,
      currency,
      rates,
      loading,
      error,
      setLocation,
      convert: (priceIdr) => convert(priceIdr, currency, rates),
    }),
    [location, currency, rates, loading, error]
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider');
  return ctx;
}