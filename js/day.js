
const dairyList = [
    '77777',
    '友好亲和',
    '勇于承担',
    '善待他人',
    '44444',
    '感恩',
    '勤学不辍',
    
]
function getDay () {
    return new Date().getDay()
}

let today = getDay()
console.log(dairyList[getDay()])


