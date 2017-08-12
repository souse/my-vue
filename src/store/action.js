import { ADD_PRODUCT } from './mutation-types'
import { getProducts } from '../api/products'

export default {
	async getProductsInfo({ commit, state }) {
		const products = await getProducts();
			
		commit(ADD_PRODUCT, { products })
	}
}