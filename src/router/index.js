import Vue from 'vue'
import Router from 'vue-router'
import MeView from "../film/MeView";
import AmazinView from "../film/AmazinView";
import CinemasView from "../film/CinemasView";
import FilmView from "../film/FilmView";
import NowPlaying from "../film/NowPlaying";
import ComingSoon from "../film/ComingSoon";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FilmView',
      component: FilmView,
      children:[
        {
          path:'/',
          name:'NowPlaying',
          component:NowPlaying
        }
      ]
    },
    {
      path: '/films',
      name: 'FilmView',
      component: FilmView,
      children:[
        {
          path:'/',
          name:'NowPlaying',
          component:NowPlaying
        },
        {
          path:'/films/nowPlaying',
          name:'NowPlaying',
          component:NowPlaying
        },
        {
          path:'/films/comingSoon',
          name:'cowPlaying',
          component:ComingSoon
        }
      ]
    },
    {
      path: '/me',
      name: 'MeView',
      component: MeView
    },
    {
      path: '/amazin',
      name: 'AmazinView',
      component: AmazinView
    },
    {
      path: '/cinemas',
      name: 'CinemasView',
      component: CinemasView
    }

  ]
})
