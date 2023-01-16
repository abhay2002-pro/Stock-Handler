import "./App.css";
import GraphCard from "./components/GraphCard";
import { companyList, TIME, SIList } from "./constants/stats";
import LandingPage from "./components/LandingPage";
import data from "./data/data.json";

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import SignUpIn from "./components/Auth/loginsignup";

function App() {
  console.log(data);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route element={<SignUpIn />} path="/account" />
          <Route element={<LandingPage data={data} />} path="/home" />
        </Routes>
      </BrowserRouter>
      {/* <SignUp />
      <GraphCard
        TIME={TIME}
        showoptions={companyList}
        defaultoption="reliance"
        search="company"
      />
      <GraphCard
        TIME={TIME}
        showoptions={SIList}
        defaultoption="nse"
        search="stocks"
      />
      <LandingPage data={data} /> */}
    </>
  );
}

export default App;
