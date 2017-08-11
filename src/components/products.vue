<template>
  	<div class="products_container">
		这是产品列表页面
	</div>
</template>

<script>
	export default {
	  	name: 'products',
	  	created () {
		    this.$store.dispatch('getProductsInfo')
		}
	}
</script>