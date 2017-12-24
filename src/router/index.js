import Vue from 'vue'
import Router from 'vue-router'

// 音乐首页
import index from '@/views/index'
// 音乐查询
import found from '@/views/found'
// 音乐个人信息
import my from '@/views/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/found',
      name: 'found',
      component: found
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
