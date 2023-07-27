import { useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import CustomTabBar from '../../custom-tab-bar';

const Index = () => {
  const pageCtx = Taro.getCurrentInstance().page;

  useEffect(() => {
    const tabbar = Taro.getTabBar<CustomTabBar>(pageCtx);
    tabbar?.setSelected(2);
  }, []);

  return (
    <View className='index'>
      <Text>我是购物车！</Text>
    </View>
  );
};

export default Index;
