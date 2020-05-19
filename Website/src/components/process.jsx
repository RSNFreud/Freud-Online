import React, { Component } from "react";
import processImg from "../images/processImg.jpg";
import processImgMobile from "../images/processImg-mobile.jpg";
import { Link } from "react-router-dom";
import arrow_right from "../images/arrow-right.png";

class Features extends Component {
  state = {};
  h2Style = {
    fontWeight: "300",
    marginBottom: "10px",
  };
  componentDidMount() {
    document.title = "Freud-Online | Process";
  }
  render() {
    return (
      <div className="pageGrid">
        <div className="bannerContainer">
          <img
            srcSet={`${processImgMobile} 800w, ${processImg} 1920w`}
            sizes="(max-width: 800px) 600px, 1920px"
            src={processImg}
            alt="Process"
          ></img>
          <div className="arrowStyle">
            <Link to="/features">
              <img src={arrow_right} alt="arrow"></img>
            </Link>
          </div>
        </div>
        <div className="pageContent">
          <h1 style={{ marginBottom: "20px" }}>How does it work?</h1>
          <h2 style={this.h2Style}>
            <strong>Step 1:</strong> Contact
          </h2>
          Send us an email using our contact form and we will contact you as
          soon as possible to give you a price and discuss your requirements.
          <p></p>
          <h2 style={this.h2Style}>
            <strong>Step 2:</strong> Design
          </h2>
          Once costs and terms are agreed, we then create for you a design of
          how the website will look. This includes: colour, font, placement of
          content, images, plus everything else you will see when your website
          is complete.
          <p></p>
          <h2 style={this.h2Style}>
            <strong>Step 3:</strong> Building
          </h2>
          Once you are happy with the design we begin to build your website.
          Throughout the process you will be regularly updated and will be able
          to view the website as it begins to take shape.
          <p></p>
          <h2 style={this.h2Style}>
            <strong>Step 4:</strong> Content and Completion
          </h2>
          Once the website is built it's time to add in your content. Simply
          send to us the content for each page and we will insert it in.
        </div>
      </div>
    );
  }
}

export default Features;
