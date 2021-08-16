import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

Vue.use(Router)
NProgress.configure({ showSpinner: false })

// Fix push to same path got errors
const originalPush = Router.prototype.push
 
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
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

router.beforeEach((to, from, next) => {
	console.log('%cWelcome to Dash','font-size:18px;color:#adb3b9;');
	NProgress.start();
	next();
});

router.afterEach(() => {
	NProgress.done();
})
  
export default router;
