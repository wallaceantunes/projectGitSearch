<template>
  <div id="app">
    <router-view/>
    <Spinner v-if="loading" />
  </div>
</template>

<script>
import Spinner from '@/components/utils/Spinner.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Spinner
  },
  computed: {
    ...mapState(['loading', 'error'])
  },
  watch: {
    error (value) {
      if (value === null) {
        return
      }
      this.$toast.open({
        message: value,
        type: 'error',
        position: 'top-right'
      })
      this.$store.commit('setError', null)
    }
  }
}
</script>
