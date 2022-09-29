import React from "react";
const Select = ({ label, name, error, options, ...rest }) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name}>{label}</label>

      <select id={name} name={name} {...rest} className="form-select">
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.type}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
