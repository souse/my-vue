import {
	ADD_PRODUCT,
	GET_CUR_PRODUCT,
	SET_USERINFO,
	ADD_TO_CART,
	REMOVE_CART,
	CLEAR_CART,
	SET_CART_PRODUCT_NUM
} from './mutation-types'
import { setStore, getStore } from '@/utils'

export default {
	[ADD_PRODUCT](state, { products }) {
		state.products.push(...products) 
		setStore('products', state.products)
	},
	[GET_CUR_PRODUCT](state, { id }) {
		const ps = state.products
		const products = ps.length > 0 ? ps : getStore('products')
		let product
		
		for (let i = 0; i < products.length; i++) {
			let p = products[i]

			if (id == p.wareId) {
				product = p
				break
			}
		}
		state.product = product	
	},
	[SET_USERINFO](state, { userinfo }) {
		state.userInfo = userinfo
	},
	[ADD_TO_CART](state, { product }) {
		//DEMO中假定书都出自一家店
		const { wareId } = product
		let cart  = Object.keys(state.cart).length == 0 ? getStore('cart') : state.cart
		let prd = cart[wareId] || {}

		if (prd['wareId']) {
			cart[wareId]['num']++
		} else {
			prd = { num: 1, ...product }
			cart[wareId] = prd
		}

		state.cart = { ...cart }
		setStore('cart', state.cart)
	},
	[REMOVE_CART](state, { wareId }) {
		let cart  = Object.keys(state.cart).length == 0 ? getStore('cart') : state.cart
		let prd = cart[wareId]

		if (prd) {
			if (prd['num'] > 1) {
				prd['num']--
				state.cart = { ...cart }
			} else {
				delete cart[wareId]
				state.cart = { ...cart } 
			}	
		}
		setStore('cart', state.cart)
	},
	[CLEAR_CART](state) {
		state.cart = {  }
		setStore('cart', {})
	},
	[SET_CART_PRODUCT_NUM](state, { num, wareId }) {
		let cart  = Object.keys(state.cart).length == 0 ? getStore('cart') : state.cart
		
		let prd = cart[wareId]
		prd['num'] = num
		state.cart = { ...cart }
		setStore('cart', state.cart)
	}
}








