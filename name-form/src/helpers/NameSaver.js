import Request from './Request'

class stringInterpolator {

  constructor() {
    this.name = ''
  }

  getEncName() {
    let result = ''
    const fullLength = this.name.length
    for (let i = 0; i < fullLength; i++) {
      const index = this.getMiddleCharIndex(this.name)
      result += this.name.charAt(index)
      this.name = this.name.substr(0, index) + this.name.substr(index + 1)
    }
    return result
  }

  getMiddleCharIndex(name) {
    if (name.length % 2 === 0) {
        return (name.length/2) - 1
    } else {
        return Math.floor(name.length/2)
    }
  }

}

export default class NameSaver {

  constructor() {
    this.firstName = ''
    this.lastName = ''
    this.callback = () => { return }
  }

  save() {
    const interpolate = new stringInterpolator()
    interpolate.name = this.firstName
    const firstNameEnc = interpolate.getEncName()
    interpolate.name = this.lastName
    const lastNameEnc = interpolate.getEncName()
    const req = new Request()
    req.endpoint = 'names/saveName'
    req.data = {
      firstName: this.firstName,
      lastName: this.lastName,
      firstNameEnc: firstNameEnc,
      lastNameEnc: lastNameEnc
    }
    req.callback = this.callback
    req.run()
  } 

}
