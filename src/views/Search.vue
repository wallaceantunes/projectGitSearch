<template>
  <div class="container container-search">
    <div class="row">
      <div class="col offset-sm-2 sm-8 offset-md-4 md-4 offset-lg-4 lg-4">
        <div class="row text-center">
            <img class="img-responsive" src="@/assets/images/gitHubLogo.png" width="140px" height="140px">
        </div>
        <div class="row text-center">
            <p class="title-img">GitSearch</p>
        </div>
        <div class="row">
          <div class="col-offset-lg-10 col-lg-10">
            <input
              class="input-style"
              type="text"
              placeholder="Pesquisar..."
            >
          </div>
        </div>
        <div class="row text-center">
          <div class="col xs-6 sm-6 md-6 lg-6">
            <button @click="goResultPage" class="btn" block>Ver Todos</button>
          </div>
          <div class="col xs-6 sm-6 md-6 lg-6">
            <button class="btn" block variant="success">Buscar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goResultPage () {
      this.$router.push({ name: 'Result' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/search.scss'
</style>
