export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <h1 className="col-md-6" style={{ fontWeight: "bold" }}>
            Stock Market Indices
            <ul>
              <li style={{ marginTop: "35px" }}>
                <a href="">
                  <h4 style={{ fontSize: "25px", fontWeight: "bold" }}>NSE</h4>
                </a>
              </li>
              <li
                style={{
                  marginTop: "45x",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                <a href="">
                  <h4 style={{ fontSize: "25px", fontWeight: "bold" }}>BSE</h4>
                </a>
              </li>
            </ul>
          </h1>
          <h1 className="col-md-6" style={{ fontWeight: "bold" }}>
            Companies
            <ul>
              <li style={{ fontSize: "25px", fontWeight: "bold" }}>
                <a href="">
                  <h4 style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Cipla
                  </h4>
                </a>
              </li>
              <li style={{ fontSize: "25px", fontWeight: "bold" }}>
                <a href="">
                  <h4 style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Reliance
                  </h4>
                </a>
              </li>
              <li style={{ fontSize: "25px", fontWeight: "bold" }}>
                <a href="">
                  <h4 style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Tata Steel
                  </h4>
                </a>
              </li>
              <li style={{ fontSize: "25px", fontWeight: "bold" }}>
                <a href="">
                  {" "}
                  <h4 style={{ fontSize: "25px", fontWeight: "bold" }}>
                    Ashok Layland
                  </h4>
                </a>
              </li>
            </ul>
          </h1>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <a href="/" style={{ textDecoration: "none" }}>
            <i className="fa fa-github"></i> STOCK HANDLER
          </a>
        </div>
      </div>
    </div>
  );
};
