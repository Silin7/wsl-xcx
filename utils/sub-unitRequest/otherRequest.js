let otherRequest = {
  history_today: {
    apiMethod: 'GET',
    apiName: '/other/history_today',
    name: '历史上的今天（参数：type[0: 简 1: 详]）'
  },
  rubbish: {
    apiMethod: 'GET',
    apiName: '/other/rubbish',
    name: '垃圾分类查询（name）'
  },
  girl_random: {
    apiMethod: 'GET',
    apiName: '/other/girl_random',
    name: '随机获取美女福利图片'
  },
  jokes_random: {
    apiMethod: 'GET',
    apiName: '/other/jokes_random',
    name: '随机获取笑话段子列表'
  },
  
}
module.exports = otherRequest