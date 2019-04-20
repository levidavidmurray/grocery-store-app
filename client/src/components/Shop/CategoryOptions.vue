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
	.category-options {
		display: flex;
		justify-content: space-evenly;
		width: 75%;
		margin: 0 auto;

		.option {
			font-size: 25px;
			font-weight: bold;
			cursor: pointer;
			text-transform: capitalize;

			&:hover {
				color: #42b983;
			}

			&.active {
				color: #42b983;
			}
		}
	}
</style>