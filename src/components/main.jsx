import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            width={200}
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter"> NEW SEASON ARIVALS </h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;