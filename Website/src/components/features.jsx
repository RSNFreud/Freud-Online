import React, { Component } from "react";
import featureImg from "../images/featureImg.jpg";
import featureImgMobile from "../images/featureImg-mobile.jpg";
import { Link } from "react-router-dom";
import arrow from "../images/arrow-right.png";

class Features extends Component {
  state = {};
  pStyle = { margin: 0 };
  componentDidMount() {
    document.title = "Freud-Online | Features";
  }
  render() {
    return (
      <div className="pageGrid">
        <div className="bannerContainer">
          <div className="arrowStyle">
            <Link to="/pricing">
              <img src={arrow} alt="arrow"></img>
            </Link>
          </div>
          <img
            srcSet={`${featureImgMobile} 800w, ${featureImg} 1920w`}
            sizes="(max-width: 800px) 600px, 1920px"
            src={featureImg}
            alt="Process"
          ></img>
        </div>
        <div className="pageContent">
          <h1>What's included?</h1>
          <div className="featureGrid">
            <div className="featureGridBox">
              <div className="iconFlex">
                <div className="iconCircle">
                  <i className="fas fa-question"></i>
                </div>
                <h2>Support</h2>
              </div>
              <p style={this.pStyle}>
                We offer you website support and help whenever you need it, all
                you have to do is ask. Submit your request via the dedicated
                email provided and we will respond as soon as we can.
              </p>
            </div>
            <div className="featureGridBox">
              <div className="iconFlex">
                <div className="iconCircle">
                  <i className="fas fa-phone"></i>
                </div>
                <h2>Mobile Support</h2>
              </div>
              <p style={this.pStyle}>
                Your personalised website has been designed to function both on
                mobile devices and desktop computers, thereby making it fully
                accessible to all your customers.
              </p>
            </div>
            <div className="featureGridBox">
              <div className="iconFlex">
                <div className="iconCircle">
                  <i className="fas fa-users"></i>
                </div>
                <h2>Personalised</h2>
              </div>
              <p style={this.pStyle}>
                Your website is made for <strong>you</strong> and we value your
                input. We are happy to incorporate any features you need in the
                design and management of your website.
              </p>
            </div>
            <div className="featureGridBox">
              <div className="iconFlex">
                <div className="iconCircle">
                  <i className="fas fa-server"></i>
                </div>
                <h2>Hosting and Setup</h2>
              </div>
              <p style={this.pStyle}>
                We host your website and setup your domain name for you as part
                of our package.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
