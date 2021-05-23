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
                <vue-feather class="input-icon" type="search" />
                <input
                  class="input-style"
                  type="text"
                  placeholder="Pesquisar..."
                >
              </div>
            </div>
          </div>
          <hr class="card-hr hidden-xs">
          <div class="row card-body">
            <div
              v-for="person in personList"
              :key="person.id"
              class="col sm-6 md-4 lg-3 card-item"
            >
              <img class="img-responsive img-circle img-size" src="https://via.placeholder.com/75x75" alt="">
              <span class="card-body-text hidden-sm hidden-md hidden-lg">{{person.nome}}</span>
              <p class="card-body-text hidden-xs">{{person.nome}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      personList: [
        {
          id: 1,
          nome: 'Wallace Antunes'
        },
        {
          id: 2,
          nome: 'Willyan Antunes'
        },
        {
          id: 3,
          nome: 'Gabriel Antunes'
        },
        {
          id: 4,
          nome: 'Arthur Antunes'
        },
        {
          id: 5,
          nome: 'Wallace Antunes'
        },
        {
          id: 6,
          nome: 'Willyan Antunes'
        },
        {
          id: 7,
          nome: 'Gabriel Antunes'
        },
        {
          id: 8,
          nome: 'Arthur Antunes'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/cardResult.scss'
</style>
