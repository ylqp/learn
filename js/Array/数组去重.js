// 数组去重

function dedupe_01 (arr) {
    return Array.from(new Set(arr))
}
function dedupe_02 (arr) {
    return [...new Set(arr)]
}
let arr = [1, 1, 2, 3, 3, 5]
console.log(dedupe_02(arr))