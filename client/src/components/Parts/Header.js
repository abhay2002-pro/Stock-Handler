export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  Stock Handler
                  <span></span>
                </h1>
                <p>Place to handle your stocks</p>
                <a
                  href="#si"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Get Started
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
