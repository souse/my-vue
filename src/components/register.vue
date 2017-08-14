<template>
	<div class="register_container">
		<div class="register_content">
			<div class="page-part">
				<mt-field label="用户名" placeholder="请输入用户名"></mt-field>
				<mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
				<mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
				<mt-field label="性别" placeholder="请选择性别" v-model="asSex" readonly @click.native="sheetVisible = true"></mt-field>
				<mt-field label="生日" placeholder="请选择生日" v-model="birthday" readonly @click.native="open('picker')"></mt-field>	
			</div>
			<mt-button type="primary" @click.stop="submit">注册</mt-button>
		</div>
		<mt-actionsheet :actions="actions" v-model="sheetVisible" cancelText=""></mt-actionsheet>
		<mt-datetime-picker 
			ref="picker" 
			type="date" 
			:value.sync="pickerValue"
			year-format="{value} 年"
			month-format="{value} 月"
			date-format="{value} 日"
			@confirm="changeDate"
		>
		</mt-datetime-picker>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Picker, Actionsheet, DatetimePicker } from 'mint-ui'

	Vue.component(Picker.name, Picker)
	Vue.component(Actionsheet.name, Actionsheet)
	Vue.component(DatetimePicker.name, DatetimePicker)
	export default {
		name: 'register',
		data() {
			return {
				sheetVisible: false,
				actions: [],
				pickerVisible: false,
				pickerValue: '',
				user: {
					sex: 1,
					birthday: ''
				}
			} 	
		},
		computed: {
			asSex() {
				return !!this.user.sex ? '男' : '女'	
			},
			birthday() {
				return this.user.birthday
			}
		},
		mounted() {
			this.actions = [{
				id: 1,
				name: '男',
				method: this.chooseSex
			},{
				id: 0,
				name: '女',
				method: this.chooseSex
			}]	
		},
		methods: {
			chooseSex(obj) {
				this.user.sex = obj.id
			},
			open(picker) {
				this.$refs[picker].open();
			},
			changeDate(val) {
				console.log(new Date(val))
			},
			submit() {

			}	
		}
	}
</script>
<style>
	.register_content{
		padding: 0 15px;
	}
	.register_content button{
		width: 100%;
		margin-top: 20px;
	}
</style>
