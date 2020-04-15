import axios from 'axios'

//导出第一个实例；
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/',
    // timeout: 1000
  })
 instance.interceptors.request.use(config => {
  // console.log(config)
  return config
 },err => {
   console.log(err)
 })

instance.interceptors.response.use(res => {
  // console.log(res)
  return res.data
}, err => {
  console.log(err)
})

 return instance(config)
}
