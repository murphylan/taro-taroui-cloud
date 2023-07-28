export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/cate/index',
    'pages/hot/index',
    'pages/cart/index',
    'pages/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#666',
    selectedColor: '#ed6c00',
    backgroundColor: '#fafafa',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'images/tabbar_home_on.png',
        iconPath: 'images/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/cate/index',
        selectedIconPath: 'images/tabbar_cate_on.png',
        iconPath: 'images/tabbar_cate.png',
        text: '分类'
      },
      {
        pagePath: 'pages/hot/index',
        selectedIconPath: 'images/hot_selected.png',
        iconPath: 'images/hot.png',
        text: '热门'
      },
      {
        pagePath: 'pages/cart/index',
        selectedIconPath: 'images/tabbar_cart_on.png',
        iconPath: 'images/tabbar_cart.png',
        text: '购物车'
      },
      {
        pagePath: 'pages/my/index',
        selectedIconPath: 'images/tabbar_my_on.png',
        iconPath: 'images/tabbar_my.png',
        text: '个人中心'
      }
    ]
  }
})
