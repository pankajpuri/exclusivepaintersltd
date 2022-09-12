import React, { Component } from "react";
import Like from "./common/like";
import { Link } from "react-router-dom";
import Table from "./common/table";
class JobTables extends Component {
  columns = [
    {
      path: "address",
      label: "Address",
      content: (jobs) => (
        <Link to={`/displayJobs/${jobs._id}`}>{jobs.address}</Link>
      ),
    },
    { path: "numberOfDays", label: "Total Days" },
    { path: "rating", label: "Rating" },
    { path: "grade", label: "Grade" },
    { path: "startDate", label: "Start On" },
    { path: "finishDate", label: "Finish On" },
    { path: "jobType.type", label: "Type" },
    {
      key: "like",
      content: (job) => (
        <Like liked={job.liked} onClick={() => this.props.onClick(job)} />
      ),
    },
    {
      key: "delete",
      content: (job) => (
        <button
          onClick={() => this.props.handleDelete(job)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { jobs, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        jobs={jobs}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default JobTables;
