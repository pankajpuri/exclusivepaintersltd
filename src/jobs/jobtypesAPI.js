export const jobTypes = [
  { _id: "1", type: "Exterior" },
  { _id: "2", type: "Interior" },
  { _id: "3", type: "Fence" },
  { _id: "4", type: "Roof" },
];

export function getJobType() {
  return jobTypes.filter((j) => j);
}
