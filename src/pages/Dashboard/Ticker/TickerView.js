import CandlestickChart from "../../../components/CandlestickChart/CandlestickChart";
function TickerView({ match }) {
  const { ticker } = match.params;

  return (
    <div>
      <h1>Ticker page for {ticker}</h1>
      <CandlestickChart />
    </div>
  );
}

export default TickerView;
