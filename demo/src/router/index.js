import Vue from 'vue'
import Router from 'vue-router'

import	Love from '@/views/love/'
import	Singer from '@/views/singer/'
import	Rank from '@/views/rank/'
import	Search from '@/views/search/'
import LoveDetail from '@/views/love/detail'
import SingerDetail from '@/views/singer/detail'
import RankDetail from '@/views/rank/detail'

Vue.use(Router)

export default new Router({
	mode:"history",
  	routes: [
	{
		path:"/",
		redirect:"/love"
	},
   	{
   		path:'/love',
   		component:Love,
      children:[
      {
        path:'/love/:id',
        component:LoveDetail
      }
    ]
   	},
   	{
   		path:'/singer',
   		component:Singer,
      children:[
      {
        path:'/singer/:id',
        component:SingerDetail
      }
      ]
   	},
   	{
   		path:'/rank',
   		component:Rank,
      children:[
        {
          path:'/rank/:id',
          component:RankDetail
        }
      ]
   	},
   	{
   		path:'/search',
   		component:Search
   	}
  ]
})
