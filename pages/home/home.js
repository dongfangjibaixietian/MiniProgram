import {
  getMultiData
} from '../../service/home.js'

Page({
  onLoad: function (options) {
    getMultiData().then(res => {
      console.log(res)
    })
  }
})