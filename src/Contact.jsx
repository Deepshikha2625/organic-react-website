import React from "react";

const Contact = () => {
  return (
    <>
      <div
        className="main-footer w-auto"
        style={{
          backgroundImage: `url("../images/footer.png")`,
        }}
      >
        <div className="container">
          {/*Footer background*/}
          <div className="footer-col">
            <div className="row">
              {/*Column1*/}
              <div className="col-md-3 col-sm-6">
                <img src="../images/logo.png" />
                <ul className="list-unstyled">
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
              </div>

              {/*Column2*/}
              <div className="col-md-3 col-sm-6">
                <h4>Information</h4>
                <ul className="list-unstyled">
                  <li>About Us</li>
                  <li>Products</li>
                  <li>Contact US</li>
                  <li>Terms of Service</li>
                </ul>
              </div>

              {/*Column3*/}
              <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled">
                  <li>About Us</li>
                  <li>Products</li>
                </ul>
              </div>

              {/*Column4*/}
              <div className="col-md-3 col-sm-6">
                <h4>Follow Us</h4>
                <ul className="list-unstyled">
                  <li>
                    <img src="../images/fbicon.png" />
                  </li>
                  <li>
                    <img src="../images/instaicon.png" />
                  </li>
                  <li>
                    <img src="../images/linkedinicon.png" />
                  </li>
                  <li>lorem</li>
                </ul>
              </div>
            </div>
            {/*Footer bottom*/}
            <div className="footer-bottom">
              <p className="text-xs-center">© Copyright 2020 Nature</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
