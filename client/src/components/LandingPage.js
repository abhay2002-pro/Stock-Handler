import React from "react";
import { Header } from "./Parts/Header";
import { Navigation } from "./Parts/Navigation";
import { Features } from "./Parts/Features";
import { Team } from "./Parts/Team";
import { Contact } from "./Parts/Contact";

const LandingPage = (props) => {
  return (
    <>
      <Navigation />
      <Header />
      <Features data={props.data.Features} />
      <Team data={props.data.Team} />
      <Contact data={props.data.Contact} />
    </>
  );
};

export default LandingPage;
