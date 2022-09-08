import React, { Component } from "react";
import { getJobs } from "./jobs";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
class DisplayJobs extends Component {
  state = {
    jobs: getJobs(),
    tableHeader: [
      "Address",
      "Number Of Days",
      "Rating",
      "Grade",
      "Start Date",
      "Finish Date",
      "Job Type",
      "",
    ],
    pageSize: 4,
    currentPage: 1,
  };
  handleDelete = (job) => {
    const jobs = this.state.jobs.filter((j) => j._id !== job._id);
    this.setState({ jobs });
  };
  handleLike = (job) => {
    const jobs = [...this.state.jobs];
    const index = jobs.indexOf(job);
    jobs[index] = { ...jobs[index] };
    jobs[index].liked = !jobs[index].liked;
    this.setState({ jobs });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { length } = this.state.jobs;
    const { jobs: allJobs, currentPage, pageSize, tableHeader } = this.state;
    if (length === 0) return <p>There are no jobs in the database.</p>;

    const jobs = paginate(allJobs, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="container py-5">
          <p>There are {length} in the database.</p>
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
                    <Like
                      liked={job.liked}
                      onClick={() => this.handleLike(job)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(job)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DisplayJobs;
