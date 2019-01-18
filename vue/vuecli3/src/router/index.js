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
          path: 'if-for-template',
          name: 'IfForTemplate',
          component: () => import('@/views/test/if-for-template')
        },
        {
          path: 'directive',
          name: 'directive',
          component: () => import('@/views/test/directive')
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
