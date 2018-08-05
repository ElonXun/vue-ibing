import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import FinalOauth from '@/components/FinalOauth';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/getFinalOauth',
      name: 'FinalOauth',
      component: FinalOauth,
    },
  ],
});
