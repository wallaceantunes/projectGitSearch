<template>
  <div class="container">
    <div class="row">
      <div class="col offset-md-1 md-10 offset-lg-1 lg-10">
        <div class="card">
          <div class="row card-header">
            <div class="col offset-sm-1 sm-5 offset-lg-1 lg-5 offset-md-1 md-5 hidden-xs">
              <p class="text-header">Search Results</p>
            </div>
            <div class="col sm-5 offset-lg-1 lg-4 offset-md-1 md-4 text-right">
              <div class="input-group">
                <vue-feather class="input-icon" type="search"/>
                <input
                  class="input-style"
                  type="text"
                  v-model="searchUsers"
                  @keyup.enter="search(searchUsers)"
                  placeholder="Pesquisar..."
                >
              </div>
            </div>
          </div>
          <hr class="card-hr hidden-xs">
          <div class="row card-body">
            <div
              v-for="user in users"
              :key="user.id"
              class="col sm-6 md-4 lg-3 card-item"
              @click="getProfile(user)"
            >
              <img class="img-responsive img-circle img-size" :src="user.avatar_url" alt="">
              <span class="card-body-text hidden-sm hidden-md hidden-lg">{{user.login}}</span>
              <p class="card-body-text hidden-xs">{{user.login}}</p>
            </div>
            <Observer @intersect="intersect"/>
            <div v-if="users.length > 0 && noMoreUser" class="col text-center">Não existem mais usuários.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Observer from '@/components/utils/observer.vue'
import { createNamespacedHelpers } from 'vuex'
const userModuleHelper = createNamespacedHelpers('user')
export default {
  components: {
    Observer
  },
  data () {
    return {
      searchUsers: null,
      page: 0
    }
  },
  computed: {
    ...userModuleHelper.mapState(['users', 'inputSearch', 'noMoreUser'])
  },
  mounted () {
    if (this.inputSearch) {
      this.searchUsers = this.inputSearch
      this.search(this.inputSearch)
    }
  },
  methods: {
    search (value) {
      if (value) {
        this.$store.dispatch('user/searchUsers', { q: value })
      }
    },
    getProfile (user) {
      this.$router.push({ name: 'Profile', params: { name: user.login } })
    },
    intersect () {
      this.$store.dispatch('user/incrementUsers', { q: this.searchUsers })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/cardResult.scss';
</style>
