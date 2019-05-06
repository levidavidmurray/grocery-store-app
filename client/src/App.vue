<template>
	<div id="app">
		<SiteNavBar />
		<router-view/>
	</div>
</template>

<script>
	import SiteNavBar from './components/SiteNavBar';

	export default {
		name: 'App',

		components: { SiteNavBar }
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Poppins', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin: 0 auto;
	}

	html, * {
		box-sizing: border-box;
		margin: 0;
	}

	body {
		background-color: #f9f9f9;
	}
</style>
