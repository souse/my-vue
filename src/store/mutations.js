import {
	ADD_PRODUCT
} from './mutation-types'

export default {
	[ADD_PRODUCT](state, { products }) {
		console.log('******')
		console.log(state, products)
		console.log('******')
	}
}