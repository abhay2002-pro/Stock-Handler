// import logo from './logo.svg';
import "./App.css";
import GraphCard from "./components/GraphCard";
import LandingPage from "./components/LandingPage";
import data from './data/data.json'

function App() {
  console.log(data);
  return (
    <>
      <LandingPage data={data}/>
     {/* <GraphCard /> */}
    </>
  );
}

export default App;
