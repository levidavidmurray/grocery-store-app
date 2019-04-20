<template>
	<div class="results-filter">
		<h3>Filter</h3>
	</div>
</template>

<script>
	export default {
		name: "ResultsFilter"
	}
</script>

<style scoped lang="scss">
	@import '../../assets/styles/variables';

	.results-filter {
		width: 250px;
		margin-right: 20px;
		background-color: white;
		box-sizing: content-box;
		border: $border-primary;
		box-shadow: $box-shadow-primary;

		h3 {
			font-size: 30px;
			padding-top: 20px;
			padding-bottom: 10px;
			font-family: 'Lobster Two', cursive;
			color: #42b983;
			text-shadow: 1px 1px 3px 4px rgba(0,0,0,0.2);
			width: 95%;
			margin: 0 auto;
			box-shadow: 0 4px 6px -5px rgba(0, 0, 0, 0.2);
		}
	}
</style>