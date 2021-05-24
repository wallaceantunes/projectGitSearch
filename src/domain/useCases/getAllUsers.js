import { GitHubProvider } from '../providers/gitHub'

export class GetAllUsers {
  gitHub = new GitHubProvider()
  async execute (params) {
    const resp = await this.gitHub.getAllUsers(params)
    return resp
  }
}
