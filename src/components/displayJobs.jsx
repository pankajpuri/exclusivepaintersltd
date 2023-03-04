import React, { Component } from "react";
import { getJobs } from "../jobs/jobs";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getJobType } from "../services/jobTypes";
import JobTypes from "./common/displayJobTypes";
import "bootstrap/dist/css/bootstrap.css";
import JobTables from "./jobTables";
import SearchBox from "./common/searchBox";
import _ from "lodash";
import { Link } from "react-router-dom";

class DisplayJobs extends Component {
  state = {
    jobs: [],
    jobTypes: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedJobType: null,
    sortColumn: { path: "address", order: "asc" },
  };
  async componentDidMount() {
    const { data } = await getJobType();
    const jobTypes = [{ _id: "", type: "All Job Types" }, ...data];
    console.log("datas are :", jobTypes);
    this.setState({ jobTypes, jobs: getJobs() });
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
    this.setState({
      selectedJobType: jobTypes,
      searchQuery: "",
      currentPage: 1,
    });
    this.setState({});
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedJobType,
      searchQuery,
      jobs: allJobs,
    } = this.state;
    let filtered = allJobs;
    if (searchQuery)
      filtered = allJobs.filter((j) =>
        j.address.toLowerCase().startsWith(searchQuery.toLocaleLowerCase())
      );
    else if (selectedJobType && selectedJobType._id)
      filtered = allJobs.filter((j) => j.jobType._id === selectedJobType._id);

    const sortedColumn = _.orderBy(
      filtered,
      [sortColumn.path],
      [sortColumn.order]
    );

    const jobs = paginate(sortedColumn, currentPage, pageSize);
    return { filtered, jobs };
  };
  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      selectedJobType: null,
      currentPage: 1,
    });
  };
  render() {
    const { length } = this.state.jobs;
    const {
      searchQuery,
      currentPage,
      pageSize,
      tableHeader,
      jobTypes,
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
                jobTypes={jobTypes}
                OnSelectJobTypes={this.handleSelectJobTypes}
                selectedJobType={selectedJobType}
              />
            </div>
            <div className="col-10">
              <Link className="btn btn-primary" to="/displayJobs/new">
                New Job
              </Link>
              <SearchBox value={searchQuery} onChange={this.handleSearch} />

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
