const SYMBOLS = {
  IDR: 'Rp',
  USD: '$',
  GBP: '£',
  EUR: '€',
  JPY: '¥',
  INR: '₹',
};

/**
 * Format a numeric price using the active currency.
 * Falls back to the raw value when the currency is unknown.
 */
export function formatPrice(value, currency) {
  if (Number.isNaN(value)) return '-';
  const symbol = SYMBOLS[currency] || currency || '';
  const isIdr = currency === 'IDR';
  return `${symbol}${value.toLocaleString(undefined, {
    maximumFractionDigits: isIdr ? 0 : 2,
    minimumFractionDigits: isIdr ? 0 : 2,
  })}`;
}

export { SYMBOLS };