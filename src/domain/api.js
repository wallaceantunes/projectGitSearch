import axios from 'axios'
import env from '../../.env.js'

export class Api {
  constructor (host = env.GATEWAY) {
    this.host = host
  }

  get (path, params) {
    return axios.get(`${this.host}${path}`, { params })
  }
}
