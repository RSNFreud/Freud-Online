import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Error404 from "../images/404.jpg";
import Error404Mobile from "../images/404-mobile.jpg";

class PageNotFound extends Component {
  state = { redirect: false };
  componentDidMount() {
    document.title = "Freud-Online | 404";
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }
  render() {
    return this.state.redirect ? (
      <Redirect to="/" />
    ) : (
      <div className="errorContainer">
        <div className="banner" style={{ minHeight: "0" }}>
          <img
            srcSet={`${Error404Mobile} 800w, ${Error404} 1920w`}
            sizes="(max-width: 800px) 600px, 1920px"
            src={Error404}
            alt="404 Page"
            style={{ height: "100%", width: "100%" }}
          ></img>
        </div>
        <div className="modalError">
          <h1 style={{ color: "#5b75b8", marginBottom: "5px" }}>
            This page cannot be found...
          </h1>
          <p
            style={{
              paddingBottom: "15px",
            }}
          >
            The page you are looking for does not exist. You will automatically
            be redirected to the homepage in a few seconds...
          </p>
          <br></br>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
