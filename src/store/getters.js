
import { getStore } from '@/utils'

export default {
	carts: (state) => {
		const cart = state.cart
					
		return Object.keys(cart).length > 0 ? cart : getStore('cart')	
	}
}