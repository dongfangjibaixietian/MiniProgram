import {
  getMultiData,
  getGoodsDate
} from '../../service/home.js'

Page({
  data: {
    banner: [],
    recommends: [],
    titles: ['新药研发','其他'],
    goods: {
      'pop': {page:0,list:[]},
      'others': { page: 0, list: [] },
    }
  },


  onLoad: function (options) {
    this.multidata
    /*this.goodsdata*/
  },

 multidata() {
   getMultiData().then(res => { //请求数据
     const banners = res.data.data.banner.list;
     const recommends = res.data.data.recommend.list; //取出数据
     this.setData({
       banners: banners,
       recommends: recommends
     })
   })
 },

 /*goodsdata() {
   getGoodsDate(type, page).then(res => {
     console.log(res)
   })
 },
*/
  handleTabClick(event) {
    const index = event.detail.index;
  }
})