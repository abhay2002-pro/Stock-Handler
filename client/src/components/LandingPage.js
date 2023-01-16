import React from "react";
import { Header } from "./Parts/Header";
import { Navigation } from "./Parts/Navigation";
import { Features } from "./Parts/Features";
import { Graphs } from "./Parts/Graphs";
import  Footer  from "./Parts/Footer";
import { companyList, SIList, TIME } from "../constants/stats";

const LandingPage = (props) => {
  return (
    <>
      <Navigation />
      <Header />
      <Features data={props.data.Ways_to_grow_your_wealth} />
      {/* <Team data={props.data.Team} /> */}
      <Graphs
        name="stock market indices"
        default="nse"
        id="si"
        list={SIList}
        search="stocks"
        TIME={TIME}
      />
      <Graphs
        name="companies stocks"
        default="reliance"
        id="company"
        list={companyList}
        search="company"
        TIME={TIME}
      />
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
