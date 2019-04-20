<template>
	<div class="shop">
		<Catalog />
	</div>
</template>

<script>
	import Catalog from '../components/Shop/Catalog';
	import { mapGetters } from 'vuex';

	export default {
		name: "shop",

		data() {
			return {
			}
		},

		mounted() {

		},

		computed: {

		},

		components: {Catalog}
	}
</script>

<style lang="scss">
	@import './Shop';
</style>
