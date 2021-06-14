import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div id="About">
        <div className="testinomialpart">
          <h1 className="text-center">Proudly presented by</h1>
          <p className="Para m-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Carousel interval={500}>
            <Carousel.Item>
              <img
                src="../images/purenature.png"
                height="200px"
                width="350px"
                alt="image"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="../images/natureproduct.png"
                height="200px"
                width="350px"
                alt="image"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="../images/greenery.png"
                height="200px"
                width="350px"
                alt="image"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="../images/natureproduct.png"
                height="200px"
                width="350px"
                alt="image"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="../images/purenature.png"
                height="200px"
                width="350px"
                alt="image"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="about-main">
          <img src="../images/aboutquotes.png" className="rounded" alt="..." />
          <div className="text-center testinomial">
            <img className="Jane" src="../images/Jane-doe.png" alt="..." />
            <h2 className="text-center">Jane Doe</h2>
            <p>
              <StarBorderIcon>Star</StarBorderIcon>
              <StarBorderIcon>Star</StarBorderIcon>
              <StarBorderIcon>Star</StarBorderIcon>
              <StarBorderIcon>Star</StarBorderIcon>
              <StarBorderIcon>Star</StarBorderIcon>
            </p>
          </div>
          <div className="text-center">
            <p className="test">
              Thank you for all the amazing produce and products you deliver
              each week… you make my life so easy an bring goodness into our
              family eating. I’ve been roasting a lot of brussel sprouts and
            </p>
          </div>
          <div>
            <img className="img-side" src="../images/aboutleaf.png" alt="..." />
          </div>
          <div className="text-center m-5 p-5">
            <h2 className="newsletter mb-sm-5 m-5">
              Subscribe to Our Newsletter
            </h2>
            <p className="paranews">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-3">
              <input
                className="mail"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
              ></input>

              <NavLink to="/" className="btn-get-started">
                Subscribe
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
