import React, { Component } from "react";
import { getJobs } from "../jobs/jobs";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getJobType } from "../jobs/jobtype";
import JobTypes from "./common/displayJobTypes";
import "bootstrap/dist/css/bootstrap.css";
import JobTables from "./jobTables";
import _ from "lodash";
class DisplayJobs extends Component {
  state = {
    jobs: getJobs(),
    jobType: [],
    sortColumn: { path: "address", order: "asc" },
    pageSize: 4,
    currentPage: 1,
  };
  componentDidMount() {
    const jobType = [{ _id: "", type: "All Job Types" }, ...getJobType()];
    this.setState({ jobType });
  }
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
  handleSelectJobTypes = (jobTypes) => {
    this.setState({ selectedJobType: jobTypes });
    this.setState({ currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPageData = () => {
    const {
      jobs: allJobs,
      currentPage,
      pageSize,
      selectedJobType,
      sortColumn,
    } = this.state;
    const filtered =
      selectedJobType && selectedJobType._id
        ? allJobs.filter((j) => j.jobType._id === selectedJobType._id)
        : allJobs;

    const sortedColumn = _.orderBy(
      filtered,
      [sortColumn.path],
      [sortColumn.order]
    );

    const jobs = paginate(sortedColumn, currentPage, pageSize);
    return { filtered, jobs };
  };
  render() {
    const { length } = this.state.jobs;
    const {
      currentPage,
      pageSize,
      tableHeader,
      jobType,
      selectedJobType,
      sortColumn,
    } = this.state;
    if (length === 0) return <p>There are no jobs in the database.</p>;
    const { filtered, jobs } = this.getPageData();
    return (
      <React.Fragment>
        <div className="container py-5">
          <p>There are {filtered.length} in the database.</p>
          <div className="row">
            <div className="col-2">
              <JobTypes
                jobTypes={jobType}
                OnSelectJobTypes={this.handleSelectJobTypes}
                selectedJobType={selectedJobType}
              />
            </div>
            <div className="col-10">
              <JobTables
                jobs={jobs}
                tableHeader={tableHeader}
                onClick={this.handleLike}
                onSort={this.handleSort}
                sortColumn={sortColumn}
              />
            </div>
          </div>

          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DisplayJobs;
