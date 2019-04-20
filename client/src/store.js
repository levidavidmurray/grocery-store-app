import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		shoppingCart: []
	},

	getters: {
		cartItemsAll: (state) => {
			return state.shoppingCart;
		},

		cartItemsIndex: (state) => (index) => {
			return state.shoppingCart[index];
		},

		cartLength: (state, getters) => {
			return getters.cartItemsAll.length;
		},

		cartPrice: (state, getters) => {
			let total = 0.00;

			getters.cartItemsAll.forEach((item) => {
				total += parseFloat(item.currentPrice.substring(1, item.currentPrice.length));
			});

			return total.toFixed(2);
		}
	},

	mutations: {
		addToCart(state, payload) {
			state.shoppingCart = [...state.shoppingCart, payload.item];
		},

		removeFromCart(state, index) {
			state.shoppingCart = [...state.shoppingCart.splice(index, 1)];
		}
	},
	actions: {}
});
