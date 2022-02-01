import { useEffect } from "react";

import { drawChart } from "./D3CandleChart";
import styles from "./CandlestickChart.module.scss";

export default function CandlestickChart({ data }) {
  useEffect(() => {
    drawChart();
  }, []);

  return <svg id="container" className={styles.container} />;
}
