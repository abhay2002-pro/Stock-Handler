import React from "react";
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
  //   console.log(data);
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="Date"
            tickLine={false}
            axisLine={{ stroke: "#bbbbbb" }}
            tick={{ fill: "#b0b0b0" }}
            tickFormatter={(val) => {
              const date = new Date(val);
              return `${date.getDate()}/${
                date.getMonth() + 1
              }/${date.getFullYear()}`;
            }}
          />
          <YAxis axisLine={{ stroke: "#bbbbbb" }} tick={{ fill: "#b0b0b0" }} />
          <Tooltip content={<CustomTickFormator />} />
          <Area
            type="monotone"
            dataKey="Open"
            stroke="#8676ff"
            fill="#F8F6FF"
            strokeWidth={3}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

function CustomTickFormator({ active, payload }) {
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
          <Typography>
            Date:{" "}
            {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
          </Typography>
          <Typography>Open: {data.Open.toFixed(3)}</Typography>
          <Typography>Close: {data.Close.toFixed(3)}</Typography>
          <Typography>High: {data.High.toFixed(3)}</Typography>
          <Typography>Low: {data.Low.toFixed(3)}</Typography>
        </Box>
      );
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  return null;
}
