<template>
    <div>
        <div class="card-template" :class="cardVendor">
            
            <section class="card-vendor-logo">
                <img v-if="vendor === 'bitcoin-inc'" src="../assets/vendor-bitcoin.svg">
                <img v-else-if="vendor === 'blockchain-inc'" src="../assets/vendor-blockchain.svg">
                <img v-else-if="vendor === 'evil-corp'" src="../assets/vendor-evil.svg">
                <img v-else-if="vendor === 'ninja-bank'" src="../assets/vendor-ninja.svg">
            </section>

            <section class="card-chip">
                <img v-if="vendor === 'bitcoin-inc'" src="../assets/chip-dark.svg" alt="chip-dark">
                <img v-else src="../assets/chip-light.svg" alt="chip-light">
            </section>
            
                <p class="card-number">{{cardNumSpacing}}</p>

            <section class="card-holder">
                <p class="cardholder-name">CARD HOLDER</p>
                <p class="holder">{{holder}}</p>
            </section> 

            <section class="card-expire">   
                <p class="valid-thru">VALID THRU</p>
                <p class="card-valid">{{validMonth}}/{{validYear}}</p>
            </section> 
        </div>
    </div>
</template>

<script>
export default {

    name: 'CardTemp',
    
    props:{
        
        id: {
            type: String,
            required: true
        },

        holder: {
            type: String,
            required: true
        },

        vendor: {
            type: String,
            required: true
        },

        number: {
            type: String,
            required: true
        },

        validMonth: {
            type: String,
            required: true
        },

        validYear: {
            type: String,
            required: true
        }
        },
    

    computed: {

        cardNumSpacing: function() {
            return this.number.substring(0,4) +" "+
            this.number.substring(4,8) +" "+ 
            this.number.substring(8,12) +" "+ 
            this.number.substring(12,16)
        },

    
        cardVendor: function() {
            if (this.vendor === "bitcoin-inc") {
                return "vendor-bitcoin"
            }
            else if (this.vendor === "blockchain-inc") {
                return "vendor-blockchain"
            }
            else if (this.vendor === "evil-corp") {
                return "vendor-evil"
            }
            else if (this.vendor === "ninja-bank") {
                return "vendor-ninja"
            }
            else {
                return "vendor-default"
            }
        }    
    }
}
    
</script>

<style scoped>

.card-template {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 12rem;
    width: 18rem;
    box-shadow: 0 2px 6px 2px #888888;;
    border-radius: 7px;
    margin-bottom: 1rem;
    }

.card-vendor-logo {
    grid-column: 3;
    grid-row: 1;
}

.card-vendor-logo img {
    width: 85%;
}

.card-chip img {
    grid-column: 1;
    grid-row: 1;
    width: 70%;
    margin-top: 1rem;
}

.card-number {
    grid-column: 1/4;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
}

.card-holder {
    grid-column: 1/3;
    grid-row: 3;
    flex-direction: column;
    margin-left: 12px;
}

.card-holder p {
    text-transform: uppercase;
    text-align: left;
    margin: 2px;
}

.holder, .card-valid {
    font-size: 0.8rem;
}

.card-expire {
    grid-column: 3;
    grid-row: 3;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
}

.card-expire p {
    text-align: right;
    margin: 2px;
}

p {
    color: #ccc;
    text-shadow: 1px 2px 2px #6b6b6b;
}

.vendor-default {
    background-color: lightgray;
}

.vendor-bitcoin {
    background-color: rgb(255, 217, 0);
    color: black;
    text-shadow: 1px 2px 2px #6b6b6b;
}

.vendor-blockchain {
    background-color: rgb(70, 0, 150);
}

.vendor-evil {
    background-color: rgb(255, 72, 0);
}

.vendor-ninja {
    background-color: rgb(0, 0, 0);
}

</style>