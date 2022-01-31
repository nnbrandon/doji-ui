import axios from "axios";

export async function fetchTickers() {
  try {
    return await (
      await axios.get("http://127.0.0.1:5000/api/v1/tickers")
    ).data;
  } catch (err) {
    throw err;
  }
}

function getTickersFromStorage() {
  const tickers = localStorage.getItem("tickers");
  if (!tickers) {
    return [];
  }

  return JSON.parse(tickers);
}

export function fetchWatchedTickers() {
  const tickers = getTickersFromStorage();

  return tickers.sort((a, b) => {
    const lowercasedA = a.symbol.toLowerCase();
    const lowercasedB = b.symbol.toLowerCase();

    if (lowercasedA < lowercasedB) {
      return -1;
    }

    if (lowercasedA > lowercasedB) {
      return 1;
    }

    return 0;
  });
}

export function addTicker(newTicker) {
  const tickers = getTickersFromStorage();

  for (const ticker of tickers) {
    if (ticker.symbol === newTicker.symbol) {
      return false;
    }
  }

  tickers.push({
    ...newTicker,
    path: "/" + newTicker.symbol,
  });

  localStorage.setItem("tickers", JSON.stringify(tickers));
  return true;
}
