import React from "react";
const JobTypes = (props) => {
  const {
    jobTypes,
    OnSelectJobTypes,
    selectedJobType,
    valueProperty,
    textProperty,
  } = props;
  return (
    <ul className="list-group">
      {jobTypes.map((jobtypes) => (
        <li
          // key={jobtypes._id}
          key={jobtypes[valueProperty]}
          onClick={() => OnSelectJobTypes(jobtypes)}
          className={
            jobtypes === selectedJobType
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {/* {jobtypes.type} */ jobtypes[textProperty]}
        </li>
      ))}
    </ul>
  );
};
JobTypes.defaultProps = {
  valueProperty: "_id",
  textProperty: "type",
};
export default JobTypes;
