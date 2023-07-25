import { View } from '@tarojs/components'
import { useDidHide, useDidShow, usePullDownRefresh, useReady } from '@tarojs/taro'
import { useEffect } from 'react'
import Login from '../../components/login/index'
import './index.scss'

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
    </View>
  )
}


export default Index;
