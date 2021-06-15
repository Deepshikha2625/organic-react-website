import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="Container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <p className="healthy">Healthy Life With </p>
                  <strong className="organic">Nature Organic</strong>

                  <p className=" m-3 w-75">
                    Vegetables are the edible parts of a plant that is used in
                    cooking or can be eaten now.
                  </p>
                  <div>
                    <NavLink to="/" className="btn-get-started">
                      Explore Now
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    className="img-fluid"
                    src="../images/headerimg.png"
                    alt="flower"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
