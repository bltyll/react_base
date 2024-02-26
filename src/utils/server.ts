// src/utils/net.js

import { getToken } from '@/stores';
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';
export interface IDataType<T = any> {
  code: string;
  msg: string;
  data: T;
}
const service = axios.create({
  // 配置
  // baseURL: process.env.BASE_URL,
  timeout: 30000 // 请求超时时间,
  //withCredentials: true, // 跨域请求时是否需要使用凭证
});
//请求头处理
const handleRequestConfig = (config: InternalAxiosRequestConfig) => {
  const token = getToken();
  console.log(token);
  config.headers.token = localStorage.getItem('token') || '';
};

//通用网络错误处理
const handleNetworkError = (status: number | undefined) => {
  let errMessage = '未知错误';
  if (status) {
    switch (status) {
      case 400:
        errMessage = '错误的请求';
        break;
      case 401:
        errMessage = '未授权，请重新登录';
        break;
      case 403:
        errMessage = '拒绝访问';
        break;
      case 404:
        errMessage = '请求错误,未找到该资源';
        break;
      case 405:
        errMessage = '请求方法未允许';
        break;
      case 408:
        errMessage = '请求超时';
        break;
      case 500:
        errMessage = '服务器端出错';
        break;
      case 501:
        errMessage = '网络未实现';
        break;
      case 502:
        errMessage = '网络错误';
        break;
      case 503:
        errMessage = '服务不可用';
        break;
      case 504:
        errMessage = '网络超时';
        break;
      case 505:
        errMessage = 'http版本不支持该请求';
        break;
      default:
        errMessage = `其他连接错误 --${status}`;
    }
  } else {
    errMessage = `无法连接到服务器！`;
  }
  //全局提示
  console.log(errMessage);
};
//业务错误处理
const handleSuccess = (code: number) => {
  switch (code) {
    case 1411:
      console.log(1);
      return false;
    default:
      return true;
  }
};
//请求拦截
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    handleRequestConfig(config);
    return config;
  },
  error => {
    return Promise.resolve(error);
  }
);
//响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status !== 200) return Promise.reject(response);
    handleSuccess(response.data.code);
    return response;
  },
  (err: AxiosError) => {
    handleNetworkError(err.status);
    return Promise.reject(err);
  }
);
//通用方法
export function request<T>(url: string, config: AxiosRequestConfig): Promise<T> {
  return service.request({ url, ...config }).then(response => {
    return response.data;
  });
}
