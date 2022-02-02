import * as d3 from "d3";

/**
 * NEEDS TO BE REFACTORED
 * @param {*} chartData
 */
export function drawChart(chartData) {
  const months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  chartData.forEach((data) => {
    data.date = d3.timeParse("%Y-%m-%d")(data.date);
  });

  let dates = chartData.map((data) => data.date);
  console.log(d3.select("#container").node().clientWidth);

  const container = d3.select("#container");
  const tooltip = d3
    .select("body")
    .append("div")
    .style("position", "absolute")
    .style("width", "30%")
    .style("z-index", 30)
    .style("white-space", "pre-wrap")
    .style("visibility", "hidden");

  const margin = { top: 15, right: 65, bottom: 205, left: 50 },
    w = container.node().clientWidth / 1.1,
    h = container.node().clientHeight / 1.5;

  var svg = container
    .attr("width", w + margin.left + margin.right)
    .attr("height", h + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var xmin = d3.min(chartData.map((data) => data.date.getTime()));
  var xmax = d3.max(chartData.map((data) => data.date.getTime()));
  var xScale = d3.scaleLinear().domain([-1, dates.length]).range([0, w]);
  var xDateScale = d3.scaleQuantize().domain([0, dates.length]).range(dates);
  let xBand = d3
    .scaleBand()
    .domain(d3.range(-1, dates.length))
    .range([0, w])
    .padding(0.3);
  var xAxis = d3
    .axisBottom()
    .scale(xScale)
    .tickFormat(function (d) {
      d = dates[d];
      return months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();
    });

  svg
    .append("rect")
    .attr("id", "rect")
    .attr("width", w)
    .attr("height", h)
    .style("fill", "none")
    .style("pointer-events", "all")
    .attr("clip-path", "url(#clip)");

  var gX = svg
    .append("g")
    .attr("class", "axis x-axis") //Assign "axis" class
    .attr("transform", "translate(0," + h + ")")
    .call(xAxis);

  var ymin = d3.min(chartData.map((data) => data.low));
  var ymax = d3.max(chartData.map((data) => data.high));
  var yScale = d3.scaleLinear().domain([ymin, ymax]).range([h, 0]).nice();
  var yAxis = d3.axisLeft().scale(yScale);

  var gY = svg.append("g").attr("class", "axis y-axis").call(yAxis);

  var chartBody = svg
    .append("g")
    .attr("class", "chartBody")
    .attr("clip-path", "url(#clip)");

  // draw rectangles
  let candles = chartBody
    .selectAll(".candle")
    .data(chartData)
    .enter()
    .append("rect")
    .attr("x", (d, i) => xScale(i) - xBand.bandwidth())
    .attr("class", "candle")
    .attr("y", (d) => yScale(Math.max(d.open, d.close)))
    .attr("width", xBand.bandwidth())
    .attr("height", (d) =>
      d.open === d.close
        ? 1
        : yScale(Math.min(d.open, d.close)) - yScale(Math.max(d.open, d.close))
    )
    .attr("fill", (data) =>
      data.open === data.close
        ? "silver"
        : data.open > data.close
        ? "red"
        : "green"
    );

  // draw high and low
  let stems = chartBody
    .selectAll("g.line")
    .data(chartData)
    .enter()
    .append("line")
    .attr("class", "stem")
    .attr("x1", (d, i) => xScale(i) - xBand.bandwidth() / 2)
    .attr("x2", (d, i) => xScale(i) - xBand.bandwidth() / 2)
    .attr("y1", (d) => yScale(d.high))
    .attr("y2", (d) => yScale(d.low))
    .attr("stroke", (d) =>
      d.open === d.close ? "white" : d.open > d.close ? "red" : "green"
    );

  svg
    .append("defs")
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", w)
    .attr("height", h);

  const extent = [
    [0, 0],
    [w, h],
  ];

  var resizeTimer;
  var zoom = d3
    .zoom()
    .scaleExtent([1, 100])
    .translateExtent(extent)
    .extent(extent)
    .on("zoom", zoomed)
    .on("zoom.end", zoomend);

  svg.call(zoom);

  function zoomed(event) {
    var t = event.transform;
    let xScaleZ = t.rescaleX(xScale);

    let hideTicksWithoutLabel = function () {
      d3.selectAll(".xAxis .tick text").each(function (d) {
        if (this.innerHTML === "") {
          this.parentNode.style.display = "none";
        }
      });
    };

    gX.call(
      d3.axisBottom(xScaleZ).tickFormat((d, e, target) => {
        if (d >= 0 && d <= dates.length - 1) {
          d = dates[d];
          if (d === undefined) return;
          return (
            months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear()
          );
        }
      })
    );

    candles
      .attr("x", (d, i) => xScaleZ(i) - (xBand.bandwidth() * t.k) / 2)
      .attr("width", xBand.bandwidth() * t.k);
    stems.attr(
      "x1",
      (d, i) => xScaleZ(i) - xBand.bandwidth() / 2 + xBand.bandwidth() * 0.5
    );
    stems.attr(
      "x2",
      (d, i) => xScaleZ(i) - xBand.bandwidth() / 2 + xBand.bandwidth() * 0.5
    );

    hideTicksWithoutLabel();
  }

  function zoomend(event) {
    var t = event.transform;
    let xScaleZ = t.rescaleX(xScale);
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      var xmin = new Date(xDateScale(Math.floor(xScaleZ.domain()[0])));
      xmax = new Date(xDateScale(Math.floor(xScaleZ.domain()[1])));
      let filtered = chartData.filter(
        (data) => data.date >= xmin && data.date <= xmax
      );
      let minP = +d3.min(filtered, (d) => d.low);
      let maxP = +d3.max(filtered, (d) => d.high);
      let buffer = Math.floor((maxP - minP) * 0.1);

      yScale.domain([minP - buffer, maxP + buffer]);
      candles
        .transition()
        .duration(250)
        .attr("y", (d) => yScale(Math.max(d.open, d.close)))
        .attr("height", (d) =>
          d.open === d.close
            ? 1
            : yScale(Math.min(d.open, d.close)) -
              yScale(Math.max(d.open, d.close))
        );

      stems
        .transition()
        .duration(250)
        .attr("y1", (d) => yScale(d.high))
        .attr("y2", (d) => yScale(d.low));

      gY.transition().duration(250).call(d3.axisLeft().scale(yScale));
    }, 500);
  }

  const formatValue = d3.format(".2f");
  candles
    .on("mousemove", (event, data) => {
      const text = `
        ${
          months[data.date.getMonth()]
        } ${data.date.getDate()} ${data.date.getFullYear()}\n
        Open: ${formatValue(data.open)}\n
        Close: ${formatValue(data.close)}\n
        Low: ${formatValue(data.low)}\n
        High: ${formatValue(data.high)}`;

      console.log(data);
      return (
        tooltip
          .style("visibility", "visible")
          .style("top", event.pageY - 10 + "px")
          // .style("left", event.pageX + 10 + "px")
          .style("left", event.pageX - 70 + "px")
          .text(text)
      );
    })
    .on("mouseout", () => {
      return tooltip.style("visibility", "hidden");
    });
}
