import { useEffect } from "react";

import { drawChart } from "./d3-CandlestickChart";
import styles from "./CandlestickChart.module.scss";

export default function CandlestickChart({ chartData }) {
  useEffect(() => {
    setTimeout(() => {
      console.log("called");
      drawChart(chartData);
    }, 500);
  }, [chartData]);

  return <svg id="container" className={styles.container} />;
}
