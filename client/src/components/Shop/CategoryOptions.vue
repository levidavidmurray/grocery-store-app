<template>
	<div class="category-options">
		<div
				v-for="option in options"
				:key="option"
				@click="$emit('category-selected', option)"
				class="option"
				:class="{active: option === activeCategory}"
		>
			<div>{{ option }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CategoryOptions",

		props: {
			options: Array,
			activeCategory: String,
		},

		data() {
			return {

			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../assets/styles/variables';

	.category-options {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
		padding: 15px;
		font-family: 'Lobster Two', cursive;
		background-color: white;
		box-shadow: $box-shadow-primary;
		border-bottom: $border-primary;
		position: relative;
		z-index: 10;
		margin: 0 auto 20px;

		.option {
			font-size: 25px;
			font-weight: bold;
			width: 10%;
			cursor: pointer;
			text-transform: capitalize;
			user-select: none;
			padding: 5px 0;

			&:hover {
				color: #42b983;
			}

			&.active {
				color: #42b983;
				border-bottom: 2px solid #42b983;
			}
		}
	}
</style>