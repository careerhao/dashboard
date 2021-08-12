import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'hash',
	routes: [
    	{
      		path: '/',
			redirect: 'projects', 
			name: 'home',
			alias: '/projects',
			component: () => import('@/views/Home.vue'),
			children: [
				{
					path: 'projects',
					props: true,
					name: 'projectRoot',
					component: () => import('@/views/project/ProjectRoot.vue'),
				},
				{
					path:'projects/:id',
					name: 'project',
					props: true,
					component: () => import( '@/views/project/Project.vue'),
				},
			]
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
