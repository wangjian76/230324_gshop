import axios from 'axios'
import {reject} from "eslint-plugin-promise/rules/lib/promise-statics";

export default function (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    //执行异步ajax请求
    let promise
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
