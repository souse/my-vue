<template>
	<div class="quantity_wrapper customize_qua">
		<a href="javascript:;" class="quantity_decrease disabled" @click="dc"></a>
		<input type="tel" class="quantity" size="4" v-model="qm">		
		<a href="javascript:;" class="quantity_increase" @click="ic"></a>
	</div>		
</template>
<script>
	export default {
		name: 'quantityWrapper',
		props: {
			quantity: Number	
		},
		data() {
			return {
				qm: this.quantity
			}
		},
		watch: {
			qm(newQm) {
				console.log('newQm', newQm)
			}	
		},
		methods: {
			dc() {
				if (this.qm > 1) {
					this.qm--
					this.$emit('decrease')
				}
			},
			ic() {
				this.qm++
				this.$emit('increase')	
			}
		}
	}
</script>
<style>
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