<template>
  <div>
    <Loader
      v-if="loading"
    />
    <div 
      class="app-main-layout"
      v-else
    >
      <Navbar @click="isOpen = !isOpen"></Navbar>
      <Sidebar 
        v-model="isOpen"
        :key="locale"
      ></Sidebar>
      <main 
        class="app-content" 
        :class="{ 'full': !isOpen }"
      >
        <div class="app-page">
          <router-view></router-view>
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link 
          class="btn-floating btn-large blue"
          to="/record"
          :key="locale"
          v-tooltip.noloc="localizedText"
        >
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue';
import Sidebar from '@/components/app/Sidebar.vue';
import messages from '@/utils/messages'
import localizeFilter from '@/filters/localize.filters'


export default {
  name: 'main-default',
  data: () => ({
    isOpen: true,
    loading: true
  }),
  async mounted() {
    await this.$store.dispatch('fetchInfo')
    this.loading = false
  },
  components: {
    Navbar,
    Sidebar
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    locale() {
      return this.$store.getters.info.locale
    },
    localizedText() {
      return `${localizeFilter('CreateNewRecord')}`
    }
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || 'Что-то пошло не так')
    }
  }
}
</script>

<style>

</style>
