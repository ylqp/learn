// #### 数组去重

// ```javascript
let arr = [1,2,1,3,4,3,2,1,4,6,7,5,4,5,6]  //多种方法实现
// ```
arr =  [1,2,3,3,2,1,1,1,2,2,3,3,3] 
function qc01(arr) {
    let temp = arr.concat()
    arr.forEach((va, ai) => {
        temp.forEach((vb, bi) => {
            if (va === vb && ai !== bi) {
                temp.splice(bi, 1)
                console.log(arr)
            }
        })
    });
    console.log(temp)

}
qc01(arr)
// arr =  [1,2,3,3,2,1,1,1,2,2,3,3,3] 
// function unique( arr ){
//     arr = arr.sort();
//     console.log(arr);

//     var arr1 = [arr[0]];
//     for(var i=1,len=arr.length;i<len;i++){
//         if(arr[i] !== arr[i-1]){
//             arr1.push(arr[i]);
//         }
//     }
//     console.log(arr1)
//     return arr1;
// }
// unique(arr)