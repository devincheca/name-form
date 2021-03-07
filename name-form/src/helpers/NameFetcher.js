import Request from './Request'

export default class NameFetcher {

  constructor() {
    this.callback = () => { return }
  }

  getNames() {
    const req = new Request()
    req.endpoint = 'names/getNames'
    req.callback = this.callback
    req.run()
  }

}
