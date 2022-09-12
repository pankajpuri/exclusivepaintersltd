import React from "react";
const Login = ({ name, onChange, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        onChange={onChange}
        value={name}
        name={name}
        id={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Login;
