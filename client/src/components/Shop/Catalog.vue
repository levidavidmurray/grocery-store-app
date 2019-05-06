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
				<Category :class="{loading: loading}" :items="items" :count="categoryCount"/>
				<div class="loader" v-if="loading">
					<vue-loaders name="pacman" scale="1" color="#42b983"/>
				</div>
				<Paginator :total="categoryCount" :limit="pageLimit" :pageNumber="pageNumber"/>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	import CategoryOptions from './CategoryOptions';
	import Category from './Category';
	import ResultsFilter from './ResultsFilter';
	import Paginator from './Paginator';

	export default {
		name: "Catalog",

		props: {
			pageNumber: null,
		},

		data() {
			return {
				options: ['bakery', 'dairy', 'deli', 'meat', 'pasta', 'produce'],
				categoryCount: 0,
				pageLimit: 20,
				activeCategory: undefined,
				items: [],
				loading: false
			}
		},

		methods: {
			changeCategory(category) {
				this.activeCategory = category;
				this.loading = true;

				this.getCategoryCount(category);

				axios.get(`http://localhost:4070/${category}?offset=${this.pageOffset}`).then(response => {
					this.items = [...response.data];
					this.loading = false;
				});

				window.scrollTo(0, 0);
			},

			getCategoryCount(category) {
				axios.get(`http://localhost:4070/${category}/count`).then(response => {
					if (response.status === 200 && !isNaN(response.data.count)) {
						this.categoryCount = response.data.count;
					}
				})
			}
		},

		created() {
			this.changeCategory(this.options[0]);
		},

		watch: {
			pageNumber()
			{
				this.changeCategory(this.activeCategory);
			}
		},

		computed: {
			pageOffset() {
				return (parseInt(this.pageNumber) - 1) * this.pageLimit;
			}
		},

		components: {CategoryOptions, Category, ResultsFilter, Paginator}
	}
</script>

<style scoped lang="scss">
	.catalog {
		width: 100%;
		font-family: 'Poppins', sans-serif;
		padding-bottom: 100px;

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