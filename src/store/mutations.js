import {
	ADD_PRODUCT,
	GET_CUR_PRODUCT,
	SET_USERINFO
} from './mutation-types'
import { setStore } from '@/utils'

export default {
	[ADD_PRODUCT](state, { products }) {
		state.products.push(...products) 
		setStore('products', state.products)
	},
	[GET_CUR_PRODUCT](state, { id }) {
		const products = state.products
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
	}
}