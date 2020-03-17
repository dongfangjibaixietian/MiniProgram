const TOKEN = 'token'

App({
  globalDate: {
    token:''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    const token = wx.getStorageInfoSync(TOKEN)
    if (token && token.length !== 0){
      this.check_token(token)
    }
    else{
      this.login()   //没有token
    }
  },
  check_token(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success:(res) => {
        if (!res.data.errCode){
          console.log('token有效')
          this.globalDate.token = token;
        }
        else{
          this.login()
        }
      },
      success: function(res){
        console.log(res)
      },
      fail: function(err){
        console.log(err)
      }
    })
  },

 login(){
   wx.login({
     success: (res) => {
       const code = res.code;
       wx.request({
         url: 'http://123.207.32.32:3000/login',
         method: 'post',
         data: {
           code
         },
         success: (res) => {
           const token = res.data.token;
           this.globalDate.token = token;
           wx.setStorageSync(TOKEN, token)
         }
       })
     }
   })
 }
})
