import GraphCard from "../GraphCard";
export const Graphs = (props) => {
  return (
    <div id = {props.id}>
      <div id="features" className="text-center" style={{"paddingTop": "100px"}}>
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>{props.name}</h2>
          </div>
        </div>
      </div>
      <div>
        <GraphCard
          TIME={props.TIME}
          showoptions={props.list}
          defaultoption={props.default}
          search={props.search}
        />
      </div>
    </div>
  );
};
