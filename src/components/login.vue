<template>
	<div class="login_container">
		<div class="login_box">
			<div class="page-part">
				<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
				<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			</div>	
			<mt-button type="primary" @click.stop="submit">登录</mt-button>
		</div>	
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Field, Button, Indicator } from 'mint-ui'
	import { loginInfo } from '../api/user'
	import { setStore } from '@/utils'

	Vue.component(Field.name, Field)
	Vue.component(Button.name, Button)
	export default {
	  	name: 'login',
	  	data() {
	  		return {
	  			username: null,
	  			password: null,
	  			userinfo: null
	  		}
	  	},
	  	computed: {},
	  	methods: {
	  		async submit() {
	  			let userinfo

	  			Indicator.open()
	  			userinfo = await loginInfo(this.username, this.password)

	  			console.log('login...userinfo...', userinfo)
	  			Indicator.close()
	  			if (userinfo != null) {
	  				this.$store.commit('SET_USERINFO', { userinfo })
	  				setStore('userInfo', userinfo)
	  				this.$router.push('/products')
	  			}
	  		}
	  	}
	}
</script>

<style>
	.login_box{
		padding: 0 15px;
		margin-top: 40%;
	}
	.login_box button {
		width: 100%;
		margin-top: 20px;
	}
</style>