import { useEffect, useRef } from "react";
import { CandlestickChart } from "../../../components/CandlestickChart/chart";

const aapl = require("../../../components/CandlestickChart/aapl.json");

function TickerView({ match }) {
  const { ticker } = match.params;

  const svg = useRef(null);
  useEffect(() => {
    const chart = CandlestickChart(aapl, { width: 1000, height: 600 });
    if (svg.current) {
      svg.current.appendChild(chart);
    }
  }, []);

  return (
    <div>
      <h1>Ticker page for {ticker}</h1>
      <div ref={svg} />
    </div>
  );
}

export default TickerView;
