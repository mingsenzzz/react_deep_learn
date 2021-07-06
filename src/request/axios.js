import { message } from "antd";
import axios from "axios";
axios.defaults.baseURL = "https://httpbin.org";
axios.defaults.timeout = 10000;
//所有请求方式都默认携带token
axios.defaults.headers.common["token"] = "32432432432432";

//单独给post请求配置请求头
axios.defaults.headers.post["fake-key"] = "111111";
//请求拦截器
axios.interceptors.request.use(
  (config) => {
    return { ...config };
  },
  (error) => {
    console.log(error, "request-erropr");
  }
);

//响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    //如果请求是被取消的，则会有error信息
    console.log(error, "response-error");
  }
);
export default axios;
