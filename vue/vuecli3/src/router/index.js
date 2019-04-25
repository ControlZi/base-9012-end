import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import layout from '@/views/layout/index';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/basic',
      unNav: true
    },
    {
      path: '/login',
      name: 'login',
      unNav: true,
      component: () => import('@/views/login/index')
    },
    {
      path: '/basic',
      component: layout,
      children: [
        {
          path: '',
          name: 'basic',
          component: () => import('@/views/basicInfo/index'),
          meta: {
            title: '基础信息'
          }
        },
        {
          path: 'deal',
          name: 'basicDeal',
          component: () => import('@/views/basicInfo/deal'),
          meta: {
            title: '基础信息新增'
          }
        }
      ]
    },
    {
      path: '/progress',
      component: layout,
      children: [
        {
          path: '',
          name: 'progress',
          component: () => import('@/views/progressInfo/index'),
          meta: {
            title: '进度信息'
          }
        }
      ]
    },
    {
      path: '/license',
      component: layout,
      children: [
        {
          path: '',
          name: 'license',
          component: () => import('@/views/licenseInfo/index'),
          meta: {
            title: '证照信息'
          }
        }
      ]
    },
    {
      path: '/contract',
      component: layout,
      children: [
        {
          path: '',
          name: 'contract',
          component: () => import('@/views/contract/index'),
          meta: {
            title: '合约台账'
          }
        }
      ]
    },
    {
      path: '/user',
      component: layout,
      children: [
        {
          path: '',
          name: 'user',
          component: () => import('@/views/user/index'),
          meta: {
            title: '用户管理'
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/',
      unNav: true
    }
    // {
    //   path: '/about',
    //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    // }
  ]
});

const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.path)) {
    next();
  } else {
    store
      .dispatch('checkLogin')
      .then(res => {
        if (res) {
          next();
        } else {
          // store.dispatch('logout');
          next('/login');
        }
      })
      .catch(err => {
        console.log('catch: ');
        next('/login');
      });
  }
});

export default router;
