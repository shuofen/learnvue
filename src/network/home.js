import {request, request2} from './request'

export function getHomeMulData() {
  return request({
    url: "/home/multidata"
  })
}

export function getGoodsData(type, page) {
  return request({
    url: "/home/goods?type=" + type +'&page=' + page
  })
}

