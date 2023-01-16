import React, { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography } from "@mui/material";

export default function Graph({ data }) {
  const transfromData = (data) => {
    const transfromdata = [];
    data.forEach((ele) => {
      const date = new Date(ele.Date);
      transfromdata.push({
        ...ele,
        Time: "09:00:AM",
        Showval: ele.Open,
        DateTime: `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()} 09:00:AM`,
      });
      transfromdata.push({
        ...ele,
        Time: "03:00:PM",
        Showval: ele.Close,
        DateTime: `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()} 03:00:PM`,
      });
    });
    return transfromdata;
  };
  const newdata = useMemo(() => transfromData(data), [data]);
  console.log(newdata);
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={500}
          data={newdata}
          margin={{
            top: 15,
            right: 30,
            left: -20,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="DateTime"
            tickLine={false}
            axisLine={{ stroke: "#666" }}
            tick={<CustomizedAxisTick />}
          />
          <YAxis axisLine={{ stroke: "#666" }} tick={{ fill: "#666" }} />
          <Tooltip content={<CustomToolTip />} />
          <Area
            type="monotone"
            dataKey="Showval"
            stroke="#6372ff"
            fill="#6372ff"
            strokeWidth={3}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

function CustomizedAxisTick(props) {
  const { x, y, stroke, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={4}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
}

function CustomToolTip({ active, payload }) {
  if (active) {
    try {
      const data = payload[0].payload;
      const date = new Date(data.Date);

      return (
        <Box
          sx={{
            padding: "8px",
            color: "#383874",
            backgroundColor: "#fff",
            border: "1px solid #e4e4e4",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {data.Showval.toFixed(3)}
          </Typography>

          <Typography sx={{ fontSize: "14px" }}>
            Date:{" "}
            {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>Time: {data.Time}</Typography>
          <Typography sx={{ fontSize: "14px" }}>
            Open: {data.Open.toFixed(3)}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            Close: {data.Close.toFixed(3)}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            High: {data.High.toFixed(3)}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            Low: {data.Low.toFixed(3)}
          </Typography>
        </Box>
      );
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  return null;
}
