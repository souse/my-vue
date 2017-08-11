import { getProducts } from '../api/products'

export default {
	async getProductsInfo({ commit, state }) {
		const plist = await getProducts();
		
		console.log('plist', plist) 	
	}
}