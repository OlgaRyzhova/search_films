import Vue from 'vue';
import VueRouter from 'vue-router';
import SearchMovie from '../components/SearchMovie.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    name: 'SearchMovie',
    component: SearchMovie
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
