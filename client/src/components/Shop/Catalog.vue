<template>
	<div class="catalog">
		<CategoryOptions
				:options="options"
				:active-category="activeCategory"
				@category-selected="changeCategory"
		/>
		<div class="catalog-display">
			<ResultsFilter/>
			<div class="category-display">
				<Category :class="{loading: loading}" :items="items"/>
				<div class="loader" v-if="loading">
					<vue-loaders name="pacman" scale="1" color="#42b983"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	import CategoryOptions from './CategoryOptions';
	import Category from './Category';
	import ResultsFilter from './ResultsFilter';

	export default {
		name: "Catalog",

		data() {
			return {
				options: ['bakery', 'dairy', 'deli', 'meat', 'pasta', 'produce'],
				activeCategory: undefined,
				items: [],
				loading: false
			}
		},

		methods: {
			changeCategory(category) {
				this.activeCategory = category;
				this.loading = true;

				axios.get(`http://localhost:4070/${category}`).then(response => {
					this.items = [...response.data.filter(item => {
						let price = item.currentPrice.substring(1, item.currentPrice.length);
						return !isNaN(parseFloat(price));
					})];
					this.loading = false;
				});
			}
		},

		mounted() {
			this.changeCategory(this.options[0]);
		},

		components: {CategoryOptions, Category, ResultsFilter}
	}
</script>

<style scoped lang="scss">
	.catalog {
		width: 100%;
		font-family: 'Poppins', sans-serif;

		.catalog-display {
			display: flex;

			.category-display {
				position: relative;
				flex-grow: 1;
				flex-basis: 0;

				.loading {
					opacity: 0.3;
				}
			}
		}

		.loader {
			height: 60vh;
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 5;
		}
	}
</style>