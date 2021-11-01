import { apiV1, get, patch, post } from "api/generic";
import { ClassModel } from "lib/models";

const classListApi = {
  fetchMyClassList: function (token: string) {
    const url = `${apiV1}/class`;
    return get(url, token);
  },
  postNewClass: function (data: ClassModel, token: string) {
    const url = `${apiV1}/class`;
    return post(url, data, token);
  },
};
export default classListApi;
