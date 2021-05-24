import { GitHubProvider } from '../providers/gitHub'

export class GetProjects {
  gitHub = new GitHubProvider()
  async execute (userName, params) {
    const resp = await this.gitHub.getProjects(userName, params)
    return resp
  }
}
