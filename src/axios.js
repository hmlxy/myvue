import axios from "axios";
//创建一个axios实例
const instance = axios.create();
/*当然可以在创建的同时进行默认配置
 *如 const instance = axios.create({
 *     baseURL:'https://api.apiopen.top'  
 *     timeout:2000,
 *   });
*/
 
// 添加请求拦截器
 const requestInterceptor = 
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    console.log('我要准备请求啦------')
    console.log(config,'请求配置')
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

instance.interceptors.request.eject(requestInterceptor);//移除拦截器

 
// 添加响应拦截器
const responseInterceptor = instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    console.log('我接收到响应数据啦------')
    console.log(response,'响应配置')
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

instance.interceptors.response.eject(responseInterceptor);//移除拦截器



export default instance