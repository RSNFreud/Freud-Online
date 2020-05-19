import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";

class Navbar extends Component {
  state = {
    heightVar: "40px",
    displayVar: "none",
    closeMenu: "none",
    openMenu: "block",
  };

  toggleMenu = () => {
    let { heightVar } = this.state;

    if (heightVar === "40px") {
      this.setState({
        heightVar: "100vh",
        openMenu: "none",
        closeMenu: "block",
        displayVar: "block",
      });
      setTimeout(() => {
        this.setState({
          opacity: "1",
        });
      }, 100);
    } else {
      this.setState({
        heightVar: "40px",
        openMenu: "block",
        closeMenu: "none",
        opacity: "0",
      });
      setTimeout(() => {
        this.setState({
          displayVar: "none",
        });
      }, 500);
    }
  };

  menuRestore = () => {
    if (window.innerWidth > "600") {
      this.setState({ heightVar: "40px", displayVar: "flex", opacity: "1" });
    } else {
      this.setState({
        heightVar: "40px",
        displayVar: "none",
        openMenu: "block",
        closeMenu: "none",
        opacity: "0",
      });
    }
  };
  componentDidMount() {
    this.menuRestore();
    window.addEventListener("resize", this.menuRestore);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.menuRestore);
  }

  render() {
    return (
      <React.Fragment>
        <div className="navbar" style={{ height: this.state.heightVar }}>
          <Link to="/" style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={logo}
              alt="logo"
              style={{ height: "20px", width: "20px" }}
            />
          </Link>
          <div className="mobileNav">
            <i
              className="fas fa-bars"
              onClick={this.toggleMenu}
              style={{ cursor: "pointer", display: this.state.openMenu }}
            ></i>
            <i
              className="fas fa-times"
              onClick={this.toggleMenu}
              style={{ cursor: "pointer", display: this.state.closeMenu }}
            ></i>
          </div>
          <ul
            style={{
              display: this.state.displayVar,
              opacity: this.state.opacity,
            }}
          >
            <NavLink
              to="/"
              exact
              className="navLink"
              onClick={this.menuRestore}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/process"
              className="navLink"
              onClick={this.menuRestore}
            >
              <li>Process</li>
            </NavLink>
            <NavLink
              to="/features"
              className="navLink"
              onClick={this.menuRestore}
            >
              <li>Features</li>
            </NavLink>
            <NavLink
              to="/quotation"
              className="navLink"
              onClick={this.menuRestore}
            >
              <li>Request Quotation</li>
            </NavLink>
            <NavLink
              to="/contact"
              className="navLink"
              onClick={this.menuRestore}
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
