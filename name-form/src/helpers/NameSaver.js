import Request from './Request'
import StringInterpolator from './StringInterpolator'

export default class NameSaver {

  constructor() {
    this.firstName = ''
    this.lastName = ''
    this.callback = () => { return }
  }

  save() {
    const interpolate = new StringInterpolator()
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
