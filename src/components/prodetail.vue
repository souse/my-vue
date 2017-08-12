<template>
	<div class="prodetail_container">
		prodetail
	</div>
</template>
<script>
	import { mapState } from 'vuex'

	export default {
		name: 'prodetail',
		data() {
			return {
				product: 1
			}
		},
		computed: {
			...mapState([
				'products'
			])
		},
		mounted() {
			console.log(this.$route)
		}
	}
</script>