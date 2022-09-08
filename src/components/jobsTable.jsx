import React from "react";
import Like from "./common/like";

const JobsTable = (props) => {
  const { jobs, onLike, onDelete, tableHeader } = props;
  return (
    <table className="table table-striped">
      <thead>
        {tableHeader.map((header) => (
          <th>
            <td>{header}</td>
          </th>
        ))}
      </thead>
      <tbody>
        {jobs.map((job) => (
          <tr key={job._id}>
            <td>{job.address}</td>
            <td>{job.numberOfDays}</td>
            <td>{job.rating}</td>
            <td>{job.grade}</td>
            <td>{job.startDate}</td>
            <td>{job.finishDate}</td>
            <td>{job.jobType.type}</td>
            <td>
              <Like liked={job.liked} onClick={() => onLike(job)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(job)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JobsTable;
