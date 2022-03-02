// 求1+2+3+...+100的程序 ==>人脑比电脑算得快


// 2021-10-26
// 反转字符串  要求字符串不能大于1000
// function reverseStr (str) {
//     if (str.length <= 1000) {
//         return str.split('').reverse().join('')
//     }
// }

// console.log(reverseStr('dfjhkasdhfjkasdhfjksehdfj'))

// 斐波那契数列
// 2021-10-27
// function Fibonacci(n)
// {
//     if (n == 0){
//         return 0
//     } 
//     if (n == 1) {
//         return 1
//     }
//     if(1< n && n <= 39) {
//         return Fibonacci(n - 1) + Fibonacci(n - 2)
//     }
// }

// console.log(Fibonacci(3))

// 如果有一个自然数 a 能被自然数 b 整除，则称 a 为 b 的倍数， b 为 a 的约数。几个自然数公有的约数，叫做这几个自然数的公约数。公约数中最大的一个公约数，称为这几个自然数的最大公约数。

// 输入 a 和 b , 请返回 a 和 b 的最大公约数。

// 数据范围：a>=1 b<=10的9次方

function gcd (a, b) { //算法复杂度太大
    // let max = Math.max(a, b)
    let min = Math.min(a, b)
    let result = 1 
    for (let i = 1; i<= min; i++) {
        let flag = (a%i === 0) && (b%i === 0)
        if (flag) {
            result = i
        }
    }
    return result
}

function gcd02 (a, b) {
    if(b == 0){
        return a;
    }
    var r = a % b;
    console.log(r);
    return gcd(b,r);
}
console.log(gcd(5, 15))