'use strict';

var con = document.getElementById('container');
var btn = document.getElementById('btn');

// 事件捕获
// con.onclick = function () {
//     console.log('事件冒泡')
// }
// con.addEventListener('click', function () {
//     console.log('事件捕获')
// }, true)
// btn.onclick = function () {
//     console.log('点击了')
// }

// 跨浏览器程序
// let handler = function () {
//     console.log(event.type)
//     // 阻止冒泡
//     // event.stopPropagation()
// }
// EventUtil.addHandler(btn, 'click', handler)
// EventUtil.addHandler(con, 'click', function () {
//     console.log('container')
// })

btn.onclick = function (event) {
    console.log(event);
    event = EventUtil.getEvent(event);
    console.log(event);
};

console.log('123');
