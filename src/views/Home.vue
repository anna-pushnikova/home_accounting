<template>
  <div>
    <div class="page-title">
      <h3>{{'Account' | localize}}</h3>

      <button 
        class="btn waves-effect waves-light btn-small"
        @click="refresh()"
      >
        <i class="material-icons">refresh</i>
      </button>
    </div>
    
    <Loader v-if="loading"></Loader>

    <div class="row" v-else>
      <HomeBill
        :rates="currency.rates"
    />

      <HomeCurrency
        :rates="currency.rates"
        :date="currency.date"
      />
    </div>
</div>
</template>

<script>
import HomeBill from '@/components/HomeBill'
import HomeCurrency from '@/components/HomeCurrency'


export default {
  metaInfo() {
    return {
      title: this.$title('Account')
    }
  },
  data: () => ({
    loading: true,
    currency: null
  }), 
  components: {
    HomeBill,
    HomeCurrency
  },
  async mounted() {
    this.currency = await this.$store.dispatch('fetchCurrency')
    this.loading = false
  },
  methods: {
    async refresh() {
      this.loading = true 
      this.currency = await this.$store.dispatch('fetchCurrency')
      this.loading = false
    }
  }
}
</script>

<style>

</style>
