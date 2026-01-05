const CACHE_KEY = 'exchange_rates_IDR';
const CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

export function convert(priceIdr, targetCurrency, rates) {
  if (!targetCurrency || targetCurrency === 'IDR') return priceIdr;
  const rate = rates?.[targetCurrency.toLowerCase()];
  if (!rate || Number.isNaN(rate)) return priceIdr;
  return priceIdr * rate;
}

async function fetchWithFallback(urls) {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      return res.json();
    } catch (_) {
      // try next
    }
  }
  throw new Error('All exchange rate sources failed');
}

export async function fetchRates(baseCurrency = 'IDR') {
  const cachedRaw = localStorage.getItem(CACHE_KEY);
  if (cachedRaw) {
    try {
      const cached = JSON.parse(cachedRaw);
      if (Date.now() - cached.timestamp < CACHE_TTL_MS && cached.base === baseCurrency) {
        return cached.rates;
      }
    } catch (_) {
      // ignore and refetch
    }
  }

  const envBase =
    process.env.REACT_APP_EXCHANGE_API_URL && process.env.REACT_APP_EXCHANGE_API_URL.trim();
  const base = baseCurrency.toLowerCase();

  const urls = [];
  if (envBase) {
    const clean = envBase.replace(/\/$/, '');
    urls.push(`${clean}/currencies/${base}.json`);
  }
  // Fallback chain as requested (supports any base, defaulting to eur sequence)
  urls.push(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.min.json`,
    `https://latest.currency-api.pages.dev/v1/currencies/${base}.min.json`,
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.json`,
    `https://latest.currency-api.pages.dev/v1/currencies/${base}.json`
  );

  const data = await fetchWithFallback(urls);
  const rates = data?.[base] || {};

  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({ base: baseCurrency, rates, timestamp: Date.now() })
  );
  return rates;
}