import {request} from './request'

export function getHomeMulData() {
  return request({
    url: "/home/multidata",
    // method: 'get',
    // data: {"rows":10,"page":1,"name":null,"areaType":2,"province":null,"city":null}
  })
}

