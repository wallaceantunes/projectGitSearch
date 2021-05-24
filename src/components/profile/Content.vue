<template>
  <div class="bg-white" v-if="user">
    <div class="header" />
    <div class="container">
      <div class="row-img">
        <img class="img-responsive img-circle img-profile" :src="user.avatar_url" alt="">
      </div>
      <div class="row row-info">
        <div class="col md-5 lg-5">
          <p class="name-person">{{user.name? user.name : user.login}}</p>
          <p class="tag-person">
            <vue-feather size="18" type="user" />
            <span class="tag-name">{{user.login}}</span>
          </p>
        </div>
        <div class="col md-7 lg-7">
          <div class="row">
            <div class="col xs-4 sm-4 md-4 lg-4 info-person">
              <vue-feather size="18" type="user" />
              <span class="tag-name">{{user.following}}</span>
              <p class="tag-desc">Seguindo</p>
            </div>
            <div class="col xs-4 sm-4 md-4 lg-4 info-person">
              <vue-feather size="18" type="folder" />
              <span class="tag-name">{{user.public_repos}}</span>
              <p class="tag-desc">Projetos</p>
            </div>
            <div class="col xs-4 sm-4 md-4 lg-4 info-person">
              <vue-feather size="18" type="users" />
              <span class="tag-name">{{user.followers}}</span>
              <p class="tag-desc">Seguidores</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                {{user.bio? user.bio : 'Não contém Bio'}}
              </p>
              <p class="p-icon" v-if="user.location">
                <vue-feather size="18" type="home" />
                <span class="text-icon">{{user.location}}</span>
              </p>
              <p class="p-icon" v-if="user.blog">
                <vue-feather size="18" type="globe" />
                <a :href="user.blog" target="_blank" class="text-icon">{{user.blog}}</a>
              </p>
            </div>
          </div>
          <div class="tab-content" v-if="tab === 'projetos'">
            <div class="container">
              <div
                class="item-project"
                v-for="project in projects"
                :key="project.id"
              >
                <p class="project-title">{{project.name}}</p>
                <div class="hidden-md hidden-lg">
                  <p class="text-project">
                    {{project.description}}
                  </p>
                  <p>
                    <span class="text-technology">
                      <template v-if="project.language">
                        <span class="dot" :style="{'background-color': colors[project.language].color || '#fff'}"/>
                        <span class="text-black">{{project.language}}</span>
                      </template>
                    </span>
                    <span class="text-date">Atualizado em {{project.updated_at ? moment(project.updated_at).format('DD/MM/YYYY') : moment(project.created_at).format('DD/MM/YYYY')}}</span>
                  </p>
                </div>
                <div class="hidden-xs hidden-sm">
                  <div class="row">
                    <div class="col md-9 lg-9">
                      <p class="text-project">
                        {{project.description}}
                      </p>
                    </div>
                    <div class="col md-3 lg-3">
                      <div class="row">
                        <div class="col">
                          <span class="text-technology" v-if="project.language">
                            <span class="dot" :style="{'background-color': colors[project.language].color || '#fff'}"/>
                            <span class="text-black">{{project.language}}</span>
                          </span>
                        </div>
                        <div class="col">
                          <span class="text-date">Atualizado em {{project.updated_at ? moment(project.updated_at).format('DD/MM/YYYY') : moment(project.created_at).format('DD/MM/YYYY') }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row text-center">
                <div v-if="noMoreProjects" class="col">Não existem mais projetos.</div>
              </div>
              <Observer @intersect="intersect"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import colors from './color.json'
import Observer from '@/components/utils/observer.vue'
import { createNamespacedHelpers } from 'vuex'
const projectModuleHelper = createNamespacedHelpers('user/project')
const userModuleHelper = createNamespacedHelpers('user')

export default {
  components: {
    Observer
  },
  data () {
    return {
      tab: 'sobre',
      colors
    }
  },
  computed: {
    ...userModuleHelper.mapState(['user']),
    ...projectModuleHelper.mapState(['projects', 'noMoreProjects'])
  },
  watch: {
    error (value) {
      if (value) {
        this.$store.commit('user/setUser', null)
        this.$router.push({ name: 'Search' })
      }
    }
  },
  mounted () {
    this.getProfile()
  },
  methods: {
    getProfile () {
      this.$store.dispatch('user/getUser', this.$route.params.name)
    },
    changeTab (value) {
      this.tab = value
    },
    intersect () {
      this.$store.dispatch('user/project/incrementProjects')
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/headerProfile.scss';
@import '@/assets/scss/contentProfile.scss';
</style>
