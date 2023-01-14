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
import { Box, Text } from "@chakra-ui/react";

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
            tickFormatter={(val) => {
              return new Date(val).toDateString();
            }}
          />
          <YAxis />
          <Tooltip
            cursor={{ stroke: "red", strokeWidth: 2 }}
            content={<CustomTickFormator />}
          />
          <Area
            type="monotone"
            dataKey="Open"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

function CustomTickFormator({ active, payload }) {
  if (active) {
    const data = payload[0].payload;
    return (
      <Box p="5px" backdropBlur="6px" bgColor="rgba(255, 255, 255, 0.5)">
        <Text>Date: {new Date(data.Date).toDateString()}</Text>
        <Text>Open: {data.Open}</Text>
        <Text>Close: {data.Close}</Text>
        <Text>High: {data.High}</Text>
        <Text>Low: {data.Low}</Text>
      </Box>
    );
  }

  return null;
}
