import Vue from 'vue'
import Router from 'vue-router'
import mes from '@/pages/indexme'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'indexme',
        component: mes
    }]
})