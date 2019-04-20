<template>
	<div class="category">
		<div
				v-for="(item, index) in items"
				class="item"
				:key="`${index}-${item.sku}`"
		>
			<div class="item-info">
				<div class="name">{{ item.name }}</div>
				<div class="brand">{{ item.brand }}</div>
				<div class="price">{{ item.currentPrice }}</div>
			</div>
			<div class="add-to-cart">
				<div @click="() => addToCart(item)">BUY</div>
			</div>
			<div class="sku">{{ item.sku }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Category",

		methods: {
			addToCart(item) {
				this.$store.commit('addToCart', {item});
			}
		},

		props: {
			items: Array,
			default: () => {
				return [{
					name: 'grocery-item',
					brand: 'grocery-brand',
					currentPrice: '$4.99',
					sku: '1294801948'
				}]
			}
		},
	}
</script>

<style scoped lang="scss">
	.category {
		display: flex;
		padding-top: 45px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.item {
		width: 200px;
		padding: 20px;
		background-color: azure;
		box-shadow: 3px 2px 9px -2px rgba(0, 0, 0, 0.2);
		margin-right: 20px;
		margin-bottom: 20px;

		.item-info {
			& > * {
				text-align: left;
			}
		}

		.add-to-cart {
			background-color: #42b983;
			width: 80px;
			padding: 7px;
			color: white;
			margin: 20px auto;
			cursor: pointer;
			user-select: none;
		}

		.sku {
		}
	}
</style>