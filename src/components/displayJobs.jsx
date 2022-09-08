import React, { Component } from "react";
import { getJobs } from "../jobs/jobs";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import JobTypesGroup from "./jobtypesGroup";
import { getJobType } from "../jobs/jobtype";
import JobsTable from "./jobsTable";
class DisplayJobs extends Component {
  state = {
    jobs: getJobs(),
    jobType: [],
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
  componentDidMount() {
    const jobType = [{ type: "All Job Types" }, ...getJobType()];
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
  handleSelectedJobType = (jobType) => {
    this.setState({ selectedJobType: jobType, currentPage: 1 });
  };
  render() {
    const { length } = this.state.jobs;
    const {
      jobs: allJobs,
      currentPage,
      pageSize,
      tableHeader,
      jobType,
      selectedJobType,
    } = this.state;
    if (length === 0) return <p>There are no jobs in the database.</p>;
    const filtered =
      selectedJobType && selectedJobType._id
        ? allJobs.filter((jt) => jt.jobType._id === selectedJobType._id)
        : allJobs;
    const jobs = paginate(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="container py-5">
          <p>There are {filtered.length} in the database.</p>
          <div className="row">
            <div className="col-2">
              <JobTypesGroup
                jobLists={jobType}
                selectedJobType={selectedJobType}
                onJobTypeSelect={this.handleSelectedJobType}
              />
            </div>
            <div className="col-10">
              <JobsTable
                tableHeader={tableHeader}
                jobs={jobs}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
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
