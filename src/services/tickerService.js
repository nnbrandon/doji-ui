function getTickersFromStorage() {
  const tickers = localStorage.getItem("tickers");
  if (!tickers) {
    return [];
  }

  return JSON.parse(tickers);
}

export function fetchTickers() {
  const tickers = getTickersFromStorage();

  return tickers.sort((a, b) => {
    const lowercasedA = a.text.toLowerCase();
    const lowercasedB = b.text.toLowerCase();

    if (lowercasedA < lowercasedB) {
      return -1;
    }

    if (lowercasedA > lowercasedB) {
      return 1;
    }

    return 0;
  });
}

export function addTicker(ticker) {
  const tickers = getTickersFromStorage();

  for (const ticker of tickers) {
    if (ticker.text === ticker) {
      return false;
    }
  }

  tickers.push({
    text: ticker,
    path: "/" + ticker,
  });

  localStorage.setItem("tickers", JSON.stringify(tickers));
  return true;
}
