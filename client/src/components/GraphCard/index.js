import React, { useState, useEffect } from "react";
import Graph from "../Graph";
import { Box, Select } from "@chakra-ui/react";

export default function GraphCard() {
  const [company, setCompany] = useState("reliance");
  const [time, setTime] = useState("1W");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:4001/api/v1/company?time=${time}&company=${company}`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [company, time]);
  //   console.log(data);
  return (
    <Box>
      <Select
        placeholder="Select company"
        defaultChecked="reliance"
        onChange={(e) => setCompany(e.target.value)}
      >
        <option value="reliance">Reliance</option>
        <option value="ashokley">Ashokley</option>
        <option value="tatasteel">Tatasteel</option>
        <option value="cipla">Cipla</option>
      </Select>
      <Select
        placeholder="Select time"
        defaultChecked="reliance"
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="1W">1 week</option>
        <option value="1M">1 month</option>
        <option value="1Y">1 year</option>
        <option value="ALL">All time</option>
      </Select>
      <Box m="10px" width="100%" height="500px">
        <Graph data={data} />
      </Box>
    </Box>
  );
}
