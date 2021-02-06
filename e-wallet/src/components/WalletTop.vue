<template>
  <div>
      <nav>
          <router-link id="home" to="/">E-WALLET</router-link>
      </nav>
  </div>
</template>

<script>
export default {

    name: 'WalletTop',

}
</script>

<style>

nav {
    padding: 1rem;
}

#home {
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
}
</style>