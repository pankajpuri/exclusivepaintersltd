import React from "react";
const JobTypesGroup = (props) => {
  const {
    jobLists,
    textProperty,
    valueProperty,
    onJobTypeSelect,
    selectedJobType,
  } = props;
  return (
    <ul className="list-group">
      {jobLists.map((jobType) => (
        <li
          onClick={() => onJobTypeSelect(jobType)}
          key={jobType[valueProperty]}
          className={
            jobType === selectedJobType
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {jobType[textProperty]}
        </li>
      ))}
    </ul>
  );
};
JobTypesGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "type",
};
export default JobTypesGroup;
