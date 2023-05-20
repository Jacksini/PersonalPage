import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import("@/pages/home/HomePage.vue");
const NotFound = () => import("@/pages/notfound/NotFoundPage.vue");
const SchoolProyects = () => import("@/components/schoolProyects.vue");

const routes = [
	{
		path: "/",
		component: HomePage
	},
  {
    path: "/SchoolProyects",
		component: SchoolProyects
  },
	{
		path: '/:pathMatch(.*)*',
		component: NotFound
	}
]

const router = createRouter({
	scrollBehavior(to) {
		if (to.hash) {
			return { el: to.hash }
		}
	},
	history: createWebHistory(),
	routes
})

export default router