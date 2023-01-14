import React, { useState, useEffect } from "react";
import Graph from "../Graph";
import {
  Box,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

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
      <Box
        sx={{
          border: "1px solid #e4e4e4",
          borderRadius: "5px",
          padding: "10px 15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h5"
            component="h4"
            sx={{ color: "#383874", fontSize: "18px", fontWeight: "bold" }}
          >
            {company.toUpperCase()}
          </Typography>
          <Box>
            <FormControl
              sx={{ width: "110px", fontSize: "15px", marginRight: "8px" }}
            >
              <InputLabel id="demo-simple-select-label">Company</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="company"
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              >
                <MenuItem value="reliance" selected>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ color: "#383874", fontWeight: "bold" }}
                  >
                    {" "}
                    Reliance
                  </Typography>
                </MenuItem>
                <MenuItem value="ashokley">
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ color: "#383874", fontWeight: "bold" }}
                  >
                    {" "}
                    Ashokley
                  </Typography>
                </MenuItem>
                <MenuItem value="tatasteel">
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ color: "#383874", fontWeight: "bold" }}
                  >
                    {" "}
                    Tatasteel
                  </Typography>
                </MenuItem>
                <MenuItem value="cipla">
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ color: "#383874", fontWeight: "bold" }}
                  >
                    {" "}
                    Cipla
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "110px", fontSize: "15px" }}>
              <InputLabel id="demo-simple-select-label"> Time</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="time"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              >
                <MenuItem value="1W" selected>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ color: "#383874", fontWeight: "bold" }}
                  >
                    {" "}
                    1 Week
                  </Typography>
                </MenuItem>
                <MenuItem value="1M">
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ color: "#383874", fontWeight: "bold" }}
                  >
                    {" "}
                    1 Month
                  </Typography>
                </MenuItem>
                <MenuItem value="1Y">
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ color: "#383874", fontWeight: "bold" }}
                  >
                    {" "}
                    1 Year
                  </Typography>
                </MenuItem>
                <MenuItem value="ALL">
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ color: "#383874", fontWeight: "bold" }}
                  >
                    {" "}
                    All time
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ margin: "10px", width: "100%", height: "400px" }}>
          <Graph data={data} />
        </Box>
      </Box>
    </Box>
  );
}
