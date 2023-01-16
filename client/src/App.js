import "./App.css";
import GraphCard from "./components/GraphCard";
import { companyList, TIME, SIList } from "./constants/stats";
import LandingPage from "./components/LandingPage";
import data from "./data/data.json";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  console.log(data);

  return (
    <>
      <SignUp />
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
      <LandingPage data={data} />
    </>
  );
}

export default App;
