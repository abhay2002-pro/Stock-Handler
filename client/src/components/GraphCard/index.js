import React, { useState, useEffect } from "react";
import Graph from "../Graph";
import {
  Box,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Grid,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Image } from "../../constants/stats";

export default function GraphCard({
  TIME,
  showoptions,
  defaultoption,
  search,
}) {
  const [option, setOption] = useState(defaultoption);
  const [time, setTime] = useState("1W");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(() => true);
    fetch(
      `http://localhost:4001/api/v1/${search}?time=${time}&${
        search === "company" ? "company" : "stock"
      }=${option}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(() => false);
        setData(data);
      })
      .catch((err) => {
        setLoading(() => false);
        console.log(err);
      });
  }, [option, time]);

  return (
    <Box style={{ background: "#f6f6f6" }}>
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
            sx={{ color: "#383874", fontSize: "20px", fontWeight: "bold" }}
          >
            <Image h="20px" w="20px" name={option} />
            {option.toUpperCase()}
          </Typography>
          <Box>
            <FormControl
              sx={{ width: "110px", fontSize: "15px", marginRight: "8px" }}
            >
              <InputLabel id="demo-simple-select-label">
                {search === "company" ? "Company" : "Stock"}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={search === "company" ? "company" : "stock"}
                value={option}
                onChange={(e) => {
                  setOption(e.target.value);
                }}
              >
                {showoptions.map((ele, index) => (
                  <MenuItem value={ele.value} key={index}>
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{ color: "#383874", fontWeight: "bold" }}
                    >
                      <Image h="15px" w="15px" name={ele.value} /> {ele.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "110px", fontSize: "15px" }}>
              <InputLabel id="demo-simple-select-label"> Time</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="default 1 week"
                value={"1W"}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              >
                {TIME.map((ele, index) => (
                  <MenuItem value={ele.value} key={index}>
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{ color: "#383874", fontWeight: "bold" }}
                    >
                      {" "}
                      {ele.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        {data.length > 0 && (
          <Box sx={{ padding: "5px 20px" }}>
            <Grid container spacing={2}>
              <Grid item md={4} sm={6} xs={12}>
                <Box
                  sx={{
                    borderBottom: "1px dotted #e4e4e4",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <Typography sx={{ color: "#666", fontSize: "15px" }}>
                    Open
                  </Typography>
                  <Typography
                    sx={{
                      color: "#383874",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    {data[0].Open.toFixed(3)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Box
                  sx={{
                    borderBottom: "1px dotted #e4e4e4",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <Typography sx={{ color: "#666", fontSize: "15px" }}>
                    Previous Close{" "}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#383874",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    {data[1].Close.toFixed(3)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Box
                  sx={{
                    borderBottom: "1px dotted #e4e4e4",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <Typography sx={{ color: "#666", fontSize: "15px" }}>
                    Volume
                  </Typography>
                  <Typography
                    sx={{
                      color: "#383874",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    {data[0].Volume.toFixed(3)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Box
                  sx={{
                    borderBottom: "1px dotted #e4e4e4",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <Typography sx={{ color: "#666", fontSize: "15px" }}>
                    High
                  </Typography>
                  <Typography
                    sx={{
                      color: "#383874",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    {data[0].High}
                  </Typography>
                </Box>
              </Grid>

              <Grid item md={4} sm={6} xs={12}>
                <Box
                  sx={{
                    borderBottom: "1px dotted #e4e4e4",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <Typography sx={{ color: "#666", fontSize: "15px" }}>
                    Low
                  </Typography>
                  <Typography
                    sx={{
                      color: "#383874",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    {data[0].Low}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
        <Box
          sx={{
            margin: "10px",
            width: "100%",
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loading ? <CircularProgress size={70} /> : <Graph data={data} />}
        </Box>
      </Box>
    </Box>
  );
}
