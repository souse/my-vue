import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import products from '@/components/products'
import prodetail from '@/components/prodetail'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  	routes: [
    	{
	      	path: '/',
	      	name: 'index',
	      	component: products
    	},
    	{
	      	path: '/login',
	      	name: 'login',
	      	component: login
    	},
    	{
	      	path: '/products',
	      	name: 'products',
	      	component: products
    	},
    	{
	      	path: '/prodetail/:id',
	      	name: 'prodetail',
	      	component: prodetail
    	},
    	{
	      	path: '/register',
	      	name: 'register',
	      	component: register
    	}
  	]
})
