import React from "react";
import pricingImg from "../images/pricingImg.jpg";
import pricingImgMobile from "../images/pricingImg-mobile.jpg";
import { Link } from "react-router-dom";
import arrow from "../images/arrow-right.png";
import loading from "../images/loading.svg";
import Form from "./common/form";
import { submitForm, minDate } from "./common/utils";
import { quoteSchema } from "./common/schema";

class Pricing extends Form {
  state = {
    data: {
      fullName: "",
      company: "",
      phone: "",
      email: "",
      branding: "",
      additionalInfo: "",
      companyDescription: "",
      deadline: "",
      styling: "",
      websiteURL: "",
    },
    errors: {},
    loading: false,
  };
  baseState = this.state;
  schema = quoteSchema;
  doSubmit = async () => {
    let { data } = this.state;
    this.setState({ loading: true });
    let res = await submitForm(this.baseState, data, "quoteEmail");
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
    document.title = "Freud-Online | Pricing";
  }
  render() {
    return (
      <div className="pageGrid">
        <div className="bannerContainer">
          <img
            srcSet={`${pricingImgMobile} 800w, ${pricingImg} 1920w`}
            sizes="(max-width: 800px) 600px, 1920px"
            src={pricingImg}
            alt="Pricing"
          ></img>
          <div className="arrowStyle">
            <Link to="/contact">
              <img src={arrow} alt="arrow"></img>
            </Link>
          </div>
        </div>
        <div className="pageContent">
          <h1 style={{ marginBottom: "20px" }}>What are your requirements?</h1>
          We have a unique pricing plan per customer based on your needs,
          website and content. Our basic package comes with a variety of
          different services which can be found listed by clicking
          <strong>
            <Link to="/features"> here</Link>
          </strong>
          .<p></p>
          If you have any questions or concerns feel free to reach out to us via
          our
          <strong>
            <Link to="/contact"> contact form</Link>
          </strong>
          .<p></p>
          Please fill out this form as accurately as possible as this will help
          us design your site.
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
            <h4>What does your company do? *</h4> Give us a brief overview of
            what your company does, budget and any details which you may think
            will help us in building your website.<p></p>
            {this.renderTextArea("companyDescription")}
            <h4>Do you have a domain/URL in mind for your website? * </h4>
            {this.renderInput("websiteURL", "Web Address")}
            <h4>What's your deadline for this project?</h4>
            {this.renderDate("deadline", minDate())}
            <h4>
              Does your company have a logo/established image &amp; branding
              guidelines (e.g. fonts, colour schemes etc)? *
            </h4>
            {this.renderYesNo("branding", "Yes")}
            <h4>Is there any specific styling you would like to see?</h4>
            {this.renderTextArea("styling")}
            <h4>
              Is there anything else you’d like to tell us (Any ideas you have
              for your website that you would like to see)?
            </h4>
            {this.renderTextArea("additionalInfo")}
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

export default Pricing;
