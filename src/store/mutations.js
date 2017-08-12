import {
	ADD_PRODUCT
} from './mutation-types'

export default {
	[ADD_PRODUCT](state, { products }) {
		state.products.push(...products) 
	}
}