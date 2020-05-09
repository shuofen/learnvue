import axios from 'axios'

//导出第一个实例；
export function request(config) {
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000/',
    baseURL: 'http://192.168.0.123:3000',
    // baseURL: "http://192.168.1.5:3000",
    //  baseURL: 'http://127.0.0.1:3000',
    //  baseURL: 'http://localhost:3000',
    // timeout: 1000
  })
 instance.interceptors.request.use(config => {
  return config
 },err => {
   console.log(err)
 })

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  console.log(err)
})
 return instance(config)
}
