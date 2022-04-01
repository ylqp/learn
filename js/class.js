class CoolGuy {
  specialTrick = ''

  CoolGuy(trick) {
    this.specialTrick = trick
  }
  showOff() {
    console.log(`jjjjj${this.specialTrick}`)
  }
}

joe = new CoolGuy('ddd')
joe.showOff()
console.log(joe)