const fa = () => {
    console.log(this)
}
let o = { name: 123}
// fa.call(o)
function fb (aa) {
    console.log(arguments)
}
fb(1)