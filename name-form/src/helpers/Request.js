export default class Request {
  
  constructor() {
    this.url = 'http://localhost:4321/'
    // this.url = 'http://localhost:4321/'
    this.endpoint = ''
    this.data = {}
    this.callback = () => { return }
  }

  run() {
    return fetch(this.url + this.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.data)
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
  }

}