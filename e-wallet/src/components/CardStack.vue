<template>
    <div class="card-stack">
        <div class="card" v-for="(card, index) in cardStack" :key="card.id" @click="activateCard(index)">

            <CardTemp v-bind="card"/>

        </div>
    </div>
</template>

<script>

import CardTemp from '../components/CardTemp'

export default {

    name: 'CardStack',

        components: {
            CardTemp
        },

        computed: {

        cardStack: function() {
            return this.$root.$data.cards;
        },

    },

    methods: {

        activeCard(id) {
        this.$root.card(id);
        },
        activateCard(index) {
        this.$root.$data.activeCardIndex = index;
        }
    }
}
</script>

<style scoped>

.card {
    height: 12rem;
    width: 18rem;
    margin-top: -9.5rem;
    position: sticky;
    z-index: 1;
    }  

</style>