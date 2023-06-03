import axios from "axios";
import { BASE_URL, TIME_OUT } from "./config";

class MyAxios {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    //拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.instance.request({ ...config, method: "get" });
  }

  post(config) {
    return this.instance.request({ ...config, method: "post" });
  }
}

const instanceRequest = new MyAxios(BASE_URL, TIME_OUT);
export default instanceRequest;
