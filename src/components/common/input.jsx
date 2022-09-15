import React from "react";
const Input = ({ name, onChange, label, errors, value, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        id={name}
        className="form-control"
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
