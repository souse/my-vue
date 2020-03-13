<template>
	<div class="prodetail_container">
		<div class="img" :style="{width: width, height: height}">
			<img :src="product.imageurl" >
		</div>
		<div class="goods_part">
			<div class="basic_info">
				<div class="prod_title">{{product.wname}}</div>
				<div class="prod_price_wrap">
					<div class="prod_price">
						<span class="yang_pic_price">
							<span class="s_price">价格:</span>
							￥<span class="big_price">{{product.jdPrice.split('\.')[0]}}</span><span class="small_price">.{{product.jdPrice.split('\.')[1]}}</span>
						</span>
					</div>
				</div>
				<div class="prod_act">这不是一本“心灵鸡汤”，而是“心灵鱼汤”，营养丰富，同时也要小心刺。</div>
			</div>	
		</div>
		<div class="cart_container">
			<div class="concern_cart">
				<a href="javascript:;" class="love_heart_icn">.</a>
				<a href="javascript:;" class="cart_car_icn" @click="goCart">
					<em class="btm_act_icn">
						<i class="order_numbers">{{Object.keys(carts).length}}</i>
					</em>	
					<span class="gou">购物车</span>
				</a>
			</div>
			<div class="action_list">
				<a href="javascript:;" class="add_cart" @click="addCart">加入购物车</a>	
				<a href="javascript:;" class="directorder" @click="buyNow">立即购买</a>
			</div>	
		</div>
	</div>
</template>
<script>
	import { mapGetters,mapState, mapMutations } from 'vuex'

	export default {
		name: 'prodetail',
		data() {
			return {
				width: window.innerWidth + 'px',
				height: window.innerWidth + 'px'
			}
		},
		created() {
			const { id } = this.$route.params

			this.$store.commit('GET_CUR_PRODUCT', { id })
		},
		computed: {
			...mapState([
				'products',
				'product'
			]),
			...mapGetters([
				'carts'
			])
		},
		methods: {
			...mapMutations({
				addToCart: 'ADD_TO_CART'
			}),
			addCart() {
				const product = this.product
				const { wareId } = product
				if (this.carts[wareId]) {
					this.$router.push('/cart');
				}

				this.addToCart({ product })
			},
			buyNow() {
				this.addCart()
				this.goCart()	
			},
			goCart() {
				this.$router.push('/cart')
			}
		}
	}
</script>
<style>
	.img{
		width: 320px;
	    height: 320px;
	    visibility: visible;
	    position: relative;
	    display: -webkit-box;
	    -webkit-box-pack: center;
	    -webkit-box-align: center;
	    background-color: #fff;
	    background-size: 100% 100%;	
	}
	.img img {
		max-width: 100%;
	    max-height: 100%;
	    display: block;
	    overflow: hidden;	
	}
	.goods_part{
		padding-bottom: 10px;
    	padding-top: 7px;	
    	padding-left: 10px;
    	background-color: #fff;
    	position: relative;	
	}
	.goods_part:before{
		position: absolute;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    top: -1px;
	    left: 0;
	    width: 100%;
	    height: 1px;
	    border-top: 1px solid #e3e5e9;
	    z-index: 10;
	} 
	.goods_part:after {
		position: absolute;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    bottom: -1px;
	    left: 0;
	    width: 100%;
	    height: 1px;
	    border-bottom: 1px solid #e3e5e9;
	    z-index: 10;	
	}
	.goods_part .basic_info,
	.goods_part .prod_title {
		position: relative;	
	}
	.goods_part .prod_title {
		display: inline-block;
	    font-size: 16px;
	    color: #232326;
	    margin-right: 10px;
	    line-height: 20px;
	    text-align: left;
	}
	.goods_part .prod_price_wrap {
		font-size: 23px;
	    font-family: Helvetica;
	    color: #f23030;
	    font-weight: 700;
	    line-height: 23px;
	    margin-top: 7px;
	    margin-right: 6px;
	}
	.goods_part .prod_price_wrap .yang_pic_price {
		display: block;
	    margin-left: 3px;
	    line-height: 23px;
	    font-style: normal;
	    font-size: 16px;
	}
	.s_price{
		color: #666;
	}
	.yang_pic_price .big_price{
		display: inline-block;
	    font-size: 23px;
	    line-height: 23px;
	}
	.yang_pic_price .small_price{
		display: inline-block;
	    font-size: 17px;
	    line-height: 17px;
	}
	.basic_info .prod_act{
		font-size: 13px;
	    color: #81838e;
	    margin: 11px 10px 0 0;
	    line-height: 17px;
	    text-align: justify;
	}
	.cart_container {
		display: table;
	    position: fixed;
	    left: 0;
	    bottom: 0;
	    z-index: 10;
	    text-align: center;
	    width: 100%;
	    height: 50px;
	    overflow: hidden;
	}
	.cart_container .concern_cart{
		width: 42%;
		float: left;
	    height: 100%;
	    overflow: hidden;	
	}
	.concern_cart:before {
		position: absolute;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 1px;
	    border-top: 1px solid #d2d2d2;
	}
	.concern_cart a {
		width: 50%;
		color: #d4d4d4;
    	font-size: 10px;
    	display: inline-block;
	    height: 100%;
	    line-height: 50px;
	    float: left;
	    overflow: hidden;
	    position: relative;
	}
	.concern_cart a.cart_car_icn:before{
		position: absolute;
	    content: '';
	    -webkit-transform: scaleX(.5);
	    transform: scaleX(.5);
	    top: 0;
	    left: 0;
	    width: 1px;
	    height: 100%;
	    border-left: 1px solid #d2d2d2;	
	}
	.concern_cart a .btm_act_icn {
	    width: 22px;
	    width: 23px;
	    height: 21px;
	    display: block;
	    margin: 0 auto;
	    background-color: #fff;
	    margin-top: 10px;
	    margin-bottom: 4px;
	    background: url(https://st.360buyimg.com/item/images/5.4/cart_sprits_all.png?v=1) 0 0 no-repeat;
	    background-size: 100px 100px;
	    background-position: 0 -21px;
	    position: relative;	
	}
	.concern_cart a .order_numbers {
		display: inline-block;
	    position: absolute;
	    top: -5px;
	    background-color: #f23030;
	    line-height: 10px;
	    font-style: normal;
	    border-radius: 8px;
	    padding: 0 4px;
	    font-size: 8px;
	    color: #fff;
	    right: -9px;
	    border: 1px solid #fff;
	}
	.concern_cart a .gou {
		display: block;
	    line-height: 9px;
	    height: 15px;
	    text-align: center;
	    color: #232326;
	    font-size: 9px;	
	}
	.cart_container .action_list {
		width: 58%;
		float: left;
	    height: 100%;
	    overflow: hidden;
	}
	.action_list a {
		width: 50%;
		color: #fff;
		font-size: 15px;
		display: inline-block;
	    height: 100%;
	    line-height: 50px;
	    float: left;
	    overflow: hidden;
	    position: relative;
	}
	.action_list .add_cart {
		background: #ffb03f;  	
	}
	.action_list .directorder {
		background: #f23030;	
	}
</style>