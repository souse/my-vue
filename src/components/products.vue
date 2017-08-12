<template>
  	<div class="products_container">
		<ul>
			<li v-for="p in products"  class="normal_list">
				<a href="javascript:;" @click="goDetail(p.wareId)">
					<div class="pro_img">
						<img :src="p.imageurl">
					</div>
					<div class="product_info_box">
						<div class="product_book_name">
							<div class="book_name">
								<span>{{p.wname}}</span>
							</div>
							<span class="book_author">{{p.author}}</span>
						</div>
						<div class="gray_icon"></div>			
						<div class="product_price_m">
							<em>
								￥<span class="big_price">{{p.jdPrice.split('\.')[0]}}</span><span>.{{p.jdPrice.split('\.')[1]}}</span>
							</em>
						</div>
						<div class="gray_pro_info">
							<span class="self_sell">{{p.shopName}}</span>
							<span>{{p.totalCount}}条评价</span>
							<span>好评{{p.good}}</span>
							<span class="book_shop_name"></span>
						</div>
					</div>
				</a>	
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
	  	name: 'products',
	  	created () {
		    this.$store.dispatch('getProductsInfo')
		},
		computed: {
			...mapState([
				'products'
			])
		},
		methods: {
			goDetail(id) {
				this.$router.push('/prodetail/'+id)
			}
		}
	}
</script>
<style>
	li {
		list-style: none outside none;
	}	
	li.normal_list {
		height: 120px;
		position: relative;
	}
	.normal_list a {
		display: -webkit-box;
	    display: box;
	    height: 100%;
	    padding-top: 10px;
	    font-size: 0px;	
	}
	.normal_list a .pro_img {
		position: relative;
	    height: 100px;
	    width: 100px;
	    margin-left: 10px;
	    overflow: hidden;
	    text-align: center;	
	}
	.normal_list .pro_img img {
		display: inline-block;
	    width: auto;
	    max-width: 100px;
	    height: 100px;
	}
	.normal_list .product_info_box{
		-webkit-box-flex: 1;
	    box-flex: 1;
	    margin-left: 10px;
	    position: relative;
	    height: 100%;
	    margin-top: -2px;
	    padding-right: 10px;	
	}
	.product_info_box .product_book_name {
		color: #232326;
	    font-size: 15px;
	    line-height: 22px;
	    height: 40px;	
	}
	.product_info_box .book_name {
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;	
	}
	.product_info_box .book_author {
		display: block;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: 12px;
	    color: #848689;
	    margin-top: 0px;	
	}
	.product_info_box .gray_icon{
		height: 25px;
	    margin: 0px;
	    overflow: hidden;
	    line-height: 25px;
	}
	.product_price_m {
		font-size: 0px;
	    height: 20px;
	    overflow: hidden;
	    width: 100%;
	    line-height: 20px;
	    margin-right: 10px;
	}
	.product_price_m em{
		font-size: 16px;
	    color: #f23030;
	    margin-right: 3px;
	    display: block;
	    height: 20px;
	    overflow: hidden;
	    float: left;
	}
	.product_price_m em .big_price {
		font-size: 20px;
	}
	.gray_pro_info {
		color: #848689;
	    font-size: 12px;
	    display: -webkit-box;
	    display: box;
	    margin-top: 4px;
	    overflow: hidden;
	    height: 15px;
	    line-height: 16px;
	    -webkit-box-align: center;
	    box-align: center;
	}
	.gray_pro_info span {
		margin-right: 8px;
    	display: block;	
	}
	.gray_pro_info .self_sell {
		color: #f23030;
	    font-size: 9px;
	    line-height: 10px;
	    height: 10px;
	    padding: 1px 2px 0px 3px;
	    margin-right: 4px;
	    position: relative;
	    display: block;
	}
	.gray_pro_info .self_sell:after {
		content: '';
	    height: 200%;
	    width: 200%;
	    position: absolute;
	    left: 0;
	    top: 0;
	    right: auto;
	    bottom: auto;
	    background-color: transparent;
	    border: 1px solid #f23030;
	    border-radius: 3px;
	    -webkit-border-radius: 3px;
	    transform: scale(0.5);
	    -webkit-transform: scale(0.5);
	    transform-origin: top left;
	    -webkit-transform-origin: top left;
	}
	.gray_pro_info .book_shop_name {
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    -webkit-box-flex: 1;
	    box-flex: 1;
	    min-width: 26px;
	    text-align: right;	
	}
	.gray_pro_info span:last-child{
		margin-right: 0;
	}	
</style>













