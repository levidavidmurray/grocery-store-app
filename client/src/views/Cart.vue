<template>
	<div>
		<h1>Shopping Cart</h1>
		<div class="cart-item" v-for="item in cartItems" :key="item.sku">
			<div>{{ item.name }} - {{ item.currentPrice }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Cart",

		data() {
			return {
				cartItems: []
			}
		},

		created() {
			this.cartItems = this.$store.getters.cartItemsAll;
		},

		mounted() {
			console.log(this.cartItems);
		}
	}
</script>

<style scoped>

</style>