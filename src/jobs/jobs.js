import * as jobTypesAPI from "./jobtypesAPI";

const jobs = [
  {
    _id: "20211",
    numberOfDays: 28,
    rating: 5,
    grade: "Living",
    startDate: "2021-12-18",
    finishDate: "2022-01-26",
    address: "98 Fowlds Avenue, Sandringham",
    jobType: { _id: "1", type: "Exterior" },
    liked: true,
  },
  {
    _id: "20212a",
    numberOfDays: 35,
    rating: 5,
    grade: "For Sale!",
    startDate: "2021-12-18",
    finishDate: "2022-01-26",
    address: "115 Fowlds Avenue, Sandringham",
    jobType: { _id: "2", type: "Interior" },
    liked: false,
  },
  {
    _id: "202102b",
    numberOfDays: 35,
    rating: 5,
    grade: "For Sale!",
    startDate: "2021-12-18",
    finishDate: "2022-01-26",
    address: "115 Fowlds Avenue, Sandringham",
    jobType: { _id: "1", type: "Exterior" },
    liked: true,
  },
  {
    _id: "20214",
    numberOfDays: 35,
    rating: 5,
    grade: "For Sale!",
    startDate: "2021-12-18",
    finishDate: "2022-01-26",
    address: "98 Hillsborough Road, Hillsborough",
    jobType: { _id: "1", type: "Exterior" },
    liked: true,
  },
  {
    _id: "20215",
    numberOfDays: 35,
    rating: 5,
    grade: "For Sale!",
    startDate: "2021-12-18",
    finishDate: "2022-01-26",
    address: "25 Fifth Avenue, Mount Albert",
    jobType: { _id: "1", type: "Exterior" },
    liked: true,
  },
  {
    _id: "20216",
    numberOfDays: 35,
    rating: 5,
    grade: "Living",
    startDate: "2021-12-18",
    finishDate: "2022-01-26",
    address: "98 Fowlds Avenue, Sandringham",
    jobType: { _id: "3", type: "Fence" },
    liked: false,
  },
  {
    _id: "20217",
    numberOfDays: 35,
    rating: 5,
    grade: "Living!",
    startDate: "2021-12-18",
    finishDate: "2022-01-26",
    address: "115 Fowlds Avenue, Sandringham",
    jobType: { _id: "3", type: "Fence" },
    liked: false,
  },
  {
    _id: "20218",
    numberOfDays: 35,
    rating: 5,
    grade: "Living",
    startDate: "2021-12-18",
    finishDate: "2022-01-26",
    address: "7 Grant Street, Mount Albert",
    jobType: { _id: "4", type: "Roof" },
    liked: false,
  },
  {
    _id: "20212",
    numberOfDays: 35,
    rating: 5,
    grade: "For Sale!",
    startDate: "2021-12-18",
    finishDate: "2022-01-26",
    address: "1/411 Blockhouse Bay Road, Blockhouse Bay",
    jobType: { _id: "4", type: "Roof" },
    liked: false,
  },
];

export function getJobs() {
  return jobs;
}
export function getJob(id) {
  return jobs.find((j) => j._id === id);
}
export function saveJob(job) {
  let jobInDb = jobs.find((j) => j._id === job.jobId) || {};
  jobInDb.address = job.address;
  jobInDb.jobType = jobTypesAPI.jobTypes.find((jt) => jt._id === job.jobTypeId);
  jobInDb.rating = job.rating;
  jobInDb.grade = job.grade;
  jobInDb.startDate = job.startDate;
  jobInDb.finishDate = job.finishDate;
  jobInDb.numberOfDays = job.numberOfDays;

  if (!jobInDb._id) {
    jobInDb._id = Date.now().toString();
    jobs.push(jobInDb);
  }

  return jobInDb;
}
export function deleteMovie(id) {
  let jobInDb = jobs.find((m) => m._id === id);
  jobs.splice(jobs.indexOf(jobInDb), 1);
  return jobInDb;
}
