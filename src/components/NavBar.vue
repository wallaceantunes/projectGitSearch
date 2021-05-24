<template>
    <div class="container nav">
      <div class="row">
        <div class="col offset-sm-2 sm-8 offset-md-2 md-8 offset-lg-2 lg-8">
          <div class="nav-col hidden-md hidden-lg hidden-sm">
            <vue-feather class="back-page" type="arrow-left"  @click="backPage"/>
            <b>{{nomeTela}}</b>
          </div>
          <div class="nav-col hidden-xs " @click="goHome">
            <img class="img-responsive" src="@/assets/images/gitHubLogo.png" width="40px" height="40px">
            <span class="text-nav">GitSearch</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    nomeTela: String()
  },
  methods: {
    backPage () {
      this.$router.back()
    },
    goHome () {
      this.$router.push({ name: 'Search' })
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/navBar.scss';
</style>
