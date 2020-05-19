import React, { Component } from "react";
import { Link } from "react-router-dom";
import topbanner from "../images/topbanner.jpg";
import topbannerMobile from "../images/topbanner-mobile.jpg";
import arrow from "../images/arrow.png";

class Index extends Component {
  state = {};
  styles = {
    height: "100%",
    width: "100%",
  };
  componentDidMount() {
    document.title = "Freud-Online | Home";
  }
  render() {
    return (
      <React.Fragment>
        <img
          srcSet={`${topbannerMobile} 800w, ${topbanner} 1920w`}
          sizes="(max-width: 800px) 600px, 1920px"
          src={topbanner}
          style={this.styles}
          alt="Splash screen"
        ></img>
        <div
          className="arrowStyle"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            right: 0,
          }}
        >
          <Link to="/process">
            <img src={arrow} alt="arrow"></img>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
