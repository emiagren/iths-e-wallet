import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,

  data: function() {

    return {

      activeCardIndex: -1,

      cards: [

        {
          id: "1612568935572",
          holder: "Richie Rich",
          vendor: "bitcoin-inc",
          number: "4329847283978069",
          validMonth: "12",
          validYear: "21"
        },

        {
          id: "1612568856494",
          holder: "Richie Rich",
          vendor: "evil-corp",
          number: "6666666666666666",
          validMonth: "6",
          validYear: "21"
        },

        {
          id: "1612569044099",
          holder: "Richie Rich",
          vendor: "blockchain-inc",
          number: "1111222233334444",
          validMonth: "8",
          validYear: "22"
        },

        {
          id: "1612568984459",
          holder: "Richie Rich",
          vendor: "ninja-bank",
          number: "1234567891011123",
          validMonth: "9",
          validYear: "22"
        }

      ]

    }
  },
  render: h => h(App)
}).$mount("#app");
