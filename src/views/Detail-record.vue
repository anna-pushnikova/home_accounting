<template>
  <div>
    <Loader
      v-if="loading"  
    />
    <div v-else-if="record">
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb">{{'Menu_History' | localize}}</router-link>
        <a @click.prevent class="breadcrumb">
          {{record.type === 'income' ? 'Доход' : 'Расход'}}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div 
            class="card"
            :class="{
              'red': record.type === 'outcome',
              'green': record.type === 'income'
            }">
            <div class="card-content white-text">
              <p>{{'Description' | localize}}: {{record.description}}</p>
              <p>{{'HistoryTable_Amount' | localize}}: {{record.amount | currency}}</p>
              <p>{{'HistoryTable_Category' | localize}}: {{record.categoryName }}</p>

              <small>{{record.date | date('datetime')}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p
      class="center"
      v-else
    >
      {{'Detail_NotFound' | localize}} id={{$route.params.id}} {{'Detail_NotFound2' | localize}}.
      <router-link
        to="/record"
      >
        {{'Detail_addFirst' | localize}}
      </router-link>
    </p>
  </div>

</template>

<script>
export default {
  name: 'Detail',
  metaInfo() {
    return {
      title: this.$title('DetailRecord')
    }
  },
  data: () => ({
    record: null,
    loading: true
  }),
  async mounted() {
    const id = this.$route.params.id
    const record = await this.$store.dispatch('fetchRecordById', id)
    const category = this.$store.dispatch('fetchCategoryById', record.categoryId)

    this.record = {
      ...record,
      categoryName: category.title
    }

    this.loading = false
  }
}
</script>

<style>

</style>
