import { 
	SET_USERINFO,
	ADD_PRODUCT
} from './mutation-types'
import { registerInfo } from '@/api/user'
import { getProducts } from '@/api/products'

export default {
	async registerInfo({ commit, state }, user) {
		const userinfo = await registerInfo(user)

		console.log('userinfo', userinfo)
		commit(SET_USERINFO, { userinfo })
		
		// 此处return 的目的是为了跳转页面用
		// this.$store.dispatch('registerInfo', user).then(function(res) {
			// 判断 跳转页面
			// this.$router.push('/products')
		// })
		return userinfo 
	},
	async getProductsInfo({ commit, state }) {
		const products = await getProducts();
			
		commit(ADD_PRODUCT, { products })
	}
}