import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = { data: {}, errors: {} };
  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };

    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderInput(name, placeholder) {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        placeholder={placeholder}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderTextArea(name, placeholder, rows) {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <textarea
          name={name}
          onChange={this.handleChange}
          value={data[name]}
          placeholder={placeholder}
          rows={rows}
        ></textarea>
        {errors[name] && <div className="error">{errors[name]}</div>}
      </React.Fragment>
    );
  }
  renderDate(name, minDate) {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <input
          type="date"
          name={name}
          onChange={this.handleChange}
          min={minDate}
          value={data[name]}
        />
        {errors[name] && <div className="error">{errors[name]}</div>}
      </React.Fragment>
    );
  }
  renderYesNo(name) {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <label>
          <input
            type="radio"
            name={name}
            value="Yes"
            onChange={this.handleChange}
            checked={data[name] === "Yes"}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name={name}
            value="No"
            onChange={this.handleChange}
            checked={data[name] === "No"}
          />
          No
        </label>
        {errors[name] && <div className="error">{errors[name]}</div>}
      </React.Fragment>
    );
  }
}

export default Form;
