import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login')
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/views/test'),
      children: [
        {
          // 杂
          path: 'blend',
          name: 'Blend',
          component: () => import('@/views/test/blend')
        },
        {
          // 为了不把if和for写在同一下标签上，把if写在template
          path: 'if-for-template',
          name: 'IfForTemplate',
          component: () => import('@/views/test/if-for-template')
        },
        {
          // 自定义指令
          path: 'directive',
          name: 'Directive',
          component: () => import('@/views/test/directive')
        },
        {
          // 依赖注入
          path: 'provide',
          name: 'Provide',
          component: () => import('@/views/test/provide')
        },
        {
          // 递归组件
          path: 'recursion',
          name: 'Recursion',
          component: () => import('@/views/test/recursion')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "@/views/About.vue")
    // }
  ]
});
