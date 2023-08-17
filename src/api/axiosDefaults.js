import axios from "axios";

axios.defaults.baseURL = "https://virtualclassapi-2c20ab038085.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();