import { View, Text } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { useMemo } from 'react';
import CustomTabBar from '../../custom-tab-bar';

const Index = () => {
  const page = useMemo(() => Taro.getCurrentInstance().page, [])

  useDidShow(() => {
    const tabbar = Taro.getTabBar<CustomTabBar>(page)
    tabbar?.setSelected(2)
  })

  return (
    <View className='index'>
      <Text>热门</Text>
    </View>
  );
};

export default Index;
