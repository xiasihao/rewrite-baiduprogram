import appConfig from '../config/config.default'

const apiList = {
    // 首页推荐列表
    indexNewsList:appConfig.apiBaseUrl+'/mobile/MobileOfweekNewsListSelectWithAd.do',
    // 子站列表
    productTypeList:appConfig.apiBaseUrl+'/MobileOfweekProductTypeList.do',
    // 新闻详情页
    newsDetail: appConfig.apiBaseUrl + '/SmallProgramMobileNewsDetail.do',
    // 新闻详情页广告位
    newsAdvertisement: appConfig.apiAdUrl + '/advertising/getAd/3',
    // 子站新闻列表页
    subPageNewsList: appConfig.apiWapBaseUrl + '/baidu/news/indexSub.xhtml',
    // 子站新闻新增导航列表页
    subPageNewAddsList: appConfig.apiWapBaseUrl + '/baidu/news/indexSubCatlist.xhtml',
}

export default apiList