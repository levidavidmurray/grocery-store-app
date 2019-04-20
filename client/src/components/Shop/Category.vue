<template>
	<div class="category">
		<div class="category-info">
			<span>{{ items.length }} results</span>
		</div>
		<div class="category-items">
			<Item
					v-for="(item, index) in items"
					:key="`${index}-${item.sku}`"
					:item="item"
			/>
		</div>
	</div>
</template>

<script>
	import Item from './Item';

	export default {
		name: "Category",

		data() {
			return {
				clicked: false
			}
		},

		methods: {

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

		components: {Item}
	}
</script>

<style scoped lang="scss">
	.category {
		display: flex;
		flex-direction: column;

		.category-info {
			display: flex;
			justify-content: flex-start;

			span {
				margin-left: 5px;
				color: #949494;
				font-size: 15px;
			}
		}

		.category-items {
			display: flex;
			flex-wrap: wrap;
			margin-top: 12px;
		}
	}
</style>