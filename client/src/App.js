import "./App.css";
import GraphCard from "./components/GraphCard";
import { companyList, TIME, SIList } from "./constants/stats";
function App() {
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
    </>
  );
}

export default App;
