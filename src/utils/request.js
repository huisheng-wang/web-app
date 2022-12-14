import axios from 'axios'
const development = process.env.NODE_ENV === 'development'
axios.interceptors.request.use( (config)=> {
  // console.info('--request---',config)
    config.url = development?`/api${config.url}`:config.url
    return config;
  },  (error)=>  {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use( (response)=>  {
  // console.info('--response---',response)
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    
    return response;
  },  (error)=>  {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default axios