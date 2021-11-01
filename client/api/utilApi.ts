import { apiV1, get, patch, post } from "api/generic";

const utilApi = {
  randImg: function () {
    const url = "/api/unplash";
    return get(url, "");
  },
};
export default utilApi;
