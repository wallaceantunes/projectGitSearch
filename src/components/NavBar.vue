<template>
  <div class="container nav">
    <div class="row">
      <div class="col offset-md-2 md-8 offset-lg-2 lg-8">
        <div class="nav-col" @click="goHome">
          <img class="img-responsive" src="@/assets/images/gitHubLogo.png" width="40px" height="40px">
          <span class="text-nav">GitSearch</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome () {
      this.$router.push({ name: 'Search' })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/navBar.scss'
</style>
