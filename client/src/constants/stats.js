import nse from "../images/nse.png";
import bse from "../images/bse.png";
import ashokley from "../images/ashokley.png";
import cipla from "../images/cipla.png";
import tatasteel from "../images/tatasteel.png";
import Reliance from "../images/Reliance.png";

export const companyList = [
  { name: "Reliance", value: "reliance" },
  { name: "Ashokley", value: "ashokley" },
  {
    name: "Tatasteel",
    value: "tatasteel",
  },
  {
    name: "Cipla",
    value: "cipla",
  },
];

const imageList = {
  bse: bse,
  nse: nse,
  ashokley: ashokley,
  tatasteel: tatasteel,
  cipla: cipla,
  reliance: Reliance,
};

export const Image = ({ h, w, name }) => {
  return <img src={imageList[name]} height={h} width={w} />;
};

export const SIList = [
  { name: "NSE", value: "nse" },
  { name: "BSE", value: "bse" },
];

export const TIME = [
  { name: "1 Week", value: "1W" },
  { name: "1 month", value: "1M" },
  {
    name: "1 year",
    value: "1Y",
  },
  {
    name: "All time",
    value: "ALL",
  },
];
