import axios from 'axios';
import Config from '@/config';

// 开发环境
axios.defaults.baseURL = Config.BASE_RAP_URL;
// axios.defaults.baseURL = Config.BASE_URL;
axios.defaults.timeout = Config.AJAX_TIMEOUT;

// 添加请求拦截器
axios.interceptors.request.use(config => {
	if (config.method === 'get' || config.method === 'delete') {
		config.params = config.data;
	}
	return config;
}, error => {
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {
	if (response.status === 200 || response.status === 304 || response.status === 400) {
		return Promise.resolve(response.data);
	}
}, error => {
	return Promise.reject(error);
});

export default axios;
