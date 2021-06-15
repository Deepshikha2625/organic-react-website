import React from "react";

const Contact = () => {
  return (
    <>
      <div
        className="main-footer w-auto "
        style={{
          backgroundImage: `url("../images/footer.png")`,
        }}
      >
        <div className="container">
          {/*Footer background*/}
          <div className="footer-col">
            <div className="row">
              {/*Column1*/}
              <div className="col-md-3 col-sm-6 ">
                <img className="mx-3 m-3 ml-n4 p-4 " src="../images/logo.png" />
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <hr className="bottom-style" />
              </div>

              {/*Column2*/}
              <div className="col-md-3 col-sm-6">
                <h4 className="information">Information</h4>
                <br />
                <br />
                <hr className="bottom-style" />
                <ul className="list-unstyled">
                  <li>About Us</li>
                  <li>Products</li>
                  <li>Contact US</li>
                  <li>Terms of Service</li>
                </ul>
              </div>

              {/*Column3*/}
              <div className="col-md-3 col-sm-6">
                <ul className="list-unstyled m-5 p-4">
                  <li>About Us</li>
                  <li>Products</li>
                </ul>
              </div>

              {/*Column4*/}
              <div className="col-md-3 col-sm-6 ">
                <h4 className="follow ">Follow Us</h4>
                <br />
                <hr className="bottom-style follow-style" />
                <ul className="list-unstyled d-inline-flex p-3">
                  <li className="m-2">
                    <img src="../images/fbicon.png" />
                  </li>
                  <li className="m-2 ">
                    <img src="../images/instaicon.png" />
                  </li>
                  <li className="m-2 ">
                    <img src="../images/linkedinicon.png" />
                  </li>
                </ul>
              </div>
            </div>
            {/*Footer bottom*/}
            <div className="footer-bottom text-white">
              <p className="text-xs-center">© Copyright 2020 Nature</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
