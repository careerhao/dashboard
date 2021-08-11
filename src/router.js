import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
    	{
      		path: '/',
			redirect: 'projects', 
			component: () => import('@/views/Home.vue'),
			children: [
				{
					path: 'projects',
					props: true,
					name: 'projectHome',
					component: () => import('@/views/project/Root.vue'),
					children: [
					//   {
					// 	path: ':projectId',
					// 	component: import( '@/views/project/Project.vue'),
					//   },
					],
				}
			]
		},
    	{
      		path: '/about',
      		name: 'about',
      		component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    	}
  ]
})
