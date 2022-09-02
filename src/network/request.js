import axios from "axios";

// 默认的get请求
// eslint-disable-next-line prettier/prettier
export function request (config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
  });
  // 2.axios的拦截器
  // 2.1请求拦截
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );
  // 2.2响应拦截
  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );
  console.log("instance", instance);
  // 3.发送真正的网络请求
  return instance(config);
}

// 发送post请求
export function requestPost(config) {
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
    method: "post",
  });
  return instance(config);
}
