<template>
  <div>

    <CardTemp v-bind="newCard" />

    <form @submit.prevent="addCard">
        
        <label>CARD NUMBER</label><br>
        <input type="text" v-model="newCard.number" placeholder="XXXX XXXX XXXX XXXX" 
        minlength="16" maxlength="16"><br>

        <label>CARDHOLDER NAME</label><br>
        <input type="text" v-model="newCard.holder" placeholder="FIRST NAME  LAST NAME"><br>
        <label>VALID THRU</label><br>

        <select class="valid" v-model="newCard.validMonth">
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>

        <select class="valid" v-model="newCard.validYear">
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
        </select><br>

        <label>CCV</label><br>
        <input class="ccv" type="text" placeholder="XXX" 
        minlength="3" maxlength="3"><br>

        <label>VENDOR</label><br>
        <select class="vendor" v-model="newCard.vendor">
            <option value="bitcoin-inc">Bitcoin Inc</option>
            <option value="blockchain-inc">Block Chain Inc</option>
            <option value="evil-corp">Evil Corp</option>
            <option value="ninja-bank">Ninja Bank</option>
        </select>

        <button>ADD CARD</button>

    </form>
  </div>
</template>

<script>

import CardTemp from '../components/CardTemp'

export default {

    name: 'CardForm',

    components: {
        CardTemp
    },

    data() {
        return {

            newCard: {
                id: this.cardId = Date.now().toString(),
                holder: "",
                vendor: "",
                number: "",
                validMonth: "",
                validYear: ""
            }
        }
    },

    methods: {
        
        addCard() {

                this.$root.$data.cards.push(this.newCard);
                console.log(this.newCard)
                this.$router.push("/")
        }

    }
}
</script>

<style>

form {
    max-width: 18rem;
    text-align: left;
}

label {
    display: inline-block;
    font-size: 0.6em;
    letter-spacing: 1px;
}

input, .vendor {
    width: 18rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border: 1px;
    border-color: #8888;
    border-radius: 7px;
    font-size: 0.6em;
    text-transform: uppercase;
}

.valid, .ccv {
    
    width: 9rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 7px;
    border-color: #8888;
    font-size: 0.6em;
    text-transform: uppercase;
}

button {
  width: 18rem;
  height: 3rem;
  margin-top: 1rem;
  border-radius: 14px;
  border-color: #8888;
  box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.8),
              3px 3px 5px rgba(0, 0, 0, 0.2);
  font-weight: bold;
}


</style>