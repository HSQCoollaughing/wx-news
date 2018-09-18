//logs.js
const api = require('../../utils/util.js')
const moment=require('../../utils/moment-with-locales.min.js')
Page({
  data: { 
    logs: [] 
  },
  navBack: function () {
    // 返回上一页
    wx.navigateBack()
  },

  onLoad:function(options){
    //处理detail新闻详情页的api json数据
    api.findDetail(options.id)
    .then(item=>{
      item.result.source=item.source||"未知来源"
      item.result.date = 
      moment(item.result.date).locale('zh-cn').format("MMMMDo H:mm:ss ")
      console.log(item.result)
      // return item.result
      this.setData({
        detail:item.result
        //处理后 用于页面显示
      })
    })
  }  
})

