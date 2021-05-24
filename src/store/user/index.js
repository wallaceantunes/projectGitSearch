import { GetAllUsers } from '../../domain/useCases/getAllUsers'
import { GetUser } from '../../domain/useCases/getUser'
import { ProjectModule } from '../project'

export const UserModule = {
  namespaced: true,
  state: {
    inputSearch: null,
    users: [],
    page: 0,
    perPage: 10,
    user: null,
    noMoreUsers: false
  },
  mutations: {
    setInputSearch (state, inputSearch) {
      state.inputSearch = inputSearch
    },
    setUsers (state, users) {
      state.users = users
    },
    setPage (state, page) {
      state.page = page
    },
    setUser (state, user) {
      state.user = user
    },
    setNoMoreUsers (state, noMoreUsers) {
      state.noMoreUsers = noMoreUsers
    }
  },
  actions: {
    async getUsers (context, params) {
      try {
        context.commit('setLoading', true, { root: true })
        const getAllUsers = new GetAllUsers()
        const users = await getAllUsers.execute({
          q: params.q,
          page: context.state.page,
          per_page: context.state.perPage
        })
        if (users.data.items.length === 0) {
          context.commit('setNoMoreUsers', true)
        }
        context.commit('setUsers', [...context.state.users, ...users.data.items])
      } catch (error) {
        context.commit('setError', error.response?.data?.message || 'Erro interno.', { root: true })
      } finally {
        context.commit('setLoading', false, { root: true })
      }
    },
    async searchUsers (context, params) {
      context.commit('setPage', 1)
      context.commit('setUsers', [])
      context.commit('setNoMoreUsers', false)
      context.dispatch('getUsers', params)
    },
    async incrementUsers (context, params) {
      if (context.state.page === 0 || context.state.noMoreUsers) {
        return
      }
      context.commit('setPage', context.state.page + 1)
      context.dispatch('getUsers', params)
    },
    async getUser (context, nameUser) {
      try {
        const getUser = new GetUser()
        const user = await getUser.execute(nameUser)
        context.commit('setUser', user.data)
        context.dispatch('project/getProjects', nameUser)
      } catch (error) {
        context.commit('setError', error.response?.data?.message || 'Erro interno.', { root: true })
      }
    }
  },
  modules: {
    project: ProjectModule
  }
}
