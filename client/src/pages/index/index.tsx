import Taro, { useDidShow, useDidHide, useReady, usePullDownRefresh, UserInfo } from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtButton } from 'taro-ui'
import Login from '../../components/login/index'

const Index = () => {

  // 可以使用所有的 React Hooks
  useEffect(() => { })

  // 对应 onReady
  useReady(() => { })

  // 对应 onShow
  useDidShow(() => { })

  // 对应 onHide
  useDidHide(() => { })

  usePullDownRefresh(() => { })

  return (
    <View className='index'>
      <Login />
      <AtButton type='primary'>按钮文案</AtButton>
    </View>
  )
}


export default Index;
