<template>
	<div class="item">
		<div class="item-info">
			<div class="name">{{ item.name }}</div>
			<div class="brand">{{ item.brand }}</div>
			<div class="price">{{ item.currentPrice }}</div>
		</div>
		<div class="item-bottom">
			<div @click="() => addToCart(item)" class="add-to-cart" :class="{clicked: clicked}">
				<div>CART</div>
			</div>
			<div class="sku">{{ item.sku }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Item",

		props: {
			item: Object
		},

		data() {
			return {
				clicked: false
			}
		},

		methods: {
			addToCart(item) {
				this.clicked = true;
				this.$store.commit('addToCart', {item});

				setTimeout(() => {
					this.clicked = false;
				}, 150);
			}
		}
	}
</script>

<style scoped lang="scss">
	.item {
		width: 200px;
		height: 250px;
		padding: 10px 15px;
		background-color: white;
		box-shadow: 1px 1px 7px -1px rgba(0,0,0,0.2);
		border: 1px solid rgba(0,0,0,0.15);
		margin-right: 20px;
		margin-bottom: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.item-info {
			& > * {
				text-align: left;
			}

			.name {
				font-size: 14px;
			}

			.brand {
				font-size: 12px;
				font-weight: bold;
				color: #42b983;
			}
		}

		.item-bottom {
			padding-top: 20px;
		}

		.add-to-cart {
			background-color: #42b983;
			width: 80px;
			padding: 7px;
			color: white;
			cursor: pointer;
			margin: 10px auto;
			user-select: none;
			font-family: 'Poppins', sans-serif;
			border: 1px solid #55a76a;
			border-bottom: 2px solid #278640;
			box-sizing: content-box;
			font-weight: 700;

			&.clicked {
				color: #2c3e50;
				border: none;
			}
		}

		.sku {
			font-size: 11px;
			color: #42b983;
			padding-top: 10px;
		}
	}
</style>