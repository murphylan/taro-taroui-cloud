import { Component } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import Intellect from '../images/hot_selected.png'
import './index.scss'

export default class Index extends Component {
  state = {
    selected: 0,
    color: '#666',
    selectedColor: '#ed6c00',
    list: [
      {
        pagePath: '/pages/index/index',
        selectedIconPath: '../images/tabbar_home_on.png',
        iconPath: '../images/tabbar_home.png',
        text: '首页'
      },
      {
        pagePath: '/pages/cate/index',
        selectedIconPath: '../images/tabbar_cate_on.png',
        iconPath: '../images/tabbar_cate.png',
        text: '分类'
      },
      {
        pagePath: '/pages/hot/index',
        selectedIconPath: Intellect,
        iconPath: Intellect,
        text: '热门'
      },
      {
        pagePath: '/pages/cart/index',
        selectedIconPath: '../images/tabbar_cart_on.png',
        iconPath: '../images/tabbar_cart.png',
        text: '购物车'
      },
      {
        pagePath: '/pages/my/index',
        selectedIconPath: '../images/tabbar_my_on.png',
        iconPath: '../images/tabbar_my.png',
        text: '个人中心'
      }
    ]
  }

  switchTab(index, url) {
    this.setSelected(index)
    Taro.switchTab({ url })
  }

  setSelected(idx: number) {
    this.setState({
      selected: idx
    })
  }

  // 自定义 tabBar的页面
  render() {

    const { list, selected, color, selectedColor } = this.state

    return (
      <CoverView className='tab-bar'>
        <CoverView className='tab-bar-wrap'>
          {
            list.map((item, index) => {
              return <CoverView key={index} className='tab-bar-wrap-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
                <CoverImage className='tab-bar-wrap-item-icon' src={selected === index ? item.selectedIconPath : item.iconPath} />
                <CoverView className='tab-bar-wrap-item-btn'
                  style={{ color: selected === index ? selectedColor : color }}
                >{item.text}
                </CoverView>
              </CoverView>
            })
          }
        </CoverView>
        <CoverImage className='intellect-icon' src={Intellect} onClick={() => { }} />
      </CoverView>
    )
  }
}
