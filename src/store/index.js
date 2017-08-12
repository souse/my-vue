import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	userInfo: null,
	cart: null,
	products: []		
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})