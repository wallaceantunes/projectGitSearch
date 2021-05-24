import { Api } from '../api'

export class GitHubProvider {
  constructor () {
    this.api = new Api()
  }

  async getAllUsers (params) {
    const resp = await this.api.get('search/users', params)
    return resp
  }

  async getUser (userName) {
    const resp = await this.api.get(`users/${userName}`)
    return resp
  }

  async getProjects (userName, params) {
    const resp = await this.api.get(`users/${userName}/repos`, params)
    return resp
  }
}
