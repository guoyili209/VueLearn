import axios from 'axios'

export function request(config){
    //创建实例
        const instance=axios.create({
            baseURL:'',
            timeout:5000
        })

        //拦截器
        //请求拦截
        instance.interceptors.request.use(config=>{
            // 在发送请求之前做些什么
            return config
        },err=>{
            // 对请求错误做些什么
        })
        //响应拦截
        instance.interceptors.request.use(reponse=>{
            // 对响应数据做点什么
            return reponse;
        },err=>{
            // 对响应错误做点什么
            return Promise.reject(error);
        })
    
        //返回实例
        return instance(config)
}