let _dom = document.getElementById('timeout')
let aa = 1000
setInterval(function () {
    _dom.innerText = aa
    aa--
}, 1000)

// document.body.onfocus = function () {
//     console.log('触发')
// }
// document.body.addEventListener('click', function () {
//     console.log('1234')
// }, false)

window.addEventListener('focus', function () {
    aa = 1000
})