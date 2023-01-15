import "./App.css";
import GraphCard from "./components/GraphCard";
import { companyList, TIME, SIList } from "./constants/stats";
import LandingPage from "./components/LandingPage";
import data from "./data/data.json";

function App() {
  console.log(data);
  return (
    <>
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
      {/* <GraphCard /> */}
    </>
  );
}

export default App;
