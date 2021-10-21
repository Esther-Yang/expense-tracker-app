import React from "react";
import classes from "./Chart.module.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //transform a dataPoint object to value, and map() return an array
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className={classes["chart"]}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
