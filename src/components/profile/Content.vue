<template>
  <div class="bg-white">
    <div class="row no-container-row">
      <div class="col md-4 lg-4">
        <div class="tab">
          <div class="container">
            <div class="row">
              <div :class="tab === 'sobre' ? 'col xs-6 sm-6 item-tab active' : 'col xs-6 sm-6 item-tab'" @click="changeTab('sobre')">Sobre</div>
              <div :class="tab === 'projetos' ? 'col xs-6 sm-6 item-tab active' : 'col xs-6 sm-6 item-tab'" @click="changeTab('projetos')">Projetos</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col md-8 lg-8 tab-border">
        <div class="container">
          <div class="tab-content" v-if="tab === 'sobre'">
            <div class="container">
              <p class="text-title">Bio</p>
              <p class="text-bio">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tincidunt erat ut dapibus. Sed vitae ante et dolor euismod fermentum eu vitae nunc. Sed eget massa ut eros condimentum tincidunt id quis enim. Suspendisse ipsum lectus, ullamcorper et fermentum id, sodales id elit. Nam ligula purus, volutpat at pellentesque vel, congue non purus. Phasellus quis ex dapibus, elementum ipsum ut, scelerisque elit. Duis eget metus eu enim hendrerit euismod. Quisque tortor odio, molestie ut hendrerit non, faucibus quis tortor.
              </p>
              <p class="p-icon">
                <vue-feather size="18" type="home" />
                <span class="text-icon">Endereço</span>
              </p>
              <p class="p-icon">
                <vue-feather size="18" type="globe" />
                <a href="https://site.com.br" target="_blank" class="text-icon">https://site.com.br</a>
              </p>
            </div>
          </div>
          <div class="tab-content" v-if="tab === 'projetos'">
            <div class="container">
              <div class="item-project">
                <p class="project-title">Projeto 01</p>
                <div class="hidden-md hidden-lg">
                  <p class="text-project">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tincidunt erat ut dapibus. Sed vitae ante et dolor euismod fermentum eu vitae nunc. Sed eget massa ut eros condimentum tincidunt id quis enim. Suspendisse ipsum lectus, ullamcorper et fermentum id, sodales id elit. Nam ligula purus, volutpat at pellentesque vel, congue non purus. Phasellus quis ex dapibus, elementum ipsum ut, scelerisque elit. Duis eget metus eu enim hendrerit euismod. Quisque tortor odio, molestie ut hendrerit non, faucibus quis tortor.
                  </p>
                  <p>
                    <span class="text-technology">
                      <span class="dot" />
                      <span class="text-black">JavaScript</span>
                    </span>
                    <span class="text-date">Atualizado em 16/12/2018</span>
                  </p>
                </div>
                <div class="hidden-xs hidden-sm">
                  <div class="row">
                    <div class="col md-9 lg-9">
                      <p class="text-project">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tincidunt erat ut dapibus. Sed vitae ante et dolor euismod fermentum eu vitae nunc. Sed eget massa ut eros condimentum tincidunt id quis enim. Suspendisse ipsum lectus, ullamcorper et fermentum id, sodales id elit. Nam ligula purus, volutpat at pellentesque vel, congue non purus. Phasellus quis ex dapibus, elementum ipsum ut, scelerisque elit. Duis eget metus eu enim hendrerit euismod. Quisque tortor odio, molestie ut hendrerit non, faucibus quis tortor.
                      </p>
                    </div>
                    <div class="col md-3 lg-3">
                      <div class="row">
                        <div class="col">
                          <span class="text-technology">
                            <span class="dot" />
                            <span class="text-black">JavaScript</span>
                          </span>
                        </div>
                        <div class="col">
                          <span class="text-date">Atualizado em 16/12/2018</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item-project">
                <p class="project-title">Projeto 02</p>
                <div class="hidden-md hidden-lg">
                  <p class="text-project">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tincidunt erat ut dapibus. Sed vitae ante et dolor euismod fermentum eu vitae nunc. Sed eget massa ut eros condimentum tincidunt id quis enim. Suspendisse ipsum lectus, ullamcorper et fermentum id, sodales id elit. Nam ligula purus, volutpat at pellentesque vel, congue non purus. Phasellus quis ex dapibus, elementum ipsum ut, scelerisque elit. Duis eget metus eu enim hendrerit euismod. Quisque tortor odio, molestie ut hendrerit non, faucibus quis tortor.
                  </p>
                  <p>
                    <span class="text-technology">
                      <span class="dot" />
                      <span class="text-black">JavaScript</span>
                    </span>
                    <span class="text-date">Atualizado em 16/12/2018</span>
                  </p>
                </div>
                <div class="hidden-xs hidden-sm">
                  <div class="row">
                    <div class="col md-9 lg-9">
                      <p class="text-project">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tincidunt erat ut dapibus. Sed vitae ante et dolor euismod fermentum eu vitae nunc. Sed eget massa ut eros condimentum tincidunt id quis enim. Suspendisse ipsum lectus, ullamcorper et fermentum id, sodales id elit. Nam ligula purus, volutpat at pellentesque vel, congue non purus. Phasellus quis ex dapibus, elementum ipsum ut, scelerisque elit. Duis eget metus eu enim hendrerit euismod. Quisque tortor odio, molestie ut hendrerit non, faucibus quis tortor.
                      </p>
                    </div>
                    <div class="col md-3 lg-3">
                      <div class="row">
                        <div class="col">
                          <span class="text-technology">
                            <span class="dot" />
                            <span class="text-black">JavaScript</span>
                          </span>
                        </div>
                        <div class="col">
                          <span class="text-date">Atualizado em 16/12/2018</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      tab: 'sobre'
    }
  },
  methods: {
    changeTab (value) {
      this.tab = value
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/contentProfile.scss'
</style>
