<template>
 <span>
   <select
       class=""
       aria-label="Select currency"
       @change="changeCurrency($event.target.value)"
   >
       <option v-for="(currency, index) in currencies"
               :key="index" :value="currency.code">
         {{ currency.code }}
       </option>
     </select>
 </span>
</template>

<script>
export default {
  name: "CurrencyMode",
  data() {
    return {
      currencies: [{code: 'USD', rate: 1}, {code: 'ZWL', rate: 800}],
      selectedCurrency: null,
    }
  },
  methods: {
    changeCurrency(currencyCode) {
      console.log(`SELECTED CURRENCY...`, currencyCode);
      this.selectedCurrency = this.currencies.find((currency) => currency.code === currencyCode);
      console.log(this.selectedCurrency)
      this.$store.commit('setCurrency', this.selectedCurrency)
      //this.$store.state.currency = this.currencies.find((currency) => currency.code === currencyCode);
    }
  }
}
</script>

<style scoped>
select {
  width: 50px !important;
  height: 30px !important;
  font-size: 14px !important;
  font-weight: 500;
  border: none;
}
</style>