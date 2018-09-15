//index.js
//获取应用实例
const api=require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tags:{
      'gn':'国内',
      'gj':'国际',
      'cj':'财经',
      'yl':'娱乐',
      'js':'军事',
      'ty':'体育',
      'other':'其他'
    },
    currentTages:'gn'
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
  // api.get('list').then(res=>{
  //   console.log(res)
  // }).catch(e=>{
  //   console.log(e)
  // })
  onChange:function(event){
    var tag = event.currentTarget.dataset.id
    this.showNews(tag)
  },
  showFindTag:function(tag){
    return api.findTag(tag)
  },
  showNews:function(tag){
    return this.showFindTag
    .then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
  }


})
api.findTag('gn').then(res => {
  console.log(res)
}).catch(e => {
  console.log(e)
})

