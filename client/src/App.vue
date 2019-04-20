<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/shop">Shop</router-link> |
      <router-link to="/cart">Cart ({{ cartLength }}) - ${{ cartPrice }}</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 90%;
  margin: 0 auto;
}

html, * {
  box-sizing: border-box;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
