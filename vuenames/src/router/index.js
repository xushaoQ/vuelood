import Vue from 'vue'
import Router from 'vue-router'
// 首页跳转
import index from '@/pages/index'
// 产品跳转
import chanps from '@/pages/chanp'
// 精准匹配
import jingzpps from '@/pages/jingzpp'
// 消息跳转
import xiaoxhktxs from '@/pages/xiaoxhktx'
import xiaoxjdcxs from '@/pages/xiaoxjdcx'
import xiaoxtzbzs from '@/pages/xiaoxtzbz'
// 我的跳转
import mes from '@/pages/indexme'
import tix from '@/pages/tixss'
import mescc from '@/pages/mesc'
import meszx from '@/pages/mezx'
import jindcxx from '@/pages/jindcx'
import xxhktx from '@/pages/xxhktx'
// 登录页面
import denglus from '@/pages/denglu'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/chanp',
        name: 'chanp',
        component: chanps
    }, {
        path: '/jingzpp',
        name: 'jingzpp',
        component: jingzpps
    }, {
        path: '/indexme',
        name: 'indexme',
        component: mes
    }, {
        path: '/xiaoxhktx',
        name: 'xiaoxhktx',
        component: xiaoxhktxs
    }, {
        path: '/xiaoxtzbz',
        name: 'xiaoxtzbz',
        component: xiaoxtzbzs
    }, {
        path: '/xiaoxjdcx',
        name: 'xiaoxjdcx',
        component: xiaoxjdcxs
    }, {
        path: '/tixss',
        name: 'tixss',
        component: tix
    }, {
        path: '/mesc',
        name: 'mesc',
        component: mescc
    }, {
        path: '/mezx',
        name: 'mezx',
        component: meszx
    }, {
        path: '/jindcx',
        name: 'jindcx',
        component: jindcxx
    }, {
        path: '/xxhktx',
        name: 'xxhktx',
        component: xxhktx
    }, {
        path: '/denglu',
        name: 'denglu',
        component: denglus
    }]
})