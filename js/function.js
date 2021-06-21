function add () {
    console.log(arguments)
    var sum = 0;
    for (var i = 0, j=arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}

// var aa = add(1,2,3)
// console.log(aa)

function add2 (num, ...args) {
    console.log(args)
}
add2(1,3,4)