<template>
	<div class="category">
		<div class="category-info">
			<span>Showing {{ items.length }} of {{ count }} results</span>
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

		props: {
			items: Array,
			count: Number
		},

		data() {
			return {
				clicked: false
			}
		},

		methods: {

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
			margin-top: 16px;
			padding-bottom: 20px;
		}
	}
</style>