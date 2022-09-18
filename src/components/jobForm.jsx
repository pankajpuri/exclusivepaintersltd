import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getJobType } from "../jobs/jobtypesAPI";
import { getJob, saveJob } from "../jobs/jobs";
class JobForm extends Form {
  state = {
    data: {
      address: "",
      rating: "",
      grade: "",
      startDate: "",
      finishDate: "",
      jobTypeId: "",
    },
    jobTypes: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    address: Joi.string().required().label("Address"),
    grade: Joi.string().required().label("Grade"),
    rating: Joi.number().required().min(1).max(5).label("Rating"),
    startDate: Joi.string(),
    finishDate: Joi.string(),
    numberOfDays: Joi.number().required().label("Number of days"),
    jobTypeId: Joi.string().required().label("Type"),
  };

  componentDidMount() {
    const jobTypes = getJobType();
    this.setState({ jobTypes });

    const jobId = this.props.match.params.id;
    if (jobId === "new") return;

    const job = getJob(jobId);
    if (!job) return this.props.history.replace("/notFound");

    this.setState({ data: this.mapToViewModel(job) });
  }
  mapToViewModel = (job) => {
    return {
      _id: job._id,
      address: job.address,
      grade: job.grade,
      rating: job.rating,
      startDate: job.startDate,
      finishDate: job.finishDate,
      jobTypeId: job.jobType._id,
      numberOfDays: job.numberOfDays,
    };
  };

  doSubmit = () => {
    //call server
    saveJob(this.state.data);
    this.props.history.push("/displayJobs");
    console.log("New Job is added to the list.");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("address", "Address")}
          {this.renderInput("grade", "Grade")}
          {this.renderInput("rating", "Rating")}
          {this.renderInput("startDate", "Start On", "date")}
          {this.renderInput("finishDate", "Finish On", "date")}
          {this.renderInput("numberOfDays", "Total Days")}
          {this.renderSelect("jobTypeId", "Type", this.state.jobTypes)}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default JobForm;
