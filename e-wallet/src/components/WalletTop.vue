<template>
  <div>
      <nav>
          <router-link id="home" to="/">e-wallet</router-link>
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
    font-style: 'Roboto';
    font-size: 1.8em;
    font-weight: bold;
    text-decoration: none;
}
</style>