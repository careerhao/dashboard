import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
    	{
      		path: '/',
			redirect: 'projects', 
			component: () => import('@/views/Home.vue'),
			meta: {
				title: 'Projects',
			  },
			children: [
				{
					path: 'projects',
					props: true,
					name: 'projectRoot',
					component: () => import('@/views/project/ProjectRoot.vue'),
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
		  redirect: 'about', 
		  component: () => import('@/views/Home.vue'),
		  children: [
			  {
				  path: 'about',
				  name: 'about',
				  component: () => import('@/views/About.vue'),
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
		},
		{
			path: '*',
			// component: PageNotFound,
			redirect: '/',
			meta: {
			  title: 'Not Found',
			},
		  },
  ]
})
