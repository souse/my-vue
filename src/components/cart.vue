<template>
	<div class="cart_containers">
		<div class="shop_group">
			<div class="shop_group_item">
				<div class="shop_title"></div>
				<ul class="cart_list">
					<li class="li_list" v-for="p in prods">
						<div class="items">
							<input type="hidden" checked value="">
							<div class="check_wrapper">
								<span class="cart_checkbox checked"></span>	
							</div>
							<div class="cart_item_core">
								<a href="javascript:;" class="img_a">
									<img :src="p.imageurl">
								</a>
								<div class="cart_product">
									<div class="cart_product_name">{{p.wname}}</div>
									<div class="cart_product_cell">
										<span class="shp_cart_item_price">
											￥<strong>22</strong>.33
										</span>
										<quantity-wrapper 
											:quantity="p.num"
											v-on:decrease="decrease"
											v-on:increase="increase"
										>
										</quantity-wrapper>
									</div>	
								</div>	
							</div>
						</div>
					</li>			
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState, mapMutations, mapActions } from 'vuex'
	import quantityWrapper from './common/quantityWrapper'

	export default {
		name: 'cart',
		components: { quantityWrapper },
		computed: {
			...mapState([
				'cart'
			]),
			prods() {
				return Object.values(this.cart)
			}
		},
		methods: {
			...mapMutations({
				addToCart: 'ADD_TO_CART',
				removeCart: 'REMOVE_CART',
				clearCart: 'CLEAR_CART'
			}),
			...mapActions({
				buyProd: 'buyProducts'
			}),
			decrease() { // 减少

			},
			increase() { //增加

			},
			delprd() { //删除

			},
			buy() {

			}
		}
	}
</script>
<style>
	.cart_containers {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: #f0f2f5;
	}
	.check_wrapper {
		height: 20px;
	    width: 20px;
	    margin-left: -29px;
	    margin-top: 19px;
	    display: block;
	    position: absolute;	
	}
	.shop_group {
		margin: 0;
	    padding: 6px 6px 0;
	    background: #f0f2f5;
	    height: 100%;
	}
	.shop_group .shop_group_item {
		background: #fff;
	}
	.shop_group .li_list {
		border-bottom: 2px solid #e3e5e9;	
	}
	.li_list .items {
		text-align: left;
	    clear: both;
	    background-color: #ffffff;
	    padding-left: 40px;
	    padding-top: 10px;
    	padding-bottom: 10px;
	}
	.items .check_wrapper {
	    margin-top: 35px;
		margin-left: -30px;	
	}
	.cart_checkbox {
		display: block;
	    width: 20px;
	    height: 20px;
	    margin: 0 auto;
	    background: url(https://st.360buyimg.com/order/images/cart5.0/shopping.cart.spirits.icns2.png?t=0719) no-repeat 0px 1px;
	    background-size: 50px 200px;	
	}
	.cart_checkbox.checked {
		background-position: -25px 0px;	
	} 
	.check_wrapper .cart_checkbox {
		width: 20px;
    	height: 20px;
	}
	.cart_item_core {
		position: relative;
	    box-sizing: border-box;	
	}
	.cart_item_core .img_a {
		width: auto;
	    height: auto;
	    position: absolute;
	    top: 0;
	    left: 0;
	    background: url(https://st.360buyimg.com/order/images/cart5.0/defaultGoodsImage.png?t=0719) 0 0 no-repeat;
	    background-size: 100%;
	}
	.cart_item_core img {
		width: 88px;
    	height: 88px;	
	}
	.cart_product {
		padding-left: 95px;
	    padding-right: 10px;
	    width: 100%;
	    box-sizing: border-box;	
	    height: 88px;
	}
	.cart_product .cart_product_name {
		margin-bottom: 3px;
	    height: 30px;
	    line-height: 15px;
	    font-size: 13px;
	    color: #252525;
	    margin-right: 20px;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    padding-top: 5px;
	}
	.cart_product .cart_product_cell{
		margin-top: 35px;
		height: 24px;
		position: relative;
	}
	.cart_product_cell .shp_cart_item_price {
		display: inline-block;
	    height: 100%;
	    line-height: 24px;
	    font-size: 13px;
	    color: #f23030;
	}
	.cart_product_cell .shp_cart_item_price strong{
		font-size: 16px;
	    font-weight: normal;
	    margin-left: 3px;
	}
</style>










