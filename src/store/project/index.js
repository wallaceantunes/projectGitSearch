import { GetProjects } from '../../domain/useCases/getProjects'

export const ProjectModule = {
  namespaced: true,
  state: {
    projects: [],
    page: 0,
    perPage: 8,
    noMoreProjects: false
  },
  mutations: {
    setProjects (state, projects) {
      state.projects = projects
    },
    setPage (state, page) {
      state.page = page
    },
    setNoMoreProjects (state, noMoreProjects) {
      state.noMoreProjects = noMoreProjects
    }
  },
  actions: {
    async fetchProject (context) {
      try {
        context.commit('setLoading', true, { root: true })
        const userName = context.rootState.user.user.login
        const getProjects = new GetProjects()
        const projects = await getProjects.execute(userName, {
          page: context.state.page,
          per_page: context.state.perPage
        })
        if (projects.data.length === 0) {
          context.commit('setNoMoreProjects', true)
        }
        context.commit('setProjects', [...context.state.projects, ...projects.data])
      } catch (error) {
        context.commit('setError', error.response?.data?.message || 'Erro interno.', { root: true })
      } finally {
        context.commit('setLoading', false, { root: true })
      }
    },
    async getProjects (context) {
      context.commit('setPage', 1)
      context.commit('setProjects', [])
      context.commit('setNoMoreProjects', false)
      context.dispatch('fetchProject')
    },
    async incrementProjects (context) {
      if (context.state.page === 0 || context.state.noMoreProjects) {
        return
      }
      context.commit('setPage', context.state.page + 1)
      context.dispatch('fetchProject')
    }
  }
}
