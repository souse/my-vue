import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import products from '@/components/products'

Vue.use(Router)

export default new Router({
  	routes: [
    	{
	      	path: '/',
	      	name: 'products',
	      	component: products
    	},
    	{
	      	path: '/login',
	      	name: 'login',
	      	component: login
    	}
  	]
})
