import React from "react";

function TickerView({ match }) {
  const { ticker } = match.params;
  return <h1>Ticker page for {ticker}</h1>;
}

export default TickerView;
