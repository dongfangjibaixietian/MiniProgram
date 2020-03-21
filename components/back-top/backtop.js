// components/back-top/backtop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleBackTop(){
      //微信内置函数，可以回到顶部
      wx.pageScrollTo({
        scrollTop: 0,
      })
    }
  }
})
