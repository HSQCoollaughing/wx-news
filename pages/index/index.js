//index.js
//还差一个下拉刷新上拉加载....QAQ



const api=require('../../utils/util.js')
const app = getApp()
const moment =require('../../utils/moment-with-locales.min.js')
//moment.js json数据处理函数
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
    currentTag:'gn',
    newList:[],
  },
  
  newDetial:function(event){
    // console.log(event.currentTarget.dataset.newsid)
      wx.navigateTo({
      url: '../logs/logs?id=' + event.currentTarget.dataset.newsid
    //由列表页跳转到详情页 ,需要传入点击事件的id
    })
  },
  onChange:function(event){
    var tag = event.currentTarget.dataset.id
    this.showNewsList(tag)
     //导航栏获取tag传值,获取新闻列表页的json数据
    // console.log(event.currentTarget.dataset.id)
  },
  showNewsList:function(tag){
    return api.findTag(tag).then(res => {
      res.result=res.result.map(n=>{
        //处理由newslist 的json数据
        n.date = moment(n.date).locale('zh-cn').format("YYYYMMMMDo, H:mm:ss ")
        n.source = (n.source) || '未知来源'
        // console.log(n)
        return n
      })
      this.setData({
        //传数据给页面展示
        newList:res.result,
        currentTag:tag
      })
    })
  },
  onLoad:function(options){
    this.showNewsList(this.data.currentTag) 
    //页面默认加载的导航栏为'国内':     )
  }
})


 
