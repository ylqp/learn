// function getDateTimeText () {
//     let text = ''
//     let date = new Date()
//     let hour = date.getHours()
//     console.log(hour) //13
//     console.log(hour >= 13 && hour < 17)
//     // hour = "true"
//     switch (hour) {
//       case hour >= 0 && hour < 6:
//         text = '凌晨好~'
//         break
//       case hour >= 6 && hour < 11:
//         text = '早上好~'
//         break
//       case hour >= 11 && hour < 13:
//         text = '中午好~'
//         break
//       case :
//         text = '下午好~'
//         break
//       case hour >= 17:
//         text = "晚上好~"
//         break
//       default :
//         text = '你好'
//     }
//     // console.log(text)
//     return text
// }

function test () {
    let text
    let aa = "true"
    switch (aa) {
        case "true":
            text = '123'
        case "false":
            text = '456'
        default:
            text = '9'
    }
    return text
}
console.log(test())