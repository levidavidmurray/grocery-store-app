<template>
	<div class="shop">
		<Catalog :pageNumber="pageNumber" />
	</div>
</template>

<script>
	import Catalog from '../components/Shop/Catalog';
	import { mapGetters } from 'vuex';

	export default {
		name: "shop",

		props: {
			pageNumber: null
		},

		data() {
			return {
			}
		},

		mounted() {
			console.log(this.pageNumber);
		},

		computed: {

		},

		components: {Catalog}
	}
</script>

<style lang="scss">
	@import './Shop';
</style>
