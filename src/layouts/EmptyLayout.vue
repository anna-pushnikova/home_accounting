<template>
  <div class="empty-layout">
    <router-view></router-view>
  </div>
</template>

<script>
import messages from '@/utils/messages'

export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || 'Что-то пошло не так')
    }
  }
}
</script>

<style lang="scss">

.empty-layout {
  background-image: url('../assets/images/accounting-1.png');
  background-repeat: no-repeat;
  background-size: contain;

  background-size: 40%;
  background-position: 93% 90%;
  
}

.empty-layout:before {
  content: '';
  position: absolute;
  width: 50%;
  height: 50%;
  bottom: 10%;
  left: 7%;
  
  background-image: url('../assets/images/accounting-2.png');
  background-repeat: no-repeat;
  background-size: contain;

  background-size: 60%;
  background-position: 0 20%;
  transform: rotate(-15deg);

  z-index: -1;

}

</style>
