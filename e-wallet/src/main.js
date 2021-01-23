import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,

  data: function() {

    return {
      
      cards: [

        {
          id: "432984728397",
          holder: "The name",
          vendor: "bitcoin inc",
          number: "4329847283978069",
          validMonth: "12",
          validDay: "5"
        },

        {
          id: "012345678910",
          holder: "The name",
          vendor: "ninja bank",
          number: "1234567891011123",
          validMonth: "9",
          validDay: "7"
        },

        {
          id: "111122223333",
          holder: "The name",
          vendor: "block chain inc",
          number: "1111222233334444",
          validMonth: "8",
          validDay: "16"
        },

        {
          id: "666666666666",
          holder: "The name",
          vendor: "evil corp",
          number: "6666666666666666",
          validMonth: "6",
          validDay: "6"
        }

      ]

    }
  },
  render: h => h(App)
}).$mount("#app");
