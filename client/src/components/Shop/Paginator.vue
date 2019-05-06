<template>
	<div>
		<div class="paginator">
			<router-link
					v-for="page in totalPages"
					:key="page"
					:class="pageStyles(page+1)"
					:to="`/shop/page/${page + 1}`"
			>
				{{ page + 1 }}
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Paginator',

		props: {
			total: Number,
			limit: Number,
			pageNumber: null
		},

		methods: {
			pageStyles(pageNumber)
			{
				let isCurrentPage = false;
				if (!this.pageNumber && pageNumber === 1 || parseInt(this.pageNumber) === pageNumber)
				{
					isCurrentPage = true;
				}

				return {
					page: true,
					currentPage: isCurrentPage
				}
			}
		},

		computed: {
			totalPages() {
				const pageCount = Math.floor(this.total / this.limit);
				const pages = [];

				for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
					pages.push(pageIndex);
				}

				return pages;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../assets/styles/variables';

	.paginator {
		.page {
			margin-right: 8px;
			cursor: pointer;
			font-family: $font-primary;
			font-weight: bold;
			color: $color-primary;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}

		.currentPage {
			color: $color-secondary;
		}
	}
</style>