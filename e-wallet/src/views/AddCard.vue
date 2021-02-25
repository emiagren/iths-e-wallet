<template>
    <div>
        <h1>ADD A NEW<br>BANK CARD</h1>
        <p>NEW CARD</p>
        <CardTemp />
        <CardForm />
        <button>
            <router-link id="cancel" to="/">CANCEL</router-link>
        </button>
    </div>
</template>

<script>
import CardTemp from '../components/CardTemp.vue'
import CardForm from '../components/CardForm.vue'

export default {

  components: { 
      
      CardTemp,
      CardForm
      
      },

}
</script>

<style>

h1 {
    font-size: 1.2em;
    padding: 0.7em;
}

p {
    font-size: 0.6em;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

#cancel {
    text-decoration: none;
}

</style>