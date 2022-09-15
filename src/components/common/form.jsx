import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import SelectOption from "./selectOption";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);
    const errors = {};
    if (!error) return null;
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);
    return result.error ? result.error.details[0].message : null;
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessages = this.validateProperty(input);
    if (errorMessages) errors[input.name] = errorMessages;
    else delete errors[input.name];

    const { data } = this.state;
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };
  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        className="btn btn-primary "
        style={{ marginTop: "18px" }}
      >
        {label}
      </button>
    );
  }
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        value={data[name]}
        type={type}
        name={name}
        label={label}
        onChange={this.handleChange}
        errors={errors[name]}
      />
    );
  }
  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <SelectOption
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
