export default class StringInterpolator {

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
    return result.toLowerCase()
  }

  getMiddleCharIndex(name) {
    if (name.length % 2 === 0) {
        return (name.length/2) - 1
    } else {
        return Math.floor(name.length/2)
    }
  }

}
