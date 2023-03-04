import http from "./httpService";

export function getJobType() {
  return http.get("http://localhost:3900/api/types");
}
