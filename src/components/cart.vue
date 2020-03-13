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
											￥<strong>{{p.jdPrice.split('\.')[0]}}</strong>.{{p.jdPrice.split('\.')[1]}}
										</span>
										<div class="quantity_wrapper customize_qua">
											<a href="javascript:;" class="quantity_decrease" :class="checkDisabled(p.num)" @click.stop="decrease(p)"></a>
											<input type="tel" class="quantity" size="4" :value="p.num" @change="changeNum($event.target.value, p.wareId)">		
											<a href="javascript:;" class="quantity_increase" @click.stop="increase(p)"></a>
										</div>
									</div>	
								</div>	
							</div>
						</div>
					</li>			
				</ul>
			</div>
		</div>
		<div class="payment_total_bar">
			<div class="flex_b total_m">合计:￥{{totalM}}</div>
			<div class="btn_right flex_b" @click="buy">去结算</div>
		</div>
	</div>
</template>
<script>
	import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
	import { Toast } from 'mint-ui'
	import { getStore } from '@/utils'
	// 考虑给加减数量做成组件
	//import quantityWrapper from './common/quantityWrapper'

	export default {
		name: 'cart',
		computed: {
			...mapGetters({
				cartList: 'carts'
			}),
			prods() {
				return Object.values(this.cartList)
			},
			totalM() {
				let tm = 0;

				Object.values(this.cartList).map((prod, index) => {
					tm += prod.num * prod.jdPrice
				})

				return tm.toFixed(2)
			}
		},
		methods: {
			...mapMutations({
				addToCart: 'ADD_TO_CART',
				removeCart: 'REMOVE_CART',
				clearCart: 'CLEAR_CART',
				setCartPrdNum: 'SET_CART_PRODUCT_NUM'
			}),
			...mapActions({
				buyProd: 'buyProducts'
			}),
			checkDisabled(num) {
				const flag = num == 1 ? true : false

				return {
					disabled: flag
				}
			},
			changeNum(num, wareId) {
				num = Number(num)
				this.setCartPrdNum({ num, wareId })
			},
			decrease(pd) { // 减少
				if ((pd.num - 1) == 0) return
				this.removeCart({ wareId: pd.wareId })	
			},
			increase(product) { //增加
				this.addToCart({ product })
			},
			buy() {
				// Toast('准备接入Node后台，开始做结算相关逻辑，暂时结束..');	
				this.$router.push('/login');
			}
		}
	}
</script>
<style>
	.payment_total_bar {
		width: 100%;
	    height: 50px;
	    overflow: hidden;
	    position: fixed;
	    background: #fff;
	    bottom: 0;
	    left: 0;
	    z-index: 1;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-flex-wrap: wrap;
	    -ms-flex-wrap: wrap;
	    flex-wrap: wrap;
	}
	.payment_total_bar:before{
		position: absolute;
	    top: 0;
	    left: 0;
	    content: '';
	    width: 100%;
	    height: 0;
	    border-top: 1px solid #e3e5e9;
	    transform: scaleY(0.5);
	    -webkit-transform: scaleY(0.5);
	}
	.flex_b {
		display: block;
	    -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    -webkit-flex-basis: 0;
	    -ms-flex-preferred-size: 0;
	    flex-basis: 0;
	}
	.payment_total_bar .total_m{
		line-height: 50px;
		padding-left: 10px;
		font-size: 14px;
    	font-weight: bold;	
	}
	.payment_total_bar .btn_right {
		display: block;
	    max-width: 98px;
	    line-height: 50px;
	    text-align: center;
	    background: #f23030;
	    color: #fff;
	    font-size: 16px;
	    height: 49px;
	    margin-top: 1px;
	}
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

	.quantity_wrapper {
		position: absolute;
	    top: 0;
	    right: 0;
	    width: 84px;
	    box-sizing: border-box;
	    white-space: nowrap;
	    height: 100%;
	    font-size: 0;
	}
	.quantity_wrapper a {
		text-decoration: none;
	    color: #67738A;
	    outline: 0 none;
	}
	.quantity_decrease, 
	.quantity_increase {
		position: relative;
	    width: 25px;
	    height: 100%;	
	}
	.quantity_wrapper .quantity_decrease,
	.quantity_wrapper .quantity_increase,
	.quantity_wrapper .quantity {
		height: 100%;
	    display: inline-block;
	    box-sizing: border-box;
	}
	.quantity_wrapper .quantity_decrease {
		background: url(https://st.360buyimg.com/order/images/cart5.0/shopping.cart.spirits.icns2.png?t=0719) no-repeat 6px -113px;
    	background-size: 50px 200px;
	}
	.quantity_wrapper .quantity {
		-webkit-appearance: none;
	    border: none;
	    text-align: center;
	    width: 34px;
	    vertical-align: top;
	    font-size: 15px;
	    color: #232326;
	    line-height: 1.25em;
	}
	.quantity_wrapper .quantity_increase {
	    background: url(https://st.360buyimg.com/order/images/cart5.0/shopping.cart.spirits.icns2.png?t=0719) no-repeat 7px -93px;
		background-size: 50px 200px;
	}
	.quantity_wrapper .quantity_decrease.disabled{
	    background: url(https://st.360buyimg.com/order/images/cart5.0/shopping.cart.spirits.icns2.png?t=0719) no-repeat -19px -113px;
		background-size: 50px 200px;	
	}
	.quantity_wrapper.customize_qua:after {
		position: absolute;
	    top: 0;
	    left: 0;
	    content: '';
	    width: 200%;
	    height: 200%;
	    border: 1px solid #cbcbcb;
	    border-radius: 4px;
	    -webkit-border-radius: 4px;
	    transform: scale(0.5);
	    -webkit-transform: scale(0.5);
	    transform-origin: top left;
	    -webkit-transform-origin: top left;
	    pointer-events: none;	
	}
	.quantity_decrease:after, 
	.quantity_increase:before {
		position: absolute;
	    top: 0;
	    left: 0;
	    content: '';
	    width: 1px;
	    height: 25px;
	    border-right: 1px solid #cbcbcb;
	    border-radius: 0;
	    -webkit-border-radius: 0;
	    transform: scaleX(0.5);
	    -webkit-transform: scaleX(0.5);
	    transform-origin: top left;
	    -webkit-transform-origin: top left;
	}
	.quantity_decrease:after {
		left: 100%;
	}
</style>










