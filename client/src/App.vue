<template>
	<div id="app">
		<div id="nav">
			<div class="nav-items">
				<div class="nav-item left">
					<router-link to="/" class="branding">Murray's</router-link>
				</div>
				<div class="nav-item-search">
					<input class="search-bar" type="text" placeholder="Search Groceries">
				</div>
				<div class="nav-item right">
					<router-link to="/shop">Shop</router-link>
					<router-link to="/deliveries">Deliveries</router-link>
					<router-link to="/cart">Cart ({{ cartLength }}) - ${{ cartPrice }}</router-link>
				</div>
			</div>
		</div>
		<router-view/>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		name: 'App',

		computed: {
			...mapGetters([
				'cartItemsAll',
				'cartItemsIndex',
				'cartLength',
				'cartPrice'
			])
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Poppins', cursive;
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

	#nav {
		background-color: #42b983;
		color: white;
		font-size: 18px;
		border-bottom: 3px solid #278640;
		box-sizing: content-box;

		.nav-items {
			margin: 0 auto;
			padding: 0 25px;
			display: flex;
			justify-content: center;

			.nav-item-search {
				width: 50%;
				display: flex;
				align-items: center;

				.search-bar {
					padding: 8px 0 8px 20px;
					border-radius: 40px;
					outline: none;
					border: none;
					font-size: 17px;
					font-family: 'Poppins', sans-serif;
					color: #2c3e50;
					width: 100%;
				}
			}

			.nav-item {
				width: 25%;
				display: flex;
				align-items: center;
				justify-content: space-evenly;

				&.left {
					justify-content: flex-start;

					.branding {
						font-family: 'Lobster Two', cursive;
						font-size: 55px;
						font-weight: normal;
						margin: 0;
						padding-bottom: 10px;
					}
				}

				&.right {

					a {
					}
				}
			}

			a {
				font-weight: bold;
				color: white;
				text-decoration: none;

				&.router-link-exact-active {
					color: #2c3e50;
				}
			}
		}
	}
</style>
