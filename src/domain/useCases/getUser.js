import { GitHubProvider } from '../providers/gitHub'

export class GetUser {
  gitHub = new GitHubProvider()
  async execute (userName) {
    const resp = await this.gitHub.getUser(userName)
    return resp
  }
}
