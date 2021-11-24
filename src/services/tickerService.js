export function fetchTickers() {
  const localStorageSubreddits = Object.keys(localStorage).map((key) => {
    return {
      path: localStorage.getItem(key),
      text: key,
    };
  });
  return localStorageSubreddits.sort((a, b) => {
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
  if (!localStorage.getItem(ticker)) {
    localStorage.setItem(ticker, "/" + ticker);
  }
}
