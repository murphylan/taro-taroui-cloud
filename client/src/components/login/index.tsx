import Taro, { useDidShow, useDidHide, useReady, usePullDownRefresh, UserInfo } from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'

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

  const [userInfo, setUserInfo] = useState<null | any>(null);

  const getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "getOpenId",
        data: {}
      })
      .then(res => {
        setUserInfo(res.result);
      })
  }

  return (
    <View className='index'>
      <AtButton type='primary' onClick={getLogin} size='small'>获取登录云函数</AtButton>
      <Text>context：{JSON.stringify(userInfo)}</Text>
    </View>
  )
}


export default Index;
