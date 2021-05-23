<template>
  <div class="bg-white">
    <div class="header" />
    <div class="container">
      <div class="row-img">
        <img class="img-responsive img-circle img-profile" src="https://via.placeholder.com/100x100" alt="">
      </div>
      <div class="row row-info">
        <div class="col md-5 lg-5">
          <p class="name-person">Nome pessoa</p>
          <p class="tag-person">
            <vue-feather size="18" type="user" />
            <span class="tag-name">tag_pessoa</span>
          </p>
        </div>
        <div class="col md-7 lg-7">
          <div class="row">
            <div class="col xs-4 sm-4 md-4 lg-4 info-person">
              <vue-feather size="18" type="user" />
              <span class="tag-name">115</span>
              <p class="tag-desc">Seguindo</p>
            </div>
            <div class="col xs-4 sm-4 md-4 lg-4 info-person">
              <vue-feather size="18" type="folder" />
              <span class="tag-name">31</span>
              <p class="tag-desc">Projetos</p>
            </div>
            <div class="col xs-4 sm-4 md-4 lg-4 info-person">
              <vue-feather size="18" type="users" />
              <span class="tag-name">44</span>
              <p class="tag-desc">Seguidores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '@/assets/scss/headerProfile.scss'
</style>
