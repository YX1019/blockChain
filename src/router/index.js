import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import app from '@/views/app'
import encyclopedias from '@/views/encyclopedias'
import quotation from '@/views/quotation'
import activity from '@/views/activity'
import register from '@/views/register'
import login from '@/views/login'
import weLogin from '@/views/weLogin'
import personal from '@/views/personal'
import information from '@/views/information'
import video from '@/views/video'
import videoDetail from '@/views/videoDetail'
import newsDetail from '@/views/newsDetail'
import personalInfo from '@/personalView/personalInfo'
import updatePwd from '@/personalView/updatePwd'
import myCollect from '@/personalView/myCollect'
import certification from '@/personalView/certification'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/app',
      name: 'app',
      component: app
    },
    {
      path: '/encyclopedias',
      name: 'encyclopedias',
      component: encyclopedias
    },
    {
      path: '/quotation',
      name: 'quotation',
      component: quotation
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/weLogin',
      name: 'weLogin',
      component: weLogin
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/videoDetail',
      name: 'videoDetail',
      component: videoDetail
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      redirect: '/personal/personalInfo',
      children: [
        {
          path: 'personalInfo',
          name: 'personalInfo',
          component: personalInfo
        },
        {
          path: 'updatePwd',
          name: 'updatePwd',
          component: updatePwd
        },
        {
          path: 'myCollect',
          name: 'myCollect',
          component: myCollect
        },
        {
          path: 'certification',
          name: 'certification',
          component: certification
        }
      ]
    }
  ]
})
