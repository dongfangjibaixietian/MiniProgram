import {
  getMultiData,
  getGoodsDate
} from '../../service/home.js'

const types = ['pop','new','sell']

Page({
  data: {
    banner: [],
    recommends: [],
    titles: ['流行','新款','精选'],
    goods: {
      'pop': {page:0,list:[]},
      'new': { page: 0, list: [] },
      'sell': { page: 0, list: [] }
    },
    currentType:'pop',
    show:false
  },


  onLoad: function (options) {
    this.multidata()
    this.goodsdata('pop')
    this.goodsdata('new')
    this.goodsdata('sell')
  },
//***************************网络请求函数************************** */
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
//*******************************数据请求**************************** */
goodsdata(type){
  const page = this.data.goods[type].page + 1;
   getGoodsDate(type, page).then(res => {
     
     const list = res.data.data.list;
     const oldList = this.data.goods[type].list;
     oldList.push(...list)

     const typeKey = `goods.${type}.list`;
     const pageKey = `goods.${type}.page`;

     this.setData({
       [typeKey]:oldList,
       [pageKey]:page
     })
   })
 },
//*********************监听函数******************* */
  handleTabClick(event) {
    const index = event.detail.index;
    this.setData({
      currentType: types[index]
    })
  },

  onReachBottom() {
    this.goodsdata(this.data.currentType)
  },

  onPageScroll(options) {
    const flag = options.scrollTop >= 1000
    if (flag != this.data.show){
      this.setData({
        show: options.scrollTop >= 1000
      })
    }
  }
})