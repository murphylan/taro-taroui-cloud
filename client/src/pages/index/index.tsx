import { View } from '@tarojs/components'
import Taro, { useDidShow } from '@tarojs/taro'
import { useMemo, useState } from 'react'
import { AtTimeline, AtLoadMore } from 'taro-ui'
import type CustomTabBar from '../../custom-tab-bar'
import './index.scss'

const Index = () => {
  const page = useMemo(() => Taro.getCurrentInstance().page, [])

  useDidShow(() => {
    const tabbar = Taro.getTabBar<CustomTabBar>(page)
    tabbar?.setSelected(0)
  })

  const [status, setStatus] = useState<'loading' | 'more' | 'noMore' | undefined>("loading");

  const handleClick = () => {
    // 模拟异步请求数据
    setTimeout(() => {
      // 没有更多了
      setStatus('noMore');
    }, 2000)
  }

  return (
    <View className='index'>
      <View className='header-title'>项目计划</View>
      <View className='attimeline'>
        <AtTimeline
          pending
          items={[
            { title: '1、签订合同', content: ['8月6日', '与客户签订合同'], icon: 'calendar' },
            { title: '2、项目启动', content: ['8月7日', '组织产品经理，UI设计师，开发工程师等组建项目团队'], icon: 'user' },
            { title: '3、功能需求', content: ['8月7日--8月9日', '与客户沟通产品功能点，接口', '每个功能点满足6W原则'], icon: 'bullet-list' },
            { title: '4、产品原型', content: ['8月10日--8月15日', '产品原型制作且与客户确认'], icon: 'iphone-x' },
            { title: '5、产品研发', content: ['8月13日--9月02日', '项目研发阶段，由项目经理同程参入', '把控项目进度'], icon: 'file-code', color: 'red' },
            { title: '6、产品测试', content: ['9月03日--9月06日', '产品测试，发布测试报告', '反馈给工程师进行调整'], icon: 'repeat-play' },
            { title: '7、产品验收', content: ['9月07日', '提供最终产品包给客户验证'], icon: 'check-circle' },
            { title: '8、产品上线', content: ['9月08日', '发布上线'], icon: 'analytics' }
          ]}
        >
        </AtTimeline>
      </View>
      <AtLoadMore
        status={status}
        loadingText="捕获更多回复中~🤩"
        noMoreText="下面真的没有啦~😳"
        onClick={handleClick}
      />
    </View>
  )
}
export default Index;
