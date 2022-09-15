import React from "react";
const SelectOption = ({ label, name, error, value, options, onChange }) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name}>{label}</label>

      <select
        id={name}
        name={name}
        error={error}
        onChange={onChange}
        className="form-select"
      >
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

export default SelectOption;
