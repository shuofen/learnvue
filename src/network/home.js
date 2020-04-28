import {request, request2} from './request'

export function getHomeMulData() {
  return request({
    url: "/home/multidata",
    // method: 'get',
    // data: {"rows":10,"page":1,"name":null,"areaType":2,"province":null,"city":null}
  })
}

export function getGoodsData(type, page) {
  return request2({
    url: "http://list.mogu.com/search?_version=8253&ratio=3%3A4&cKey=46&sort=" + type + "&page=" + page + "&q=%25E4%25B8%258A%25E8%25A1%25A3&minPrice=&maxPrice=&ppath=&cpc_offset=0&ptp=32._mf1_1239_4537.0.0.eKyNlEpS&acm=3.mce.1_10_1o3xi.132826.0.9Wl51rXlf9H90.pos_6-m_562391-sd_119-mf_4537_1211938-idx_2-mfs_15-dm1_5000&offset=30&_=1587972638754"
  })
}

