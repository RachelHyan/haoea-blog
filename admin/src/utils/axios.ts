import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const service = axios.create();

service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// Do something before request is sent
		return config;
	},
	(error: any) => {
		// Do something with request error
		return Promise.reject(error);
	}
);

service.interceptors.response.use(
	(response: AxiosResponse) => {
		// Do something with response data
		return response;
	},
	(error: any) => {
		// Do something with response error
		return Promise.reject(error);
	}
);

export default service; 
