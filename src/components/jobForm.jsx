import React from "react";
const JobForm = ({ match, history }) => {
  return (
    <div>
      <h1>Jobs:{match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/displayJobs")}
      >
        Save
      </button>
    </div>
  );
};

export default JobForm;
