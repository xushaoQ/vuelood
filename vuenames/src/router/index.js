import Vue from 'vue'
import Router from 'vue-router'
import mes from '@/pages/indexme'
import tix from '@/pages/tixss'
import mescc from '@/pages/mesc'
import meszx from '@/pages/mezx'
import jindcxx from '@/pages/jindcx'
import xxhktx from '@/pages/xxhktx'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/indexme',
        name: 'indexme',
        component: mes
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
    }]
})