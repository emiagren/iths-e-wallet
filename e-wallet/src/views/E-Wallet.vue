<template>
  <div>
    <p>
        ACTIVE CARD
    </p>
    <CardTemp v-bind="activeCard"/>
    <button class="btn-delete-card" v-on:click="deleteCard">DELETE THIS CARD</button>
    <p>MY WALLET</p>
    <div class="stack-wrap">
    <CardStack />
    </div>
    <button class="btn-add-card">
        <router-link class="btn-link" to="/addCard">ADD NEW CARD</router-link>
    </button>
  </div>
</template>

<script>

import CardTemp from '../components/CardTemp'
import CardStack from '../components/CardStack'

export default {

    components: {
        CardTemp,
        CardStack
    },

    computed: {
      activeCard: function() {
        return this.$root.$data.cards[this.$root.$data.activeCardIndex]
      }
    },

    methods: {
      deleteCard(){
      let confirmation = window.confirm("Please confirm that you want to delete this card.");
      if (confirmation === true){
      this.$root.$data.cards.splice(this.$root.$data.activeCardIndex, 1);
      this.$root.$data.activeCardIndex = -1;
      }
      this.$router.go(0) 
      }
    }

}
</script>

<style>

.btn-delete-card {
  width: 7rem;
  height: 1.3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 7px;
  border-color: #8888;
  box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.8),
              3px 3px 5px rgba(0, 0, 0, 0.2);
  font-size: 9px;
  font-weight: bold;
}

.stack-wrap {
  margin-top: 10rem;
}

.btn-add-card {
  width: 18rem;
  height: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.8),
              3px 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  border-color: #8888;
  font-weight: bold;
}

.btn-link {

  text-decoration: none;
}

p {
    font-size: 0.6em;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

</style>