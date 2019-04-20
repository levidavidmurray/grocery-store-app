<template>
	<div class="catalog">
		<CategoryOptions
				:options="options"
				:active-category="activeCategory"
				@category-selected="changeCategory"
		/>
		<Category :items="items"/>
	</div>
</template>

<script>
	import axios from 'axios';

	import CategoryOptions from './CategoryOptions';
	import Category from './Category';

	export default {
		name: "Catalog",

		data() {
			return {
				options: ['bakery', 'produce', 'meat', 'dairy', 'deli'],
				activeCategory: undefined,
				items: [],
			}
		},

		methods: {
			changeCategory(category) {
				this.activeCategory = category;

				axios.get(`http://localhost:4070/${category}`).then(response => {
					this.items = [...response.data];
				});
			}
		},

		mounted() {
			this.changeCategory(this.options[0]);
		},

		components: {CategoryOptions, Category}
	}
</script>

<style scoped lang="scss">
	.catalog {
		width: 100%;
	}
</style>