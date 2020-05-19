import React from "react";
import contactImg from "../images/contact.jpg";
import contactImgMobile from "../images/contact-mobile.jpg";
import { Link } from "react-router-dom";
import arrow from "../images/arrow-right.png";
import Form from "./common/form";
import { submitForm } from "./common/utils";
import { contactSchema } from "./common/schema";
import loading from "../images/loading.svg";

class Contact extends Form {
  state = {
    data: {
      fullName: "",
      company: "",
      phone: "",
      email: "",
      comments: "",
    },
    errors: {},
  };

  baseState = this.state;
  schema = contactSchema;
  doSubmit = async () => {
    let { data } = this.state;
    this.setState({ loading: true });
    let res = await submitForm(this.baseState, data, "contactEmail");
    this.setState({ loading: false });

    if (res === "Form submitted succesfully!") {
      this.setState(this.baseState);
      this.setState({ successMsg: res });
      setTimeout(() => {
        this.setState({ successMsg: null });
      }, 5000);
    } else {
      this.setState({ errors: { post: res } });
    }
  };

  componentDidMount() {
    document.title = "Freud-Online | Contact";
  }
  render() {
    return (
      <div className="pageGrid">
        <div className="bannerContainer">
          <div className="arrowStyle">
            <Link to="/">
              <img src={arrow} alt="arrow"></img>
            </Link>
          </div>
          <img
            srcSet={`${contactImgMobile} 800w, ${contactImg} 1920w`}
            sizes="(max-width: 800px) 600px, 1920px"
            src={contactImg}
            alt="Contact"
          ></img>
        </div>
        <div className="pageContent">
          <h1 style={{ marginBottom: "20px" }}>Want to talk to us?</h1>
          We have a dedicated support team here for you. Our office hours are
          Sunday to Thursday 8am until 6pm GMT. Any question you have feel free
          to ask and we will get back to you as soon as we are able to.
          <form
            className="quoteform"
            autoComplete="off"
            onSubmit={this.handleSubmit}
            noValidate="novalidate"
          >
            {this.renderInput("fullName", "Full Name *")}
            {this.renderInput("email", "Email Address *")}
            {this.renderInput("company", "Company Name")}
            {this.renderInput("phone", "Contact Number *")}
            {this.renderTextArea("comments", "Comments/Questions *", "5")}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input type="submit" className="button" value="Send" />
              {this.state.loading && (
                <img
                  src={loading}
                  alt="Loading"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                ></img>
              )}
            </div>
            {this.state.errors["post"] && (
              <div
                className="errorBanner"
                style={{ backgroundColor: "rgb(136, 13, 13)" }}
              >
                {this.state.errors["post"]}
              </div>
            )}
            {this.state.successMsg && (
              <div className="errorBanner">{this.state.successMsg}</div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
